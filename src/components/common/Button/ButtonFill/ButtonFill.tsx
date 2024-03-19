import styled from 'styled-components';
import { ButtonProps } from '../../../../types/PostNew';

export default function ButtonFill({ width, title, onClick }: ButtonProps) {
  return (
    <ButtonFillContainer width={width} onClick={onClick}>
      {title}
    </ButtonFillContainer>
  );
}

const ButtonFillContainer = styled.button<{ width?: string }>`
  width: ${({ width }) => (width ? width : 'auto')};

  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.main};
`;
