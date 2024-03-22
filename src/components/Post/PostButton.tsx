import styled from 'styled-components';
import ButtonWithTip from '../common/Button/ButtonWithTip/ButtonWithTip';
import { SetStateAction, useState } from 'react';
import { copyText, downloadImage, getPackageName, isAndroid } from '../../utils/utils';

interface PostButtonProps {
  image: string;
  text: string;
  sns: string;
}

export default function PostButton({ image, text, sns }: PostButtonProps) {
  // isSaved - false,[저장하기] show & primary
  // isSaved - true, [공유하기] show
  const [isSaved, setIsSaved] = useState(false);
  const [file, setFile] = useState('');

  // (1) [한번에 저장하기]
  // 텍스트 복사 -> 이미지 저장 -> 모두 성공 시, isSaved
  function handleSaveAll() {
    // [TODO] 지울 것. CORS 문제로 풀려 있는 이미지 사용
    const url =
      'https://objectstorage.ap-chuncheon-1.oraclecloud.com/p/NFhdxT-Gf5qr8V_6_oDec6dx_DSu5LL4E8ZXQsTEeTJaTt2j7KWRFJae6hi5V1fC/n/axn4dve0qg0d/b/sejong-uni-cafeteria-notifier/o/z9.png';
    console.log(url);

    const saveFunc = isAndroid() ? saveImage : downloadImage;
    Promise.all([saveFunc(url), copyText(text)])
      .then((res) => {
        setFile(res[0] as SetStateAction<string>);

        alert('성공하였습니다');
        setIsSaved(true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  function saveImage() {
    return new Promise<String>((resolve, reject) => {
      const uri = Android.downloadImage(image);
      if (uri === '') reject();
      else resolve(uri);
    });
  }

  // (2) SNS 공유하기
  // Android인 경우, openApp() / else인 경우, 지원 X
  function handleShare() {
    try {
      if (!isAndroid()) throw new Error('공유하기 기능을 지원하지 않는 기기입니다.');
      if (file == '') throw new Error('이미지를 다시 저장해 주세요.');

      if (sns == 'instagram') Android.shareInsta(file);
      else Android.openApp(getPackageName(sns));
    } catch (e) {
      alert(e);
    }
  }

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
