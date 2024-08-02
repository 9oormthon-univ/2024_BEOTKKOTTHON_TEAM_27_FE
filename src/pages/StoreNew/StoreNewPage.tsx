import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import SearchInput from '../../components/StoreNew/StoreSearch';
import StoreResult from '../../components/StoreNew/StoreResult';
import { useNavigate } from 'react-router-dom';
import StoreResultNone from '../../components/StoreNew/StoreResultNone';
import { usePostStore } from '../../hooks/mutations/store/usePostStore';
import { useGetKakaoSearch } from '../../hooks/queries/kakao/useGetKakaoSearch';
import { useOutletContext } from 'react-router-dom';
import { HeaderLayoutContext } from '../../layouts/HeaderLayout';
import { useGetStore } from '../../hooks/queries/store/useGetStore';

export default function StoreNewPage() {
  const navigate = useNavigate();

  /**
   * 헤더 타이틀 변경
   */
  const { setTitle } = useOutletContext<HeaderLayoutContext>();
  useEffect(() => {
    setTitle('내 가게 등록하기');
  }, [setTitle]);

  const [selected, setSelected] = useState(-1);
  function handleSelect(index: number) {
    const newIndex = index == selected ? -1 : index;
    setSelected(newIndex);
  }

  // GET - 가게 카카오 검색 API
  const { data: result = null, setQuery } = useGetKakaoSearch();
  async function handleSearch(query: string) {
    setSelected(-1);
    setQuery(query);
  }

  const { data: store } = useGetStore({ userId: 1, storeId: 1 });

  // POST - 가게 등록 API
  const { mutate } = usePostStore({
    onSuccess: (res) => {
      console.log('✈ /api/store >>', res);

      if (!res.isSuccess) {
        alert(res.message);
        return;
      }

      localStorage.setItem('userId', JSON.stringify(res.data.userId));
      localStorage.setItem('storeId', JSON.stringify(res.data.storeId));
      navigate('/home', { replace: true });
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

  if (store?.data) {
    setTitle('내 가게 확인하기');

    return (
      <MyStoreContainer>
        <MyStoreInfoContainer>
          <h3> {store.data.name}</h3>
          <div>주소: {store.data.address}</div>
        </MyStoreInfoContainer>

        <StoreResultNone
          title='내 가게를 등록하세요'
          description='포스트 내용에 들어가는 가게 정보예요'
          height='calc(50%)'
        />
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
  width: 100%;
  height: 100dvh;
  max-width: 360px;

  position: relative;
  padding: 4rem 0 0; // header 4rem 영역

  > button {
    position: fixed;
    left: 50%;
    bottom: 1.94rem;
    transform: translate(-50%, 0);
  }
`;

const MyStoreInfoContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'flex-start')};
  gap: 20px;

  margin: 4rem 0;

  h3 {
    ${({ theme }) => theme.fonts.heading_01};
  }
`;
