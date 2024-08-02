import { useState } from 'react';
import styled from 'styled-components';
import { GenderOptionProps } from '../../../types/PostNew';
import { useOnboardingContext } from '../../../context/PostNew/PostNewContext';
import NextButton from '../PostFooter/NextButton';
import { NameInputProps } from '../SelectSns/SelectSns';
import { IconEventEmoji, IconMenuEmoji } from '../../../assets/svg';

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
    { label: '메뉴 홍보', labelSub: 'ex. 신메뉴 홍보', value: '메뉴', image: IconMenuEmoji },
    {
      label: '이벤트 홍보',
      labelSub: 'ex. 첫 오픈 할인 이벤트',
      value: '이벤트',
      image: IconEventEmoji,
    },
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
            <option.image className='nav-icon' />
            <LabelContainer>
              {option.label}
              <p>{option.labelSub}</p>
            </LabelContainer>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;
  gap: 1rem;
`;

const LabelContainer = styled.article`
  p {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.G_06};
    ${({ theme }) => theme.fonts.type_option};
  }
`;
const TypeOption = styled.div<GenderOptionProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 17rem;
  height: 6rem;
  gap: 2rem;
  padding-left: 1rem;
  cursor: pointer;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 1px 1px 13px 1px rgba(0, 0, 0, 0.07);

  ${({ theme }) => theme.fonts.heading_02};
  ${({ theme, selected }) =>
    selected ? `border: 1px solid ${theme.colors.main}; color: ${theme.colors.main}; ` : ''}

  .nav-icon {
    width: 3.75rem;
  }
`;
