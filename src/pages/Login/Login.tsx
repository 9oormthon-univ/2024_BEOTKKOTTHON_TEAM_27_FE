import styled from 'styled-components';
import { useMemo, useState } from 'react';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import LoginInput from '../../components/Login/LoginInput';
import LoginTop from '../../components/Login/LoginTop';
import { useNavigate } from 'react-router-dom';
import { post } from '../../apis/client';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValidate = useMemo(() => id !== '' && pw !== '', [id, pw]);

  async function handleSumbit() {
    const data = {
      loginId: 'user1',
      password: 'password1',
    };
    const res = await post(`/api/login`, data);
    console.log('✈ /api/login >>', res);
    // fetch('/api/login', { method: 'POST', body: JSON.stringify(data) })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log('✈ /api/login >>', res);

    //     if (!res.isSuccess) {
    //       alert('오류 발생!');
    //       return;
    //     }

    //     localStorage.setItem('userId', res.data.userId);

    //     // if (storeId == -1)인 경우, 가게 등록 페이지로 이동
    //     if (res.data.storeId === -1) {
    //       navigate('/store-new', { replace: true });
    //       return;
    //     }

    //     localStorage.setItem('storeId', res.data.storeId);
    //     navigate(`/`, { replace: true });
    //   });
  }

  return (
    <LoginContainer>
      {/* 상단 */}
      <LoginTop />
      {isValidate}

      {/* 중간 */}
      <LoginInput placeholder='ID' value={id} onChange={setId} />
      <LoginInput placeholder='PW' value={pw} onChange={setPw} />

      {/* 버튼 */}
      <ButtonFill
        title='로그인'
        width='100%'
        height='3.125rem'
        enable={isValidate}
        onClick={handleSumbit}
      />

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
  max-width: 360px;

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
