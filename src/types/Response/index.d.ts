export interface BaseResponse<T> {
  isSuccess: boolean;
  message: string;
  code: string;
  data: T;
}
