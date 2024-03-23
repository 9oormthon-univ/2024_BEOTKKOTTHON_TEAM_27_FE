import styled from 'styled-components';
import { IcRetry } from '../../assets/svg';

interface PostRetryProps {
  onRetry: () => void;
}
export default function PostRetry({ onRetry }: PostRetryProps) {
  return (
    <PostRetryContainer onClick={onRetry}>
      <IcRetry style={{ width: '32px' }} />
      다시 만들기
    </PostRetryContainer>
  );
}

const PostRetryContainer = styled.section`
  display: flex;
  align-items: center;

  margin: 5px 0;

  color: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.fonts.p_01};
`;
