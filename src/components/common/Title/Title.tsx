import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { TitleProps } from '../../../types/PostNew';

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
  align-items: center;
  margin-bottom: 0.3rem;
  ${({ theme }) => theme.fonts.PostingTitle};

  .highlight {
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;
