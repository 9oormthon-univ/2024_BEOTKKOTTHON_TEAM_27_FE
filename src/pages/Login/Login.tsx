import styled from 'styled-components';
import { useMemo, useState } from 'react';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import LoginInput from '../../components/Login/LoginInput';
import LoginTop from '../../components/Login/LoginTop';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../hooks/queries/user/useLoginMutation';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValidate = useMemo(() => id !== '' && pw !== '', [id, pw]);

  /**
   * useLoginMutation - 로그인 API
   */
  const { mutate } = useLoginMutation({
    onSuccess: (res) => {
      console.log('✈ /api/login >>', res);
      localStorage.setItem('userId', JSON.stringify(res.userId));

      //  if 가게 미등록인 경우, 가게 등록 페이지로 이동
      //  else, 홈으로 이동
      if (res.storeId === -1) {
        navigate('/store-new', { replace: true });
      } else {
        localStorage.setItem('storeId', JSON.stringify(res.storeId));
        navigate(`/`, { replace: true });
      }
    },
    onError: (error) => {
      console.error('✈ /api/login ERROR >>', error);
    },
  });

  function handleSumbit() {
    const body = { loginId: id, password: pw };
    mutate(body);
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