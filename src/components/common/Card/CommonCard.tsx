import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { cardConfig } from '../../../core/Post';

interface PostCardProps {
  type: keyof typeof cardConfig;
}

export default function PostNewCard({ type }: PostCardProps) {
  const navigate = useNavigate();
  const {
    title,
    subTitle,
    buttonText,
    navigateTo,
    backgroundColor,
    Icon,
    iconWidth,
    iconBottom,
    iconLeft,
  } = cardConfig[type];

  const handlePostCreate = () => {
    navigate(navigateTo);
  };

  return (
    <CardContainer backgroundColor={backgroundColor} onClick={handlePostCreate}>
      <TitleContainer>
        <PostTitle>{title}</PostTitle>
        <PostSubTitle>{subTitle}</PostSubTitle>
        <Button>{buttonText}</Button>
      </TitleContainer>

      <IconContainer bottom={iconBottom} left={iconLeft}>
        <Icon width={iconWidth} />
      </IconContainer>
    </CardContainer>
  );
}

const CardContainer = styled.section<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 10.5rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor]};

  img {
    width: 172px;
    height: 168px;
  }
`;

const PostTitle = styled.p`
  ${({ theme }) => theme.fonts.posting_card_title};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4375rem;
`;

const PostSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.posting_card_sub};
`;

const IconContainer = styled.div<{ bottom: string; left: string }>`
  display: flex;
  position: relative;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.card_button};
`;
