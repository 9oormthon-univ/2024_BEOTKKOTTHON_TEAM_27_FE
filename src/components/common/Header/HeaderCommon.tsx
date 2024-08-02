import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

export default function CommonHeader({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <p>{title}</p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 375px;
  height: 4rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: 888;

  padding: 0 1rem;

  ${({ theme }) => theme.fonts.heading_02};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05));

  > p {
    margin: 0 auto;
    padding-right: 24px; // 버튼 크기 고려
  }
`;
