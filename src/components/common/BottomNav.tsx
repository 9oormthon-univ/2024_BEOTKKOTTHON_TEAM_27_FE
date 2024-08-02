import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IcFeed01, IcHome01, IcPosting01, IcPosting02 } from '../../assets/svg';

const BottomNav = () => {
  const location = useLocation();

  return (
    <BottomNavContainer>
      <NavItem to='/home' className={location.pathname === '/home' ? 'active' : ''}>
        <IcHome01 className='nav-icon' />
        <p>홈</p>
      </NavItem>
      <NavItem to='/post-history' className={location.pathname === '/post-history' ? 'active' : ''}>
        {location.pathname === '/post-history' ? (
          <IcPosting01 className='nav-icon' />
        ) : (
          <IcPosting02 className='nav-icon' />
        )}
        <p>포스팅</p>
      </NavItem>
      <NavItem to='/feed' className={location.pathname === '/feed' ? 'active' : ''}>
        <IcFeed01 className='nav-icon' />
        <p>피드</p>
      </NavItem>
    </BottomNavContainer>
  );
};

export default BottomNav;

const BottomNavContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 375px;
  padding: 0.5rem 0;

  left: 50%;
  transform: translateX(-50%);
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
  color: ${({ theme }) => theme.colors.G_14};

  .nav-icon {
    width: 2.3rem;
    fill: currentColor;
  }

  &.active {
    color: ${({ theme }) => theme.colors.sub_blue01};
  }

  p {
    ${({ theme }) => theme.fonts.footer};
  }
`;
