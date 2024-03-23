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
  width: 20rem;
  height: 3.125rem;
  border-radius: 10px;
  ${({ theme }) => theme.fonts.heading_02};
  color: ${({ theme, $enable = true }) => ($enable ? theme.colors.white : theme.colors.deep_gray)};
  background: ${({ theme, $enable = true }) =>
    $enable ? theme.colors.main : theme.colors.light_gray};
  ${({ theme }) => theme.colors.heading_02};
  pointer-events: ${({ $enable = true }) => ($enable ? 'auto' : 'none')};
`;
