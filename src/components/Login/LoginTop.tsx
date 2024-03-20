import styled from 'styled-components';
import Sodong from '../../assets/Image/sodong_smile.png';

export default function LoginTop() {
  return (
    <LoginTopContainer>
      <LoginImage src={Sodong} alt='소동-캐릭터' />
      <LoginTitle>소상공인 동반자, 소동</LoginTitle>
      <LoginDescription>
        당신을 위한 AI 마케팅 도우미 <br />
        지금 내 가게를 등록하고 시작해보세요!
      </LoginDescription>
    </LoginTopContainer>
  );
}

const LoginTopContainer = styled.section``;

const LoginImage = styled.img`
  width: 234px;
`;
const LoginTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;

  text-align: center;
  ${({ theme }) => theme.fonts.HomeTitle};
`;

const LoginDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  ${({ theme }) => theme.fonts.subTitle};
  margin-bottom: 2.5rem;
`;
