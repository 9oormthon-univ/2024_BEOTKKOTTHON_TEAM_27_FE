import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { BaseResponse } from '../../../types/Response';
import { AxiosResponse } from 'axios';
import { Posting } from '../../../types/Post';

export interface GetPostHistoryRequest {
  userId: string;
  storeId: string;
}

export interface GetPostHistoryResponse {
  userId: string;
  storeId: string;
  postingList: Posting[];
}

export const getHistory = async ({ userId, storeId }: GetPostHistoryRequest) => {
  const { data } = await get<AxiosResponse<BaseResponse<GetPostHistoryResponse>>>(
    `/api/posting/list/${userId}/${storeId}`,
  );

  data.data.postingList.reverse();
  return data;
};

const POST_HISTORY_KEY = 'POST_HISTORY_KEY';
export const useGetHistory = (GetPostHistoryRequest: GetPostHistoryRequest) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [POST_HISTORY_KEY],
    queryFn: () => getHistory(GetPostHistoryRequest).then((res) => res),
  });

  return { data, isLoading, isError, refetch };
};
