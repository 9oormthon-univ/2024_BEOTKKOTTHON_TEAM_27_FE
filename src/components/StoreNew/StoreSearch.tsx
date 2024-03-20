import { useState } from 'react';
import styled from 'styled-components';
import { Search } from '../../assets/svg';

interface StoreSearchProps {
  placeholder?: string;
  onClick: (query: string) => void;
}

export default function StoreSearch({ placeholder, onClick }: StoreSearchProps) {
  const [query, setQuery] = useState('');

  return (
    <SearchInputContainer>
      <Input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Search
        onClick={() => onClick(query)}
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          width: '24px',
          height: '24px',
          transform: 'translate(0, -50%)',
        }}
      />
    </SearchInputContainer>
  );
}

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.125rem;
  background: ${({ theme }) => theme.colors.light_gray};
  border-radius: 10px;
  margin: 1.44rem 0;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  background: none;
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
