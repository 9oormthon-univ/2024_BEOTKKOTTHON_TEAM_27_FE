import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/client';
import { PostInfo } from '../../types/PostNew';
import { BaseResponse } from '../../types/Response';

interface PostOnboardingInfoRes {
  userId: number;
  storeId: number;
  postingId: number;
}

const postOnboardingInfo = async (body: PostInfo) => {
  const { data } = await post<BaseResponse<PostOnboardingInfoRes>>(`/api/posting`, body);
  return data;
};

interface PutPostProps {
  onSuccess: (res: BaseResponse<PostOnboardingInfoRes>) => void;
  onError: (e: Error) => void;
}

const usePostOnboardingInfo = ({ onSuccess, onError }: PutPostProps) => {
  return useMutation({
    mutationFn: (body: PostInfo) => postOnboardingInfo(body),
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default usePostOnboardingInfo;
