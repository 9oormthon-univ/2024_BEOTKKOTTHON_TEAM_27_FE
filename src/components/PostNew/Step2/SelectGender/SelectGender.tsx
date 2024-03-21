import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../../types/PostNew';
import { useOnboardingContext } from '../../../../context/PostNew/PostNewContext';

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
    { label: '남자', value: '남자', emoji: '🙋🏻‍♂️' },
    { label: '여자', value: '여자', emoji: '🙋🏻‍♀️' },
  ];

  return (
    <GenderSelection>
      {genderOptions.map((option) => (
        <GenderOption
          key={option.value}
          selected={selectedGender.includes(option.value)}
          onClick={() => handleGenderSelect(option.value)}
        >
          <span role='img' aria-label={option.label} style={{ fontSize: '60px' }}>
            {option.emoji}
          </span>
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

  margin-top: 5rem;
  gap: 3rem;
`;

const GenderOption = styled.div<GenderOptionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  cursor: pointer;
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ selected }) => (selected ? '#402FFF' : '#9D9D9D')};
`;
