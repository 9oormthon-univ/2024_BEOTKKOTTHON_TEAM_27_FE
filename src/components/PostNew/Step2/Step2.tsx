import { useState } from 'react';
import { styled } from 'styled-components';
import PostTitle from './PostTitle/PostTitle';
import { NameInputProps } from '../Step1/Step1';
import NextButton from '../PostFooter/NextButton';
import { AgeBoxProps } from '../../../types/PostNew';
import SelectGender from './SelectGender/SelectGender';
import { useOnboardingContext } from '../../../context/PostNew/PostNewContext';

export default function Step2(props: NameInputProps) {
  const { onNext } = props;
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  const [selectedAges, setSelectedAges] = useState<string[]>(onboardingInfo.targetAge || []);
  const [visible, setVisible] = useState<boolean>(selectedAges.length > 0);

  function toggleAge(age: string) {
    const updatedAges = selectedAges.includes(age)
      ? selectedAges.filter((item) => item !== age)
      : [...selectedAges, age];
    setSelectedAges(updatedAges);
    setVisible(true);
    updatePostInfo({ targetAge: updatedAges });
  }

  const ageGroups = ['10대', '20대', '30대', '40대', '50대', '기타'];

  return (
    <>
      <PostTitle />
      <SelectGender />
      <AgeSelection>
        {ageGroups.map((age) => (
          <AgeBox key={age} selected={selectedAges.includes(age)} onClick={() => toggleAge(age)}>
            {age}
          </AgeBox>
        ))}
      </AgeSelection>
      <NextButton isActivated={visible} setStep={onNext}>
        다음
      </NextButton>
    </>
  );
}

const AgeSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 1rem;
`;

const AgeBox = styled.div<AgeBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.5rem;
  height: 5.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;

  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ selected }) => (selected ? '#402FFF' : '#BDBDBD')};
  border: ${({ selected }) => (selected ? 'none' : '1px solid #ccc')};
  background-color: ${({ selected }) => (selected ? '#DFE7FF' : 'transparent')};
`;
