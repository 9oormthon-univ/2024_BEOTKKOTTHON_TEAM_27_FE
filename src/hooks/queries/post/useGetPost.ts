import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { BaseResponse } from '../../../types/Response';
import { AxiosResponse } from 'axios';
import { Posting } from '../../../types/Post';

export interface GetPostRequest {
  userId: string;
  storeId: string;
  postingId: string;
}

export interface GetPostResponse {
  userId: string;
  storeId: string;
  posting: Posting;
}

export const getPost = async ({ userId, storeId, postingId }: GetPostRequest) => {
  const { data } = await get<AxiosResponse<BaseResponse<GetPostResponse>>>(
    `/api/posting/${userId}/${storeId}/${postingId}`,
  );
  return data;
};

const POST_QUERY_KEY = 'POST_QUERY_KEY';
export const useGetPost = (GetPostRequest: GetPostRequest) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [POST_QUERY_KEY],
    queryFn: () => getPost(GetPostRequest).then((res) => res),
  });

  return { data, isLoading, isError, refetch };
};
