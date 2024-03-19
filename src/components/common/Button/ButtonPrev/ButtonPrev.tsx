import styled from 'styled-components';
import { ButtonProps } from '../../../../types/PostNew';

export default function ButtonPrev({ width, title, onClick }: ButtonProps) {
  return (
    <ButtonFillContainer width={width} onClick={onClick}>
      {title}
    </ButtonFillContainer>
  );
}

const ButtonFillContainer = styled.button<{ width?: string }>`
  width: ${({ width }) => (width ? width : 'auto')};

  color: ${({ theme }) => theme.colors.G_07};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.G_03};
`;
