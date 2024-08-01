import { styled } from 'styled-components';
import { ImgSodong } from '../../../assets/svg';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
  type: 'postNew' | 'guideline' ;
  title: string;
  subTitle: string;
  buttonText: string;
  navigateTo: string;
}

export default function PostNewCard({
  type,
  title,
  subTitle,
  buttonText,
  navigateTo,
}: PostCardProps) {
  const navigate = useNavigate();

  const handlePostCreate = () => {
    navigate(navigateTo);
  };

  return (
    <PostNewContainer type={type} onClick={handlePostCreate}>
      <TitleContainer>
        <PostTitle>{title}</PostTitle>
        <PostSubTitle>{subTitle}</PostSubTitle>
        <Button>{buttonText}</Button>
      </TitleContainer>

      <IconContainer>
        <ImgSodong width='13rem' />
      </IconContainer>
    </PostNewContainer>
  );
}

const PostNewContainer = styled.div<{ type: 'postNew' | 'guideline' }>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: 10.5rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: ${({ type, theme }) =>
    type === 'postNew' ? theme.colors.main : theme.colors.pink};

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

const IconContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 5rem;
  left: 10rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  height: 1.1rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.card_button};
`;
