import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { BaseResponse } from '../../../types/Response';
import { AxiosResponse } from 'axios';

export interface GetStoreRequest {
  userId: number;
  storeId: number;
}

export interface GetStoreResponse {
  userId: number;
  storeId: number;
  name: string;
  address: string;
}

export const getStore = async ({ userId, storeId }: GetStoreRequest) => {
  const { data } = await get<AxiosResponse<BaseResponse<GetStoreResponse>>>(
    `/api/store/${userId}/${storeId}`,
  );
  return data;
};

const STORE_QUERY_KEY = 'STORE_QUERY_KEY';
export const useGetStore = (request: GetStoreRequest) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [STORE_QUERY_KEY],
    queryFn: () => getStore(request).then((res) => res),
  });

  return { data, isLoading, isError, refetch };
};
