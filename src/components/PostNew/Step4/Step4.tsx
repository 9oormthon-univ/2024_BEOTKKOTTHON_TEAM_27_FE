import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';
import useNameInput from '../../../hooks/PostNew/useMenuInput';

export default function Step4() {
  const { onboardingInfo, handleInputChange, handleBtnClick } = useNameInput();

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>홍보 할 메뉴</Highlight>를 <br />
          소개해 주세요
        </Title>
      </PostTitleContainer>

      <MenuInputContainer>
        <InputFieldContainer>
          <InputField
            type='text'
            value={onboardingInfo.promotionSubject}
            onChange={handleInputChange}
            placeholder='메뉴를 입력해주세요'
          />
          {onboardingInfo.promotionSubject && (
            <Xmark
              onClick={handleBtnClick}
              style={{ width: '1rem', position: 'absolute', right: '5%' }}
            />
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

const InputFieldContainer = styled.div`
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
