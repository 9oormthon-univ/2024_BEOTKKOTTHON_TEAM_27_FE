import styled from 'styled-components';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';
import useMenuExplain from '../../../hooks/PostNew/useMenuExplain';
import { NameInputProps } from '../Step1/Step1';
import NextButton from '../PostFooter/NextButton';
import { useEffect, useState } from 'react';
import Tip from './Tip/Tip';

export default function Step5(props: NameInputProps) {
  const { onNext } = props;
  const { onboardingInfo, handleInputChange, handleBtnClick, isActivated } = useMenuExplain();
  const characterCount = onboardingInfo.promotionContent.length;
  const maxCharacters = 100;
  const hasContent = onboardingInfo.promotionType;
  const [title, setTitle] = useState<string>('메뉴');
  const [placeholder, setPlaceholder] = useState<string>(' ');

  useEffect(() => {
    if (hasContent === '메뉴') {
      setTitle('메뉴의 특징');
      setPlaceholder('가격, 맛, 재료 등');
    } else if (hasContent === '이벤트') {
      setTitle('강조하고 싶은 내용');
      setPlaceholder('');
    }
  }, [hasContent]);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(event);
  };

  return (
    <>
      <PostTitleContainer>
        <Title>
          {placeholder ? (
            <>
              {placeholder} <br /> <Highlight>{title}</Highlight>을 소개해 주세요
            </>
          ) : (
            <>
              <Highlight>{title}</Highlight> <br />을 소개해 주세요
            </>
          )}
        </Title>
      </PostTitleContainer>
      <Tip />
      <ContentInputContainer>
        <ContentInput
          value={onboardingInfo.promotionContent}
          onChange={handleTextareaChange}
          placeholder='치즈가 듬뿍 들어간 쌀 떡볶이. 쌀떡이라 더 쫄깃하게 먹을 수 있어요. '
        />
        {onboardingInfo.promotionSubject && (
          <Xmark
            onClick={handleBtnClick}
            style={{ width: '1.5rem', position: 'absolute', right: '13%', padding: '4% 0' }}
          />
        )}
      </ContentInputContainer>
      <CharacterCount>
        {characterCount}/{maxCharacters}
      </CharacterCount>

      <NextButton isActivated={isActivated} setStep={onNext}>
        다음
      </NextButton>
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 6.5rem;
  width: 100vw;
`;

const ContentInputContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ContentInput = styled.textarea`
  width: 100vw;
  height: 10rem;
  min-height: 130px;

  border: none;
  outline: none;
  border-radius: 5px;
  background: #f9f9f9;
  padding: 0.8rem 4rem 0.8rem 0.8rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.subheading_02};

  &::placeholder {
    color: ${({ theme }) => theme.colors.G_10};
  }
`;

const CharacterCount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.content_01};
  color: ${({ theme }) => theme.colors.gray};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
