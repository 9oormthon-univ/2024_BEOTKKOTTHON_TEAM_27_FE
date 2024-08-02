import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CARD_CONFIG } from '../../../core/Post';

interface PostCardProps {
  type: keyof typeof CARD_CONFIG;
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
  } = CARD_CONFIG[type];

  const handlePostCreate = () => {
    navigate(navigateTo);
  };

  return (
    <CardContainer backgroundColor={backgroundColor} onClick={handlePostCreate}>
      <TitleContainer>
        <PostTitle type={type}>{title}</PostTitle>
        <PostSubTitle type={type}>{subTitle}</PostSubTitle>
        <Button type={type}>{buttonText}</Button>
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

const PostTitle = styled.p<{ type: keyof typeof CARD_CONFIG }>`
  ${({ theme }) => theme.fonts.posting_card_title};
  color: ${({ theme, type }) => (type === 'postNew' ? theme.colors.white : theme.colors.black)};
`;

const TitleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4375rem;
`;

const PostSubTitle = styled.p<{ type: keyof typeof CARD_CONFIG }>`
  color: ${({ theme, type }) => (type === 'postNew' ? theme.colors.white : theme.colors.black)};
  ${({ theme }) => theme.fonts.posting_card_sub};
`;

const IconContainer = styled.div<{ bottom: string; left: string }>`
  display: flex;
  position: relative;
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
`;

const Button = styled.button<{ type: keyof typeof CARD_CONFIG }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme, type }) =>
    type === 'guideline' ? theme.colors.pink02 : theme.colors.white};
  color: ${({ theme, type }) => (type === 'guideline' ? theme.colors.white : theme.colors.black)};
  ${({ theme }) => theme.fonts.card_button};
`;