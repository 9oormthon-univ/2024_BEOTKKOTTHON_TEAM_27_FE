import styled from 'styled-components';
import { IcArrow } from '../../../assets/svg';

interface OnBoardingHeaderProps {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  onClickBackBtn: (stemNum: number | undefined) => void;
  stepNum?: number | undefined;
}

export default function PostNewHeader({ onClickBackBtn, stepNum }: OnBoardingHeaderProps) {
  return (
    <OnBoardingHeaderWrapper>
      <IcArrow
        width='1.5rem'
        height='1.5rem'
        style={{ margin: '0 0 0 1rem' }}
        onClick={() => onClickBackBtn(stepNum)}
      />
      <HeaderText>포스팅 만들기</HeaderText>
    </OnBoardingHeaderWrapper>
  );
}

const OnBoardingHeaderWrapper = styled.div`
  display: flex;

  top: 0;

  right: 0;
  height: 4rem;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

const HeaderText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.fonts.heading_02};
  color: ${({ theme }) => theme.colors.black};
`;
