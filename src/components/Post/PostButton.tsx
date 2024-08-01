import styled from 'styled-components';
import ButtonWithTip from '../common/Button/ButtonWithTip/ButtonWithTip';
import { useEffect, useState } from 'react';
import { copyText, downloadImage, getImageFullUrl, isReactNative } from '../../utils/utils';
import { POSTING_CHANNEL } from '../../core/Post';
import { postMessage } from '../../utils/native';

interface PostButtonProps {
  image?: string;
  text?: string;
  sns?: string;
  onChange?: (state: boolean) => void;
}

export default function PostButton({ image, text, sns, onChange }: PostButtonProps) {
  // isSaved - false,[저장하기] show & primary
  // isSaved - true, [공유하기] show
  const [isSaved, setIsSaved] = useState(false);
  const [file, setFile] = useState('');

  // (1) [한번에 저장하기]
  // 텍스트 복사 -> 이미지 저장 -> 모두 성공 시, isSaved
  function handleSaveAll() {
    if (!text || !image) {
      alert('포스팅 조회 후 저장 가능합니다.');
      return;
    }

    const url = getImageFullUrl(image);
    console.log('🔗 이미지 URL', url);

    if (isReactNative()) handleSaveAllWithRN(url, text);
    else handleSaveAllWithWeb(url, text);
  }

  function handleSaveAllWithWeb(url: string, text: string) {
    if (onChange) onChange(true);

    Promise.all([downloadImage(url), copyText(text)])
      .then((res) => {
        console.log('✅ saveFunc -> ', res);

        alert('성공하였습니다');
        setIsSaved(true);
      })
      .catch((error) => {
        console.error('❎ saveFunc -> ', error);
        alert(error);
      })
      .finally(() => {
        if (onChange) onChange(false);
      });
  }

  function handleSaveAllWithRN(url: string, text: string) {
    postMessage('saveAll', { url: url, text: text });
  }

  useEffect(() => {
    window.addEventListener('message', handleMessageFromApp);

    return () => {
      window.removeEventListener('message', handleMessageFromApp);
    };
  }, []);

  const handleMessageFromApp = (event: MessageEvent) => {
    const { type, data } = JSON.parse(event.data);
    console.log(`{${type}} ${data}`);

    if (type === 'saveAllResult') {
      if (data.success) {
        setFile(data.imagePath);
        setIsSaved(true);

        console.log('이미지 저장 성공. 이미지 경로:', data.imagePath);
      } else {
        alert('이미지 저장에 실패하였습니다.');
        console.log('이미지 저장 실패');
      }
    }
  };

  // (2) SNS 공유하기
  // isReactNative가 아닌 경우, 지원 X
  function handleShare() {
    try {
      if (!sns) throw new Error('공유할 SNS가 선택되지 않았습니다.');
      if (!isReactNative()) throw new Error('공유하기 기능을 지원하지 않는 기기입니다.');
      if (file == '') throw new Error('이미지를 다시 저장해 주세요.');

      if (sns == POSTING_CHANNEL.INSTAGRAM) postMessage('shareInsta', { filePath: file });
      else alert('지원하지 않는 SNS입니다. ');
    } catch (e) {
      alert(e);
    }
  }

  return (
    <ButtonContainer>
      <ButtonWithTip
        label='한번에 저장하기'
        tooltip='이미지와 글을 한번에 저장할 수 있어요'
        onClick={handleSaveAll}
        primary={!isSaved}
      />

      {isSaved && <ButtonWithTip label='SNS에 공유하기' primary={true} onClick={handleShare} />}
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
