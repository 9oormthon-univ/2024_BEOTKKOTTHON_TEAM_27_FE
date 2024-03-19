import styled from 'styled-components';
import ButtonFill from '../../common/Button/ButtonFill/ButtonFill';
import ButtonPrev from '../../common/Button/ButtonPrev/ButtonPrev';
interface PostFooterProps {
  onNext: VoidFunction;
}

export default function PostFooter(props: PostFooterProps) {
  const { onNext } = props;

  return (
    <PostFooterContainer>
      <ButtonPrev title='이전' width='7.6rem' />
      <ButtonFill title='다음' width='11.5rem' onClick={onNext} />
    </PostFooterContainer>
  );
}

const PostFooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.6rem;
  bottom: 3%;
`;
