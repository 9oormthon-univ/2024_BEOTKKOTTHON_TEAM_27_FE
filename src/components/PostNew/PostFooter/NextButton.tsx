import styled, { CSSProperties } from 'styled-components';

interface OnBoardingBtnProps {
  children: React.ReactNode;
  step?: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isActivated: boolean;
  customStyle?: CSSProperties;
  onClick?: () => void;
}
export default function NextButton({ children, step, setStep, isActivated }: OnBoardingBtnProps) {
  const onClick = () => {
    setStep((prev) => prev + 1);
  };

  const finalStepWrapper: CSSProperties = step === 6 ? { display: 'inline-block' } : {};

  return (
    <Wrapper style={finalStepWrapper}>
      <Container $isActivated={isActivated} onClick={onClick} disabled={!isActivated}>
        <NextBtnText>{children}</NextBtnText>
      </Container>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  gap: 0.6rem;
  bottom: 3%;
`;

export const Container = styled.button<{ $isActivated: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  width: 20rem;
  height: 3.125rem;
  padding: 1rem 1.1rem 1rem 2rem;
  border-radius: 10px;
  bottom: 0;
  ${({ $isActivated, theme: { colors } }) =>
    $isActivated
      ? `
   background-color: ${colors.main_blue};
   color: ${colors.white};
 `
      : `
   background-color: ${colors.G_07};
   color: ${colors.white};
  
 `};
`;

export const NextBtnText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.heading_02};
`;
