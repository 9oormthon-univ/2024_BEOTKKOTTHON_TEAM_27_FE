import { useMutation } from '@tanstack/react-query';
import { post } from '../../apis/client';
import { PostInfo } from '../../types/PostNew';

interface PostInfoResponses {
  data: PostOnboardingInfoRes;
}
interface PostOnboardingInfoRes {
  userId: number;
  storeId: number;
  postingId: number;
}

const postOnboardingInfo = async (postInfo: PostInfo) => {
  const response = await post<PostInfoResponses>(`/api/posting`, postInfo);
  return response.data;
};

const usePostOnboardingInfo = () => {
  const mutation = useMutation({
    mutationFn: postOnboardingInfo,
    onSuccess: (data: PostInfoResponses) => {
      const responseData = data.data; // 배열의 첫 번째 요소에 접근
      console.log('포스팅 생성 성공?', responseData);
      console.log('postingId:', responseData.postingId); // postingId에 접근
    },
  });

  return { mutation };
};

export default usePostOnboardingInfo;
