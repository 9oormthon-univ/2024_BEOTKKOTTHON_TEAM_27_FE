import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { IcEmptyThumbnailFinal } from '../../../assets/svg';
import PostFooter from '../PostFooter/PostFooter';

export default function Step6() {
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
          <IcEmptyThumbnailFinal
            style={{ width: '15rem', height: '15rem', position: 'relative' }}
          />
        </label>
        {previewImage && <PreviewImg src={previewImage} alt='preview' />}
      </IcEmptyThumbnailWrapper>

      <PostFooter />
    </>
  );
}

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

  margin-top: 6.1rem;
  cursor: pointer;
`;

export const PreviewImg = styled.img`
  width: 15rem;
  height: 15rem;

  object-fit: contain;
`;
