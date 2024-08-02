import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../types/PostNew';
import { useOnboardingContext } from '../../../context/PostNew/PostNewContext'
import maleIc from '../../../assets/Icon/maleIc.png';
import femaleIc from '../../../assets/Icon/femalIc.png';

export default function SelectGender() {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  const [selectedGender, setSelectedGender] = useState<string[]>(onboardingInfo.targetGender || []);

  function handleGenderSelect(gender: string) {
    const updatedGender = selectedGender.includes(gender)
      ? selectedGender.filter((item) => item !== gender)
      : [...selectedGender, gender];
    setSelectedGender(updatedGender);
    updatePostInfo({ targetGender: updatedGender });
  }

  const genderOptions = [
    { label: '남자', value: '남자', image: maleIc },
    { label: '여자', value: '여자', image: femaleIc },
  ];

  return (
    <GenderSelection>
      {genderOptions.map((option) => (
        <GenderOption
          key={option.value}
          selected={selectedGender.includes(option.value)}
          onClick={() => handleGenderSelect(option.value)}
        >
          <img src={option.image} />
          {option.label}
        </GenderOption>
      ))}
    </GenderSelection>
  );
}

const GenderSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
  gap: 2rem;
`;

const GenderOption = styled.div<GenderOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
  width: 4.6875rem;
  height: 6.5rem;
  cursor: pointer;
  border-radius: 10px;
  border: ${({ selected }) => (selected ? '1px solid #402fff;' : '1px solid #BDBDBD;')};
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ selected }) => (selected ? '#402FFF' : '#BDBDBD')};

  img {
    width: 2.75rem;
    margin-top: 16%;
  }
`;
