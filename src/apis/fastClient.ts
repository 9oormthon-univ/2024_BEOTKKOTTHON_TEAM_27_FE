import axios from 'axios';

// [이미지 업로드]
// 8002 포트번호 다른 이유로 인스턴스 생성
export const imageinstance = axios.create({
  baseURL: import.meta.env.VITE_APP_FAST_URL,
  withCredentials: false,
  headers: {},
});

export function put<T>(...args: Parameters<typeof imageinstance.put>) {
  return imageinstance.put<T>(...args);
}
