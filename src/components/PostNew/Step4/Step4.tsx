import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';
import useMenuInput from '../../../hooks/PostNew/useMenuInput';
import { StepProps } from '../Step1/Step1';
import { useEffect } from 'react';

export default function Step4({ setIsValidate }: StepProps) {
  useEffect(() => {
    setIsValidate(false);
  }, []);
  const { onboardingInfo, handleInputChange } = useMenuInput();
  const hasContent = onboardingInfo.promotionSubject.length > 0;

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event); // 입력값 업데이트
    setIsValidate(true); // isValidate를 true로 설정
  };

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>홍보 할 메뉴</Highlight>를 <br />
          소개해 주세요
        </Title>
      </PostTitleContainer>

      <MenuInputContainer>
        <InputFieldContainer $hasContent={hasContent}>
          <InputField
            type='text'
            value={onboardingInfo.promotionSubject}
            onChange={handleInputValueChange}
            placeholder='메뉴를 입력해주세요'
          />
          {onboardingInfo.promotionSubject && (
            <Xmark style={{ width: '1rem', position: 'absolute', right: '5%' }} />
          )}
        </InputFieldContainer>
        <Example>ex&#41; 소동 떡볶이 &#40;매운맛&#41;</Example>
      </MenuInputContainer>

      {/* <PriceInputContainer>
        <InputFieldContainer>
          <InputField
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='가격을 입력해주세요'
          />
          {price && (
            <Xmark
              onClick={handlePriceClear}
              style={{ width: '1rem', position: 'absolute', right: '5%' }}
            />
          )}
        </InputFieldContainer>
        <Example>4500원</Example>
      </PriceInputContainer> */}
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
  width: 100vw;
`;

const MenuInputContainer = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const Example = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.G_06};
  ${({ theme }) => theme.fonts.ex_01};
`;

const InputFieldContainer = styled.div<{ $hasContent: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  width: 100vw;
  height: 2.7rem;
  padding: 0.5rem;

  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 0.5rem;
  background: #f9f9f9;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

// const PriceInputContainer = styled.div`
//   margin-top: 1rem;
//   position: relative;
// `;
