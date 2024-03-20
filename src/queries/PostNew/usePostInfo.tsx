import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/client';
import { PostInfo } from '../../types/PostNew';

interface PostOnboardingInfoRes {
  userId: number;
  storeId: number;
  postingId: number;
}

const postOnboardingInfo = async (postInfo: PostInfo) => {
  const response = await post<PostOnboardingInfoRes>(`/posting`, postInfo);
  return response.data;
};

const usePostOnboardingInfo = () => {
  const mutation = useMutation({
    mutationFn: postOnboardingInfo,
    onSuccess: (data) => {
      console.log('포스팅 생성 성공?', data);
    },
  });

  return { mutation };
};
export default usePostOnboardingInfo;
