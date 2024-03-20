import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';

interface LoginRequest {
  loginId: string;
  password: string;
}

interface LoginResponse {
  userId: number;
  storeId: number;
}

export const login = async (body: LoginRequest) => {
  const { data } = await post<LoginResponse>('/api/login', body);
  return data;
};

interface LoginMutationProps {
  onSuccess: (res: LoginResponse) => void;
  onError: (e: Error) => void;
}

export const useLoginMutation = ({ onSuccess, onError }: LoginMutationProps) => {
  return useMutation({
    mutationFn: (body: LoginRequest) => login(body),
    onSuccess: onSuccess,
    onError: onError,
  });
};
