import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IconFeed, IconHome, IconPosting } from '../../assets/svg';

const BottomNav = () => {
  const location = useLocation();

  return (
    <BottomNavContainer>
      <NavItem to='/home' className={location.pathname === '/home' ? 'active' : ''}>
        <IconHome className='nav-icon' />
        <p>홈</p>
      </NavItem>
      <NavItem to='/post' className={location.pathname === '/post' ? 'active' : ''}>
        <IconPosting className='nav-icon' />
        <p>포스팅</p>
      </NavItem>
      <NavItem to='/post-history' className={location.pathname === '/post-history' ? 'active' : ''}>
        <IconFeed className='nav-icon' />
        <p>피드</p>
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid #e0e0e0;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 0.3rem;
  color: ${({ theme }) => theme.colors.G_08};

  .nav-icon {
    width: 1.8rem;
    fill: currentColor;
  }

  &.active {
    color: ${({ theme }) => theme.colors.main_blue};
  }

  p {
    ${({ theme }) => theme.fonts.footer};
  }
`;
