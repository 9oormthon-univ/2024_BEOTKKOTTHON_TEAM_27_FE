import styled from 'styled-components';
import { ButtonProps } from '../../../../types/PostNew';

export default function ButtonFill({ width, height, title, enable, onClick }: ButtonProps) {
  return (
    <ButtonFillContainer width={width} height={height} onClick={onClick} $enable={enable}>
      {title}
    </ButtonFillContainer>
  );
}

const ButtonFillContainer = styled.button<{ width?: string; height?: string; $enable?: boolean }>`
  width: ${({ width }) => (width ? width : 'auto')};
  height: ${({ height }) => (height ? height : 'auto')};

  border-radius: 10px;
  color: ${({ theme, $enable = true }) => ($enable ? theme.colors.white : theme.colors.deep_gray)};
  background: ${({ theme, $enable = true }) =>
    $enable ? theme.colors.main : theme.colors.light_gray};
  ${({ theme }) => theme.colors.heading_02};
`;
