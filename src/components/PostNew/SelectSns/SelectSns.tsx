import { useState } from 'react';
import styled from 'styled-components';
import { CheckIcon } from '../../../assets/svg';
import kakao from '../../../assets/Image/kakao.png';
import carrot from '../../../assets/Image/carrot.png';
import kakaoMap from '../../../assets/Image/kakaoMap.png';
import insta from '../../../assets/Image/Instagram.png';
import { useOnboardingContext } from '../../../context/PostNew/PostNewContext';
import Step1Title from './SelectSnsTitle';
import NextButton from '../PostFooter/NextButton';
import { POSTING_CHANNEL } from '../../../core/Post';

export interface NameInputProps {
  onNext: VoidFunction;
}

const SNS_ORDER_DEFAULT = [
  POSTING_CHANNEL.INSTAGRAM,
  POSTING_CHANNEL.KAKAO_CHANNEL,
  POSTING_CHANNEL.DANGUEN,
  POSTING_CHANNEL.KAKAO_TALK,
];

const SNS_ORDER_40s_50s = [
  POSTING_CHANNEL.KAKAO_CHANNEL,
  POSTING_CHANNEL.DANGUEN,
  POSTING_CHANNEL.KAKAO_TALK,
  POSTING_CHANNEL.INSTAGRAM,
];

export default function SelectSns(props: NameInputProps) {
  const { onNext } = props;
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  const [selectedSNS, setSelectedSNS] = useState<string | null>(
    onboardingInfo.postingChannel || null,
  );

  const snsOptions = [
    { name: POSTING_CHANNEL.INSTAGRAM, icon: insta },
    { name: POSTING_CHANNEL.KAKAO_CHANNEL, icon: kakao },
    { name: POSTING_CHANNEL.DANGUEN, icon: carrot },
    { name: POSTING_CHANNEL.KAKAO_TALK, icon: kakaoMap },
  ];

  const getOrderedSnsOptions = () => {
    const ageGroups = onboardingInfo.targetAge || [];
    const is40sOr50sSelected = ageGroups.includes('40대') && ageGroups.includes('50대');
    const order = is40sOr50sSelected ? SNS_ORDER_40s_50s : SNS_ORDER_DEFAULT;

    return snsOptions.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  };

  const orderedSnsOptions = getOrderedSnsOptions();

  const handleSelectSNS = (sns: string) => {
    setSelectedSNS((prev) => {
      const newSelectedSNS = prev === sns ? null : sns;
      updatePostInfo({ postingChannel: newSelectedSNS });
      return newSelectedSNS;
    });
  };

  return (
    <>
      <PostTitleContainer>
        <Step1Title />
        <SNSOptionContainer>
          {orderedSnsOptions.map((sns) => (
            <SNSOption
              key={sns.name}
              selected={selectedSNS === sns.name}
              onClick={() => handleSelectSNS(sns.name)}
            >
              <ImgContainer>
                <img src={sns.icon} alt={sns.name} />
                {sns.name}
              </ImgContainer>
              {selectedSNS === sns.name && <CheckIcon style={{ width: '1.2rem' }} />}
            </SNSOption>
          ))}
        </SNSOptionContainer>
        <NextButton isActivated={!!selectedSNS} setStep={onNext}>
          다음
        </NextButton>
      </PostTitleContainer>
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 2.5rem;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    height: 2.5rem;
  }
`;

const SNSOptionContainer = styled.div`
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
