import { useState } from 'react';
import styled from 'styled-components';

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
      <Button onClick={() => onClick(query)} />
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
  height: 100%%;

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

const Button = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 10%;
  height: 100%;
  border: 1px solid red;
`;
