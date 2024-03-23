import styled from 'styled-components';
import Tooltip from './Tooltip';

interface ButtonWhiteProps {
  label: string;
  tooltip?: string;
  primary?: boolean;
  onClick?: () => void;
}

export default function ButtonWithTip({ label, tooltip, primary, onClick }: ButtonWhiteProps) {
  return (
    <ButtonWithTipContainer>
      {tooltip && <Tooltip text={tooltip} />}

      <Button onClick={onClick} $primary={primary}>
        {label}
      </Button>
    </ButtonWithTipContainer>
  );
}

const ButtonWithTipContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.125rem;
`;

const Button = styled.button<{ $primary?: boolean }>`
  width: 100%;
  height: 100%;

  border-radius: 0.625rem;

  background: ${({ theme, $primary }) => ($primary ? theme.colors.main : theme.colors.white)};
  ${({ theme, $primary }) => ($primary ? theme.fonts.button_01 : theme.fonts.button_02)};
`;
