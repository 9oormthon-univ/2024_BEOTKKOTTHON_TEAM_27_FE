import styled from 'styled-components';
import Sodong from '../../assets/Image/sodong_smile.png';
import { useState } from 'react';
import { post } from '../../apis/client';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  async function handleSumbit() {
    console.log('>> ', id, ' >>> ', pw);
    const data = {
      id: '1234567890',
      password: 'password123',
    };
    const res = await post('/login', data);
    console.log('>> ', res);
  }

  return (
    <LoginContainer>
      {/* 상단 */}
      <LoginImage src={Sodong} alt='소동-캐릭터' />
      <LoginTitle>소상공인 동반자, 소동</LoginTitle>
      <LoginDescription>
        당신을 위한 AI 마케팅 도우미 <br />
        지금 내 가게를 등록하고 시작해보세요!
      </LoginDescription>

      {/* 중간 */}
      <LoginInput type='text' placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} />
      <LoginInput type='text' placeholder='PW' value={pw} onChange={(e) => setPw(e.target.value)} />

      {/* 버튼 */}
      <ButtonFill title='로그인' width='100%' height='3.125rem' onClick={handleSumbit} />

      {/* 하단 */}
      <LoginSignup>
        새로 가입할래요! <span>회원가입</span>
      </LoginSignup>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  > button {
    margin-top: 1.13rem;
  }
`;

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

const LoginInput = styled.input`
  width: 100%;
  height: 2.8125rem;

  background: ${({ theme }) => theme.colors.light_gray};
  border-radius: 8px;
  border: none;
  padding: 0.6rem 1.25rem;
  margin: 0.38rem 0;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.subTitle};

  &::placeholder {
    color: ${({ theme }) => theme.colors.deep_gray};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

const LoginSignup = styled.p`
  color: ${({ theme }) => theme.colors.deep_gray};
  ${({ theme }) => theme.fonts.subTitle};
  margin: 0.75rem;

  > span {
    font-weight: 700;
    text-decoration-line: underline;
  }
`;
