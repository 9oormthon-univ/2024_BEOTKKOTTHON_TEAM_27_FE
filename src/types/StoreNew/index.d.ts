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
