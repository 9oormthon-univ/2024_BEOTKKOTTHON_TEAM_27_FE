import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../../types/PostNew';

export default function SelectGender() {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  function handleGenderSelect(gender: string) {
    setSelectedGender(gender);
  }

  const genderOptions = [
    { label: '남자', value: 'male', emoji: '🙋🏻‍♂️' },
    { label: '여자', value: 'female', emoji: '🙋🏻‍♀️' },
  ];

  return (
    <GenderSelection>
      {genderOptions.map((option) => (
        <GenderOption
          key={option.value}
          selected={selectedGender === option.value}
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
