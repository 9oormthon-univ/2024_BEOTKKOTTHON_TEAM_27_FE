import styled from 'styled-components';

export default function PostTitle() {
  return (
    <PostResultTitleContainer>
      <PostResultTitle>
        <span>포스트</span>가 완성되었어요!
      </PostResultTitle>
      <PostRetry>다시 만들어 주세요</PostRetry>
    </PostResultTitleContainer>
  );
}

const PostResultTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2.5rem 0 2rem;
`;

const PostResultTitle = styled.h1`
  ${({ theme }) => theme.fonts.PostingTitle};

  > span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const PostRetry = styled.p`
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.description};

  cursor: pointer;
  text-decoration-line: underline;
`;
