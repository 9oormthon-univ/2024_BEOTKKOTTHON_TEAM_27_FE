import styled from 'styled-components';
import { Instagram } from '../../../assets/svg';
import PostImg from '../../../assets/Image/PostImg.png';

export default function ImageCard() {
  return (
    <ImageCardContainer>
      <ImageCardHeader>
        <Instagram style={{ width: '2.0625rem', height: '2rem' }} />
        <Date>2014-03-20</Date>
      </ImageCardHeader>
      <img src={PostImg} alt='생성-이미지' />
      <TextContainer>
        진정한 감성을 맛보다! 🍟🧀 토마토 소스와 치즈가 만나 환상의 조합을 이룬 웨지 감자튀김으로
        당신의 입맛을 사로잡아 보세요! 😋✨ #웨지감자 #치즈소스 #맛있다그램 #먹스타그램
      </TextContainer>
    </ImageCardContainer>
  );
}

const ImageCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 19.6875rem;
  height: 28.125rem;
  border-radius: 0.625rem;
  background: #fff;

  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

  img {
    margin: 0.8rem auto;
    width: 16.6875rem;
    height: 16.6875rem;
  }
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
