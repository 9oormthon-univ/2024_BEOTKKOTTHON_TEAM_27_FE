import styled from 'styled-components';
import { Store } from '../../assets/svg';

interface StoreResultNoneProps {
  title: string;
  description: string;
  onClick?: () => void;
  height?: string;
}
export default function StoreResultNone({
  title,
  description,
  height,
  onClick,
}: StoreResultNoneProps) {
  return (
    <StoreResultNoneContainer height={height} $isClickable={onClick !== undefined}>
      <Store style={{ width: '40%' }} />
      <h3>{title}</h3>
      <p onClick={onClick}>{description}</p>
    </StoreResultNoneContainer>
  );
}

const StoreResultNoneContainer = styled.div<{ height?: string; $isClickable?: boolean }>`
  width: 100%;
  height: ${({ height }) => (height ? height : '100%')};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h3 {
    ${({ theme }) => theme.fonts.heading_01};
  }

  > p {
    color: ${({ theme }) => theme.colors.G_08};
    ${({ theme }) => theme.fonts.ex_01};
    margin: 0.31rem 0;

    // Click 가능한 경우,
    cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'none')};
    text-decoration: ${({ $isClickable }) => ($isClickable ? 'underline' : 'none')};
  }
`;
