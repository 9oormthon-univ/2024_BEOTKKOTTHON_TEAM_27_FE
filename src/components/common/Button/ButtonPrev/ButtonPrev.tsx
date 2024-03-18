import styled from 'styled-components';

interface ButtonFillProps {
  width?: string;
  title: string;
  onClick?: () => void;
}

export default function ButtonPrev({ width, title, onClick }: ButtonFillProps) {
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
