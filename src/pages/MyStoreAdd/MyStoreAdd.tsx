import { useState } from 'react';
import styled from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';

export default function MyStoreAdd() {
  const [search, setSearch] = useState('');

  function handleSumbit() {}

  // 중간 영역 만들기
  // 지도 API 연결
  return (
    <MyStoreContainer>
      {/* 인풋 */}
      <MyStoreInput
        type='text'
        placeholder='가게 이름으로 검색'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 중간 영역 */}

      {/* 버튼 */}
      <ButtonFill title='등록하기' width='90%' height='3.125rem' onClick={handleSumbit} />
    </MyStoreContainer>
  );
}

const MyStoreContainer = styled.div`
  position: relative;
  width: 100vw;
  padding: 4rem 2rem 0; // header 4rem 영역

  > button {
    position: fixed;
    left: 50%;
    bottom: 1.94rem;
    transform: translate(-50%, 0);
  }
`;
const MyStoreInput = styled.input`
  width: 100%;
  height: 3.125rem;
  margin-top: 1.44rem;

  background: ${({ theme }) => theme.colors.light_gray};
  border-radius: 8px;
  border: none;
  padding: 0.6rem 1.25rem;

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
