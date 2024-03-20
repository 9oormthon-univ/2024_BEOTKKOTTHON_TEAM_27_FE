import styled from 'styled-components';
import { Instagram } from '../../../assets/svg';

export default function TextCard() {
  return (
    <ImageCardContainer>
      <ImageCardHeader>
        <Instagram style={{ width: '2.0625rem', height: '2rem' }} />
        <Date>2014-03-20</Date>
      </ImageCardHeader>

      <TextContainer>
        동네 이웃 여러분, 맛과 행복이 가득한 오픈 이벤트를 소개합니다! 🎉🍲 로제 떡볶이로 새로운
        맛의 세계를 체험하세요! 달콤한 로제 소스와 매콤한 떡볶이의 조합이 일품입니다. 이벤트 기간
        동안 특별한 혜택도 놓치지 마세요! 😉✨ #로제떡볶이 #맛집이벤트 #동네맛집 #떡볶이사랑
      </TextContainer>
    </ImageCardContainer>
  );
}

const ImageCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 19.6875rem;
  border-radius: 0.625rem;
  background: #fff;

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
`;
const ImageCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 16.6875rem;
  margin: 1.5rem auto 0 auto;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.ex_01};
`;

const TextContainer = styled.p`
  padding: 0.8rem 1.5rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.ex_01};
`;
