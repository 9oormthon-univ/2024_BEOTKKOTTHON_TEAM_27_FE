import styled from 'styled-components';
import { useState } from 'react';
import { post } from '../../apis/client';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import LoginInput from '../../components/Login/LoginInput';
import LoginTop from '../../components/Login/LoginTop';

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
      <LoginTop />

      {/* 중간 */}
      <LoginInput placeholder='ID' value={id} onChange={setId} />
      <LoginInput placeholder='PW' value={pw} onChange={setPw} />

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

const LoginSignup = styled.p`
  color: ${({ theme }) => theme.colors.deep_gray};
  ${({ theme }) => theme.fonts.subTitle};
  margin: 0.75rem;

  > span {
    font-weight: 700;
    text-decoration-line: underline;
  }
`;
