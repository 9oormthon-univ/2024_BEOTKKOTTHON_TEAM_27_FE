import styled from 'styled-components';
import ButtonWithTip from '../../components/common/Button/ButtonWithTip/ButtonWithTip';
import { useState } from 'react';
import { isAndroid } from '../../utils/utils';

interface PostButtonProps {
  image: string;
  text: string;
}
export default function PostButton({ image, text }: PostButtonProps) {
  // isSaved - false,[저장하기] show & primary
  // isSaved - true, [공유하기] show
  const [isSaved, setIsSaved] = useState(false);

  function saveImage() {
    if (isAndroid()) {
      return Android.downloadImage(image);
    } else {
      fetch(image, {
        method: 'GET',
      })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const blobURL = URL.createObjectURL(blob);

          const aTag = document.createElement('a');
          aTag.href = blobURL;
          aTag.download = 'sodong_image.png';
          aTag.click();

          alert('다운로드 성공!');
        })
        .catch((e) => {
          console.error(e);
          alert(e);
        });
    }
  }

  function copyText() {
    try {
      if (!navigator?.clipboard?.writeText)
        throw new Error('복사 기능이 제공되지 않는 브라우저입니다.');
      window.navigator.clipboard.writeText(text).then(() => {
        alert('복사 성공!');
      });
    } catch (e) {
      alert(e);
    }
  }
  function handleSaveAll() {
    setIsSaved(true);
    saveImage();
    copyText();
  }
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
