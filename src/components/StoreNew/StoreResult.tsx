import styled from 'styled-components';

interface Store {
  place_name: string;
  address_name: string;
}
interface SearchInputProps {
  totalCount: number;
  result: Array<Store>;
  selected: number;
  onClick: (index: number) => void;
}

export default function StoreResult({ totalCount, result, selected, onClick }: SearchInputProps) {
  return (
    <>
      <StoreResultTitle>
        총 <b>{totalCount}개</b>의 검색 결과
      </StoreResultTitle>
      <StoreResultContainer>
        {result.map((item, index) => (
          <StoreResultBox key={index} $selected={selected == index} onClick={() => onClick(index)}>
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
  overflow-y: scroll;
  overflow-x: hidden;
`;

const StoreResultTitle = styled.div`
  ${({ theme }) => theme.fonts.subTitle};
  margin-left: 0.3rem;

  > b {
    font-weight: 700;
  }
`;

const StoreResultBox = styled.div<{ $selected: boolean }>`
  padding: 1rem 0.3rem 0.5rem;
  background: ${({ theme, $selected }) =>
    $selected ? theme.colors.light_main : theme.colors.white};

  > h3 {
    ${({ theme }) => theme.fonts.heading_01};
  }

  > p {
    ${({ theme }) => theme.fonts.ex_01};
  }
`;
