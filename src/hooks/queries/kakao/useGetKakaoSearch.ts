import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

// Kakao Search API - Response type
// https://developers.kakao.com/docs/latest/ko/local/dev-guide#search-by-keyword-response-body
export interface KaKaoSearchResult {
  meta: KakaoSearchMeta;
  documents: Array<KakaoSearchDocument>;
}

export interface KakaoSearchMeta {
  total_count: number;
  // pageable_count: number; // (max 45)
  // is_end: boolean;
}

export interface KakaoSearchDocument {
  id: string;
  place_name: string;
  category_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  place_url: string;
}

const kakaoInstance = axios.create({
  baseURL: 'https://dapi.kakao.com/v2/local',
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API}`,
  },
});

export const getKakaoSearch = async (query: string) => {
  const { data } = await kakaoInstance.get<KaKaoSearchResult>(
    `/search/keyword.json?query=${query}`,
  );
  return data;
};

const KAKAO_QUERY_KEY = 'KAKAO_QUERY_KEY';
export const useGetKakaoSearch = () => {
  const [query, setQuery] = useState('');
  const { data, isLoading, isError } = useQuery({
    queryKey: [KAKAO_QUERY_KEY, query],
    queryFn: () => getKakaoSearch(query),
    enabled: !!query,
  });

  return { data, isLoading, isError, setQuery };
};
