import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../../types/PostNew';

export default function SelectType() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  function handleGenderSelect(type: string) {
    setSelectedType(type);
  }

  const typeOptions = [
    { label: '이벤트 홍보', value: 'event', emoji: '🎊' },
    { label: '메뉴 홍보', value: 'menu', emoji: '📢' },
  ];

  return (
    <TypeSelection>
      {typeOptions.map((option) => (
        <TypeOption
          key={option.value}
          selected={selectedType === option.value}
          onClick={() => handleGenderSelect(option.value)}
        >
          <span
            role='img'
            aria-label={option.label}
            style={{ fontSize: '60px', margin: '0 0 1rem 0' }}
          >
            {option.emoji}
          </span>
          {option.label}
        </TypeOption>
      ))}
    </TypeSelection>
  );
}

const TypeSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  gap: 2rem;
`;

const TypeOption = styled.div<GenderOptionProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.875rem;
  height: 10.125rem;
  gap: 2rem;
  cursor: pointer;
  flex-direction: column;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.07);

  ${({ theme }) => theme.fonts.heading_01};
  border: ${({ selected }) => (selected ? '1px solid #402FFF' : 'none')};
  color: ${({ selected }) => (selected ? '#402FFF' : '#9D9D9D')};
`;
