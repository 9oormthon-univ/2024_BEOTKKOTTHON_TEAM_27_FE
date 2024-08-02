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

      <TextWithImageContainer>
        {imageUrl && <PostImage url={imageUrl} alt={imageAlt} />}
        <TextContent>{text}</TextContent>
      </TextWithImageContainer>
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
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);

  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const TextWithImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.87rem;

  > div {
    flex: 1;
  }
`;

const TextContent = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.ex_01};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 최대 4줄 */
  -webkit-box-orient: vertical;
`;
