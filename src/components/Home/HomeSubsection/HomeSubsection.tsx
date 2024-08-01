import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GuideIc, HistoryIc, MyStoreIc } from '../../../assets/svg';
import PostNewCard from '../Card/PostNewCard';

export default function HomeSubsection() {
  const navigate = useNavigate();

  const handlePostCreate = () => {
    navigate(`/post`);
  };

  const handlePostHistory = () => {
    navigate(`/post-history`);
  };

  const handleGuide = () => {
    navigate(`/guide`);
  };

  return (
    <HomeSubSectionContainer>
     
      <PostContainer>
        <StoreManagement>
          <StoreTitle onClick={handlePostHistory}>
            내가 만든 <br /> 포스팅
          </StoreTitle>
          <HistoryIc width='7rem' style={{ position: 'absolute', bottom: '0', right: '5%' }} />
        </StoreManagement>
        <StoreContainer>
          <DataLookup>
            내 가게 <br />
            정보 관리
            <MyStoreIc
              width='7rem'
              style={{ position: 'absolute', bottom: '0', right: '-10%', top: '0' }}
            />
          </DataLookup>
          <UserGuide onClick={handleGuide}>
            이용가이드
            <GuideIc
              width='4rem'
              style={{ position: 'absolute', bottom: '0', right: '0%', top: '30%' }}
            />
          </UserGuide>
        </StoreContainer>
      </PostContainer>
    </HomeSubSectionContainer>
  );
}

const HomeSubSectionContainer = styled.article`
  width: 100%;
  ${({ theme }) => theme.fonts.heading_01};
`;

const PostSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.sub_purple};
  ${({ theme }) => theme.fonts.select_off_01};
`;

const PostCreation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 10.5rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main};

  img {
    width: 172px;
    height: 168px;
  }
`;

const PostTitle = styled.p`
  padding-top: 1rem;
  ${({ theme }) => theme.fonts.heading_04};
  color: ${({ theme }) => theme.colors.white};
`;

const StoreTitle = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;

  top: 45%;
  gap: 0.3rem;
`;

const PostContainer = styled.div`
  height: 13.1875rem;
  display: flex;
  gap: 1rem;
`;

const StoreManagement = styled.div`
  display: flex;
  position: relative;

  padding: 1rem;
  height: 13.1875rem;
  width: 42%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    position: absolute;
    width: 6rem;
    height: 6rem;
    right: 10px;
  }
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  gap: 1rem;
  border-radius: 10px;
`;

const DataLookup = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  padding: 1rem;
  height: 50%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const UserGuide = styled.div`
  padding: 1rem;
  height: 50%;
  position: relative;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.white};
`;
