import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../../types/PostNew';
import { useOnboardingContext } from '../../../../context/PostNew/PostNewContext';
import NextButton from '../../PostFooter/NextButton';
import { NameInputProps } from '../../Step1/Step1';

export default function SelectType(props: NameInputProps) {
  const { onNext } = props;
  const userId = localStorage.getItem('userId');
  const storeId = localStorage.getItem('storeId');
  const parsedUserId = userId ? parseInt(userId, 10) : undefined;
  const parsedStoreId = storeId ? parseInt(storeId, 10) : undefined;

  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  const [visible, setVisible] = useState<boolean>(!!onboardingInfo.promotionType);
  const [selectedType, setSelectedType] = useState<string | null>(
    onboardingInfo.promotionType || null,
  );

  function handleMenuSelect(type: string) {
    setVisible(true);
    setSelectedType(type);
    updatePostInfo({ promotionType: type, userId: parsedUserId, storeId: parsedStoreId });
  }

  const typeOptions = [
    { label: '이벤트 홍보', value: '이벤트', emoji: '🎊' },
    { label: '메뉴 홍보', value: '메뉴', emoji: '📢' },
  ];

  return (
    <>
      <TypeSelection>
        {typeOptions.map((option) => (
          <TypeOption
            key={option.value}
            selected={selectedType === option.value}
            onClick={() => handleMenuSelect(option.value)}
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
      <NextButton isActivated={visible} setStep={onNext}>
        다음
      </NextButton>
    </>
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
