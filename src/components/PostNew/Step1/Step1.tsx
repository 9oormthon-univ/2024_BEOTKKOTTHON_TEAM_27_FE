import { useState } from 'react';
import styled from 'styled-components';
import PostFooter from '../PostFooter/PostFooter';
import { CheckIcon } from '../../../assets/svg';
import kakao from '../../../assets/Image/kakao.png';
import carrot from '../../../assets/Image/carrot.png';
import kakaoMap from '../../../assets/Image/kakaoMap.png';
import insta from '../../../assets/Image/Instagram.png';

export default function Step1() {
  const [selectedSNS, setSelectedSNS] = useState<string | null>(null);

  const snsOptions = [
    { name: '인스타그램', icon: insta },
    { name: '카카오톡', icon: carrot },
    { name: '당근마켓', icon: kakao },
    { name: '카카오맵', icon: kakaoMap },
  ];
  const handleSelectSNS = (sns: string) => {
    setSelectedSNS(sns === selectedSNS ? null : sns);
  };

  return (
    <>
      <PostTitleContainer>
        <Title>
          해당 포스팅을 올릴
          <br /> <Highlight>SNS</Highlight>를 선택해 주세요
        </Title>
        <SubTitle>
          선택하신 SNS에 맞게 <br />
          AI 마법사, 소동이가 작성해 드릴게요!
        </SubTitle>
        <SNSOptions>
          {snsOptions.map((sns) => (
            <SNSOption
              key={sns.name}
              selected={selectedSNS === sns.name}
              onClick={() => handleSelectSNS(sns.name)}
            >
              <ImgContainer>
                <img src={sns.icon} alt={sns.name} />
                {sns.name}
              </ImgContainer>
              {selectedSNS === sns.name && <CheckIcon style={{ width: '1.2rem' }} />}{' '}
            </SNSOption>
          ))}
        </SNSOptions>
      </PostTitleContainer>

      <PostFooter />
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.PostingTitle};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;

const SNSOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1.6rem;
  flex-direction: column;
  gap: 1rem;
`;

const SNSOption = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 19.9375rem;
  height: 4.375rem;
  cursor: pointer;

  ${({ theme }) => theme.fonts.subTitle};
  border: ${({ selected, theme }) => (selected ? `1px solid ${theme.colors.main}` : 'none')};
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  color: ${({ selected, theme }) => (selected ? theme.colors.main : theme.colors.black)};
`;