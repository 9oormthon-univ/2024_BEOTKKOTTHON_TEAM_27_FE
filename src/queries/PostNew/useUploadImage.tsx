// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { post } from '../../apis/client';
// import { ImageUploadRequestType } from '../../types/PostNew';
// import { useNavigate } from 'react-router-dom';

// interface PostGiftProps {
//   file_extension: string;
//   file_content: string;
// }

// export interface ImageUploadRequestType {
//   file_extension: string;
//   file_content: string;
// }

// export const uploadImage = async (body: ImageUploadRequestType) => {
//   try {
//     const response = await post(`/ibm/object`, body);
//     console.log('response data', response.data);
//     return response.data;
//   } catch (error: any) {
//     console.log('확인확인', error.message);
//     if (error.message === '중복된 선물 등록입니다.') {
//       console.log('들어와~', error);
//       throw new Error(`${error}`);
//     }
//   }
// };

// export const usePostGift = ({ file_content, file_extension }: PostGiftProps) => {
//   const navigate = useNavigate();

//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: uploadImage,
//     onSuccess: () => {
//       console.log('선물 등록 성공!!');
//       queryClient.invalidateQueries({ queryKey: [MY_GIFT_QUERY_KEY[0], roomId] });
//     },
//     onError: (error) => {
//       console.log('선물 등록 에러!!', error.message);
//     },
//   });

//   return { mutation };
// };

// export default usePostGift;
