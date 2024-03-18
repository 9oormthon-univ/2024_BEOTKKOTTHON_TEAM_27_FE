import styled from 'styled-components';

interface ButtonFillProps {
  width?: string;
  title: string;
  onClick?: () => void;
}

function ButtonFill({ width, title, onClick }: ButtonFillProps) {
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

export default ButtonFill;
