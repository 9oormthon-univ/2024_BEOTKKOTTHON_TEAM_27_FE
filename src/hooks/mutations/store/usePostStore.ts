import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';

interface CreateStoreRequest {
  userId: number;
  name: string;
  address: string;
}

interface CreateStoreResponse {
  userId: number;
  storeId: number;
}

export const createStore = async (body: CreateStoreRequest) => {
  const { data } = await post<CreateStoreResponse>('/api/store', body);
  return data;
};

interface StoreMutationProps {
  onSuccess: (res: CreateStoreResponse) => void;
  onError: (e: Error) => void;
}

export const usePostStore = ({ onSuccess, onError }: StoreMutationProps) => {
  return useMutation({
    mutationFn: (body: CreateStoreRequest) => createStore(body),
    onSuccess: onSuccess,
    onError: onError,
  });
};
