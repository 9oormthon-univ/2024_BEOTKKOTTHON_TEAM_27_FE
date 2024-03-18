import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Title({ children }: PropsWithChildren) {
  return <TitleContainer>{children}</TitleContainer>;
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  ${({ theme }) => theme.fonts.PostingTitle};

  // Main Color
  > span {
    color: ${({ theme }) => theme.colors.main};
  }
`;
