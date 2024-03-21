import { useState } from 'react';
import styled from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import SearchInput from '../../components/StoreNew/StoreSearch';
import StoreResult from '../../components/StoreNew/StoreResult';
import { useNavigate } from 'react-router-dom';
import { KaKaoSearchResult } from '../../types/StoreNew';
import StoreResultNone from '../../components/StoreNew/StoreResultNone';
import { usePostStore } from '../../hooks/mutations/store/usePostStore';

const KAKAO_REST_API = import.meta.env.VITE_KAKAO_REST_API;
export default function StoreNew() {
  const navigate = useNavigate();

  const [result, setResult] = useState<KaKaoSearchResult | null>(null);
  const [selected, setSelected] = useState(-1);

  function handleSelect(index: number) {
    const newIndex = index == selected ? -1 : index;
    setSelected(newIndex);
  }

  function handleSearch(query: string) {
    setSelected(-1);
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

  /**
   * useStoreMutation - 가게 등록 API
   */
  const { mutate } = usePostStore({
    onSuccess: (res) => {
      console.log('✈ /api/store >>', res);

      localStorage.setItem('userId', JSON.stringify(res.userId));
      localStorage.setItem('storeId', JSON.stringify(res.storeId));
      navigate('/', { replace: true });
    },
    onError: (error) => {
      console.error('✈ /api/store ERROR >>', error);
    },
  });

  async function handleSumbit() {
    if (result == null) {
      alert('가게를 선택해 주세요.');
      return;
    }

    const body = {
      userId: Number(localStorage.getItem('userId')),
      name: result.documents[selected].place_name,
      address: result.documents[selected].address_name,
    };

    mutate(body);
  }

  return (
    <MyStoreContainer>
      {/* 인풋 */}
      <SearchInput placeholder='가게 이름으로 검색' onClick={handleSearch} />

      {/* 중간 영역 */}
      {result === null && (
        <StoreResultNone
          title='내 가게를 등록하세요'
          description='포스트 내용에 들어가는 가게 정보예요'
          height='calc(100% - ((3.125rem + 1.44rem) + (3.125rem + 1.94rem) + 4rem))'
        />
      )}

      {result !== null && (
        <StoreResult
          totalCount={result.meta.total_count}
          result={result.documents}
          selected={selected}
          onClick={handleSelect}
        />
      )}

      {/* 버튼 */}
      <ButtonFill
        title='등록하기'
        width='90%'
        height='3.125rem'
        onClick={handleSumbit}
        enable={selected !== -1}
      />
    </MyStoreContainer>
  );
}

const MyStoreContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 360px;

  position: relative;
  padding: 4rem 2rem 0; // header 4rem 영역

  > button {
    position: fixed;
    left: 50%;
    bottom: 1.94rem;
    transform: translate(-50%, 0);
  }
`;
