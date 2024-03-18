import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TitleProps {
  highlightText: string;
}

export default function Title({ children, highlightText }: PropsWithChildren<TitleProps>) {
  return (
    <PostingTitleContainer>
      <p>
        <span className='highlight'>{highlightText}</span> {children}
      </p>
    </PostingTitleContainer>
  );
}

const PostingTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 34px;
  ${({ theme }) => theme.fonts.PostingTitle};

  .highlight {
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;
