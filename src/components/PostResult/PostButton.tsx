import styled from 'styled-components';
import ButtonWithTip from '../../components/common/Button/ButtonWithTip/ButtonWithTip';
import { useState } from 'react';
import { copyText, downloadImage, isAndroid } from '../../utils/utils';

interface PostButtonProps {
  image: string;
  text: string;
}
export default function PostButton({ image, text }: PostButtonProps) {
  // isSaved - false,[저장하기] show & primary
  // isSaved - true, [공유하기] show
  const [isSaved, setIsSaved] = useState(false);

  // (1) [한번에 저장하기]
  // 텍스트 복사 -> 이미지 저장 -> 모두 성공 시, isSaved!
  function handleSaveAll() {
    const saveFunc = isAndroid() ? saveImage : downloadImage;
    console.log('>>> Func', saveFunc);
    Promise.all([saveFunc(image), copyText(text)])
      .then((res) => {
        console.log('>> res'), res;
        alert('성공하였습니다');
        setIsSaved(true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  function saveImage() {
    return new Promise((resolve, reject) => {
      const uri = Android.downloadImage(image);
      if (uri === '') reject();
      else resolve(uri);
    });
  }

  // (2) SNS 공유하기
  // Android인 경우, openApp() / else인 경우, 스토어로 랜딩
  function handleShare() {}

  return (
    <ButtonContainer>
      <ButtonWithTip
        label='✅ 한번에 저장하기'
        tooltip='이미지와 글을 한번에 저장할 수 있어요'
        onClick={handleSaveAll}
        primary={!isSaved}
      />

      {isSaved && <ButtonWithTip label='🔗 SNS에 공유하기' primary={true} onClick={handleShare} />}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  margin-bottom: 1rem;
`;
