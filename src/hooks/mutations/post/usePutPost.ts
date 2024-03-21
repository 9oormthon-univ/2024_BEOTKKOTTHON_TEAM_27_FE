import { useMutation } from '@tanstack/react-query';
import { put } from '../../../apis/client';
import { BaseResponse } from '../../../types/Response';

interface ModifyPostRequest {
  userId: string;
  postingId: string;
  modifyTarget: string; // "Text", "Image"
}

interface ModifyPostResponse {
  userId: number;
  storeId: number;
  postingId: number;
}

export const modifyPost = async (body: ModifyPostRequest) => {
  const { data } = await put<BaseResponse<ModifyPostResponse>>('/api/posting', body);
  return data;
};

interface PutPostProps {
  onSuccess: (res: BaseResponse<ModifyPostResponse>) => void;
  onError: (e: Error) => void;
}

export const usePutPost = ({ onSuccess, onError }: PutPostProps) => {
  return useMutation({
    mutationFn: (body: ModifyPostRequest) => modifyPost(body),
    onSuccess: onSuccess,
    onError: onError,
  });
};
