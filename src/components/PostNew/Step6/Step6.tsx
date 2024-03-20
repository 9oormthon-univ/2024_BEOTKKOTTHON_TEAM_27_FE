import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../../common/Title/Title';
import food1 from '../../../assets/Image/food1.jpg';
import food2 from '../../../assets/Image/food2.jpg';
import food3 from '../../../assets/Image/food3.jpg';
import { IcEmptyThumbnailFinal, TipBtn } from '../../../assets/svg';
import PostFooter from '../PostFooter/PostFooter';

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
      <TipImageContainer>
        <ImgWrapper>
          <img src={food1} alt='첫번째-팁-음식' />
        </ImgWrapper>
        <ImgWrapper>
          <img src={food2} alt='첫번째-팁-음식' />
        </ImgWrapper>
        <ImgWrapper>
          <img src={food3} alt='첫번째-팁-음식' />
        </ImgWrapper>
      </TipImageContainer>

      <PostFooter onNext={onNext} />
    </>
  );
}

const ImgWrapper = styled.div`
  img {
    border-radius: 10px;
    width: 6rem;
    height: 6rem;
  }
`;

const TipImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
`;

const TipContainer = styled.div`
  position: relative;
  margin-top: 18%;
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
