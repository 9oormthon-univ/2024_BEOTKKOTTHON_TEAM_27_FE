import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../../types/PostNew';
import { useOnboardingContext } from '../../../../context/PostNew/PonstNewContext';

export default function SelectType() {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  const [selectedType, setSelectedType] = useState<string | null>(
    onboardingInfo.promotionType || null,
  );

  function handleGenderSelect(type: string) {
    setSelectedType(type);
    updatePostInfo({ promotionType: type });
  }

  const typeOptions = [
    { label: '이벤트 홍보', value: '이벤트', emoji: '🎊' },
    { label: '메뉴 홍보', value: '메뉴', emoji: '📢' },
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

  ${({ theme, selected }) =>
    selected ? `border: 1px solid ${theme.colors.main}; color: ${theme.colors.main}; ` : ''}
`;
