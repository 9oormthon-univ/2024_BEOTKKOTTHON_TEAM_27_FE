import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/gptClient';
import { PostInfo } from '../../../types/PostNew';
import { BaseResponse } from '../../../types/Response';

interface askChatGPTRequest {
  content: string;
}

interface askChatGPTResponse {
  text: string;
}

export const askChatGPT = async (body: askChatGPTRequest) => {
  const { data } = await post<askChatGPTResponse>('/api/gpt/chatgpt', body);
  return data;
};

interface PostChatGPTProps {
  onSuccess: (res: BaseResponse<askChatGPTResponse>) => void;
  onError: (e: Error) => void;
}

export const usePostChatGPT = ({ onSuccess, onError }: PostChatGPTProps) => {
  return useMutation({
    mutationFn: (body: askChatGPTRequest) => askChatGPT(body),
    onSuccess: onSuccess,
    onError: onError,
  });
};

// utils for prompt
export const getAIKeywordsPrompt = (post: PostInfo) => {
  return `너는 SNS 마케터야. SNS 홍보글을 작성하기 위해 메뉴의 특징을 작성해야 해. 조건: 1. 키워드 형태로 8~10개 뽑아서 배열로 응답 2. 가격, 맛, 재료 등의 특징 포함 3. 홍보 타겟이 궁금해 하는 키워드 포함. 예를 들면 [\"인생 사진\", \"단체 회식\", \"혼밥 가능\"]. 메뉴 정보는 다음과 같아. <메뉴> 메뉴 이름: ${post.promotionSubject} \n홍보 타겟: ${post.targetAge.concat(post.targetGender).join(', ')} \n홍보 SNS 채널: ${post.postingChannel} </메뉴>`;
};
