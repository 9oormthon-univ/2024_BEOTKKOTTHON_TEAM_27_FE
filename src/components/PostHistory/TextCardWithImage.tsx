import styled from 'styled-components';
import { Instagram } from '../../assets/svg';
import { getImageFullUrl } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

interface TextCardWithImageProps {
  date: string;
  text: string;
  postingId: number;
  imageUrl?: string;
  imageAlt?: string;
}

export default function TextCardWithImage({
  date,
  text,
  postingId,
  imageUrl,
  imageAlt,
}: TextCardWithImageProps) {
  const navigate = useNavigate();

  const dateTostring = date.substring(0, 10);

  const handleCardClick = (postingId: number) => {
    navigate(`/post-detail/${postingId}`);
  };

  return (
    <TextCardContainer onClick={() => handleCardClick(postingId)}>
      <TextCardHeader>
        <Instagram style={{ width: '2.0625rem', height: '2rem' }} />
        <Date>{dateTostring}</Date>
      </TextCardHeader>
      {imageUrl && <img src={getImageFullUrl(imageUrl)} alt={imageAlt} />}
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
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
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
`;
