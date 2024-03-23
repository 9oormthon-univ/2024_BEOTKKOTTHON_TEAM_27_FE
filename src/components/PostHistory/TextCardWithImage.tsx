import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PostImage from '../Post/PostImage';
import PostTop from '../Post/PostTop';

interface TextCardWithImageProps {
  date: string;
  text: string;
  postingId: number;
  imageUrl?: string;
  imageAlt?: string;
  channel: string;
}

export default function TextCardWithImage({
  date,
  text,
  postingId,
  imageUrl,
  imageAlt,
  channel,
}: TextCardWithImageProps) {
  const navigate = useNavigate();

  const handleCardClick = (postingId: number) => {
    navigate(`/post-detail/${postingId}`);
  };

  return (
    <TextCardContainer onClick={() => handleCardClick(postingId)}>
      <PostTop channel={channel} createdDate={date} />

      {imageUrl && <PostImage url={imageUrl} alt={imageAlt} width='100%' />}
      <TextContent>{text}</TextContent>
    </TextCardContainer>
  );
}

const TextCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 19.6875rem;
  height: auto;

  border-radius: 0.3125rem;
  background: #fff;

  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const TextCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.ex_01};
`;

const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.ex_01};

  margin-top: 1rem;
`;
