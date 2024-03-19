import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { IcEmptyThumbnailFinal, TipBtn } from '../../../assets/svg';
import PostFooter from '../PostFooter/PostFooter';
import Tip from '../Step5/Tip/Tip';
import ProcessBar from '../../common/ProcessBar/ProcessBar';

interface NameInputProps {
  onNext: VoidFunction;
}

export default function Step6(props: NameInputProps) {
  const { onNext } = props;
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      const selectedFiles = files as FileList;
      setPreviewImage(URL.createObjectURL(selectedFiles[0]));
    }
  };

  return (
    <>
      <PostTitleContainer>
        <ProcessBar currentStep={6} stepCount={6} />
        <Title>
          <Highlight>메뉴 사진</Highlight>을 올려주세요 &#40;선택 &#41;
        </Title>
        <SubTitle>
          홍보 타겟에 맞춰 <br /> 키워드를 삽입해 편집해 드릴게요!
        </SubTitle>
      </PostTitleContainer>

      <IcEmptyThumbnailWrapper>
        <input
          type='file'
          accept='image/jpeg, image/png, image/gif, image/heic '
          style={{ display: 'none' }}
          id='imgInput'
          onChange={handleImageUpload}
        />
        <label htmlFor='imgInput'>
          <ThumbnailWrapper>
            <IcEmptyThumbnailFinal
              style={{ width: '15rem', height: '15rem', position: 'absolute' }}
            />

            {previewImage && <PreviewImg src={previewImage} alt='preview' />}
          </ThumbnailWrapper>
        </label>
      </IcEmptyThumbnailWrapper>

      <TipContainer>
        <TipBtn style={{ width: '2rem', margin: '0 0.5rem' }} />
        <TipMenu>메뉴의 특징을 강조해 보세요.</TipMenu>
      </TipContainer>

      <PostFooter onNext={onNext} />
    </>
  );
}

const TipContainer = styled.div`
  position: relative;
  margin-top: 10%;
  display: flex;
`;

const TipMenu = styled.div`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.footer_01};
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 24rem;
  height: 15rem;

  margin: 0 auto;
  cursor: pointer;

  border-radius: 1.2rem;
`;

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
  width: 100vw;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;

export const IcEmptyThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 2.9rem;
  cursor: pointer;
`;

export const PreviewImg = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 10px;
  object-fit: contain;
  z-index: 9;
`;
