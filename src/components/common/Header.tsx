import styled from 'styled-components';
import { IcArrow } from '../../assets/svg';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }

  return (
    <HeaderContainer>
      <IcArrow style={{ width: '24px' }} onClick={handleGoBack} />
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

  padding: 0 1rem;

  ${({ theme }) => theme.fonts.heading_02};
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.05));

  > p {
    margin: 0 auto;
  }
`;
