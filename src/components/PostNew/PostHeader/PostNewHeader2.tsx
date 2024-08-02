import styled from 'styled-components';
import { IcArrow } from '../../../assets/svg';
import ProcessBar from '../../common/ProcessBar/ProcessBar';

interface OnBoardingHeaderProps {
  setStep?: React.Dispatch<React.SetStateAction<number>>;
  onClickBackBtn: (stemNum: number | undefined) => void;
  stepNum: number;
}

export default function PostNewHeader2({ onClickBackBtn, stepNum }: OnBoardingHeaderProps) {
  return (
    <OnBoardingHeaderWrapper>
      <IcArrow
        width='1.5rem'
        height='1.5rem'
        style={{ margin: '0 0 0 1rem' }}
        onClick={() => onClickBackBtn(stepNum)}
      />
      <HeaderText>포스팅 만들기</HeaderText>

      <ProcessBar currentStep={stepNum} stepCount={6} />
    </OnBoardingHeaderWrapper>
  );
}

const OnBoardingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  height: 4rem;

  top: 0;
  right: 0;
  left: 50%;
  transform: translateX(-50%);

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
