import styled from 'styled-components';
import { Example } from '../../Step4/Step4';
import { TipBtn } from '../../../../assets/svg';

export default function Tip() {
  return (
    <>
      <TipContainer>
        <TipBtn style={{ width: '2rem', margin: '0 0.5rem' }} />
        <TipMenu>메뉴의 특징을 강조해 보세요.</TipMenu>
      </TipContainer>
      <Example>
        <Example>ex&#41;치즈가 듬뿍 들어간 구슬 떡볶이</Example>
      </Example>
    </>
  );
}

const TipContainer = styled.div`
  display: flex;
`;

const TipMenu = styled.div`
  color: ${({ theme }) => theme.colors.G_06};
  ${({ theme }) => theme.fonts.footer_01};
`;
