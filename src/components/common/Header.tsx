import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;

  return (
    <HeaderContainer>
      <p>{title}</p>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 4rem;
  left: 0;
  background-color: white;
  z-index: 888;

  ${({ theme }) => theme.fonts.heading_02};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05));
`;
