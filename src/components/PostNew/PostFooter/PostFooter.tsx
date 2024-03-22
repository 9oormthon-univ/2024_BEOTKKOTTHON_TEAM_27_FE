import styled from 'styled-components';
import ButtonFill from '../../common/Button/ButtonFill/ButtonFill';
import ButtonPrev from '../../common/Button/ButtonPrev/ButtonPrev';
interface PostFooterProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onClickBackBtn: (stemNum: number | undefined) => void;
  onNext?: VoidFunction;
  isActivated?: boolean;
  stepNum?: number | undefined;
}

export default function PostFooter({
  setStep,
  onClickBackBtn,
  stepNum,
  isActivated,
}: PostFooterProps) {
  const onClick = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <PostFooterContainer>
      <ButtonPrev title='이전' width='7.6rem' onClick={() => onClickBackBtn(stepNum)} />
      <ButtonFill title='다음' width='11.5rem' onClick={onClick} enable={isActivated} />
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
