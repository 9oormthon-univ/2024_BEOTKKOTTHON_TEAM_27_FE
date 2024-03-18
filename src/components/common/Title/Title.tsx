import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Title({ children }: PropsWithChildren) {
  return <PostingTitleContainer>{children}</PostingTitleContainer>;
}

const PostingTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;

  text-align: center;
  ${({ theme }) => theme.fonts.PostingTitle};
`;
