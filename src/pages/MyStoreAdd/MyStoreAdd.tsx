import { useState } from 'react';
import styled from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import SearchInput from '../../components/StoreNew/SearchInput';
import StoreResult from '../../components/StoreNew/StoreResult';

const KAKAO_REST_API = import.meta.env.VITE_KAKAO_REST_API;
export default function MyStoreAdd() {
  const [result, setResult] = useState({ documents: [], meta: { total_count: 0 } });

  function handleSumbit() {}

  function handleSearch(query: string) {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${KAKAO_REST_API}`,
      },
    };

    fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setResult(data);
        console.log(data);
      });
  }

  return (
    <MyStoreContainer>
      {/* 인풋 */}
      <SearchInput placeholder='가게 이름으로 검색' onClick={handleSearch} />

      {/* 중간 영역 */}
      <StoreResult totalCount={result.meta.total_count} result={result.documents} />

      {/* 버튼 */}
      <ButtonFill title='등록하기' width='90%' height='3.125rem' onClick={handleSumbit} />
    </MyStoreContainer>
  );
}

const MyStoreContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 4rem 2rem 0; // header 4rem 영역

  > button {
    position: fixed;
    left: 50%;
    bottom: 1.94rem;
    transform: translate(-50%, 0);
  }
`;
