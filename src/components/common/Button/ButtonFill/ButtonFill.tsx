import styled from 'styled-components';
import { ButtonProps } from '../../../../types/PostNew';

export default function ButtonFill({ width, height, title, onClick }: ButtonProps) {
  return (
    <ButtonFillContainer width={width} height={height} onClick={onClick}>
      {title}
    </ButtonFillContainer>
  );
}

const ButtonFillContainer = styled.button<{ width?: string; height?: string }>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};

  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.main};
  ${({ theme }) => theme.colors.heading_02};
`;
