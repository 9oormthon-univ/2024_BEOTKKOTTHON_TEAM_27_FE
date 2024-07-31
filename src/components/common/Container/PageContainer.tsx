import { ReactNode } from 'react';
import styled from 'styled-components';
type Props = {
  children: ReactNode;
  bgColor?: string;
  hasNavigator?: boolean;
};

export default function PageContainer({ children }: Props) {
  return (
    <Container>
      <MainSection>{children}</MainSection>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100dvw;
  background-color: #ffffff;
  margin: 0 auto;

  @media (min-width: 490px) {
    max-width: ${({ theme }) => theme.sizes.maxWidth};
  }
`;

const MainSection = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-width: 350px;

  padding: 0 1rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray_00};
`;
