import styled from 'styled-components';

interface Store {
  place_name: string;
  address_name: string;
}
interface SearchInputProps {
  totalCount: number;
  result: Array<Store>;
}

export default function StoreResult({ totalCount, result }: SearchInputProps) {
  return (
    <>
      <StoreResultTitle>
        총 <b>{totalCount}개</b>의 검색 결과
      </StoreResultTitle>
      <StoreResultContainer>
        {result.map((item, index) => (
          <StoreResultBox key={index}>
            <h3>{item.place_name}</h3>
            <p>{item.address_name}</p>
            <br />
          </StoreResultBox>
        ))}
      </StoreResultContainer>
    </>
  );
}

const StoreResultContainer = styled.section`
  width: 100%;
  // Input, Button, Margin 고려
  height: calc(100% - ((3.125rem + 1.44rem) + (3.125rem + 1.94rem) + 4rem));
  border: 1px solid red;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const StoreResultTitle = styled.div`
  ${({ theme }) => theme.fonts.subTitle};

  > b {
    font-weight: 700;
  }
`;

const StoreResultBox = styled.div`
  padding: 1rem 0;

  > h3 {
    ${({ theme }) => theme.fonts.heading_01};
  }

  > p {
    ${({ theme }) => theme.fonts.ex_01};
  }
`;
