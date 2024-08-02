import axios from 'axios';

// [GPT]
export const gptinstance = axios.create({
  baseURL: import.meta.env.VITE_APP_GPT_URL,
  withCredentials: false,
  headers: {},
});

export function post<T>(...args: Parameters<typeof gptinstance.post>) {
  return gptinstance.post<T>(...args);
}
