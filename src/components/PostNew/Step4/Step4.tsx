import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';
import useMenuInput from '../../../hooks/PostNew/useMenuInput';
import { NameInputProps } from '../SelectSns/SelectSns';
import NextButton from '../PostFooter/NextButton';
import { useEffect, useState } from 'react';

export default function Step4(props: NameInputProps) {
  const { onNext } = props;
  const { onboardingInfo, handleInputChange, isActivated, handleBtnClick } = useMenuInput();
  const hasContent = onboardingInfo.promotionType;
  console.log(hasContent);
  const [title, setTitle] = useState<string>('메뉴');
  const [placeholder, setPlaceholder] = useState<string>('ex) 소동 마라 로제 떡볶이');
  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
  };

  useEffect(() => {
    if (hasContent === '메뉴') {
      setTitle('메뉴');
      setPlaceholder('ex) 소동 마라 로제 떡볶이');
    } else if (hasContent === '이벤트') {
      setTitle('이벤트');
      setPlaceholder('ex) 가정의 달 기념 할인 이벤트');
    }
  }, [hasContent]);

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>홍보 할 {title}</Highlight>를 <br />
          소개해 주세요
        </Title>
      </PostTitleContainer>

      <MenuInputContainer>
        <InputFieldContainer>
          <InputTitle>{title} 이름</InputTitle>
          <InputField
            type='text'
            value={onboardingInfo.promotionSubject}
            onChange={handleInputValueChange}
            placeholder={placeholder}
          />
          {onboardingInfo.promotionSubject && (
            <Xmark
              onClick={handleBtnClick}
              style={{ width: '1.5rem', top: '56%', position: 'absolute', right: '5%' }}
            />
          )}
        </InputFieldContainer>
      </MenuInputContainer>
      <NextButton isActivated={isActivated} setStep={onNext}>
        다음
      </NextButton>
    </>
  );
}

const InputTitle = styled.p`
  margin-left: 1%;
  ${({ theme }) => theme.fonts.subheading_02};
  color: ${({ theme }) => theme.colors.G_11};
`;

const PostTitleContainer = styled.div`
  margin-top: 2.5rem;
  width: 100vw;
`;

const MenuInputContainer = styled.div`
  margin-top: 2rem;
  padding: 0 0.5rem;
  position: relative;
`;

const InputFieldContainer = styled.div`
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  height: 3.7rem;
  padding: 0.5rem;

  border: none;
  outline: none;
  font-size: 18px;
  margin-top: 3%;
  border-radius: 0.5rem;
  background: #f9f9f9;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
