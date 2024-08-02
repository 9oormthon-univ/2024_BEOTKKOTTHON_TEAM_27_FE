import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { TitleProps } from '../../../types/PostNew';

export default function SubTitle({ children, highlightText }: PropsWithChildren<TitleProps>) {
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

  ${({ theme }) => theme.fonts.posting_card_title};

  .highlight {
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;
