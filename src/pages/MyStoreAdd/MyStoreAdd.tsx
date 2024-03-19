import { useState } from 'react';
import styled from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
const KAKAO_REST_API = import.meta.env.VITE_KAKAO_REST_API;

export default function MyStoreAdd() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  function handleSumbit() {}

  function handleSearch() {
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
        setResult(data.documents);
        console.log(data);
      });
  }

  return (
    <MyStoreContainer>
      {/* 인풋 */}
      <MyStoreInputContainer>
        <MyStoreInput
          type='text'
          placeholder='가게 이름으로 검색'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MyStoreInputButton onClick={handleSearch} />
      </MyStoreInputContainer>

      {/* 중간 영역 */}
      <div>
        {result.map((item, index) => (
          <div key={index}>
            <h3>{item.place_name}</h3>
            <p>{item.address_name}</p>
            <br />
          </div>
        ))}
      </div>

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

const MyStoreInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.125rem;
  margin-top: 1.44rem;
  background: ${({ theme }) => theme.colors.light_gray};
  border-radius: 10px;
  margin: 1.44rem 0;
`;

const MyStoreInputButton = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 10%;
  height: 100%;
  border: 1px solid red;
`;

const MyStoreInput = styled.input`
  width: 100%;
  height: 100%%;

  border: none;
  padding: 0.6rem 1.25rem;
  background: none;

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
