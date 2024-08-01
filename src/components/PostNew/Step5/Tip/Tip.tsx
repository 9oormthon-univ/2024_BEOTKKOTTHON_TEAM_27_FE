import styled from 'styled-components';
import { TipBtn } from '../../../../assets/svg';

export default function Tip() {
  return (
    <>
      <TipContainer>
        <TipBtn style={{ width: '2rem', margin: '0rem 0.5rem 0 0' }} />
        <TipMenu>강조하고 싶은 내용을 자세히 써보세요.</TipMenu>
      </TipContainer>
    </>
  );
}

const TipContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
`;

const TipMenu = styled.div`
  color: ${({ theme }) => theme.colors.G_08};
  ${({ theme }) => theme.fonts.subTitle};
`;
