import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HomeSubsection() {
  const navigate = useNavigate();

  const handlePostCreate = () => {
    navigate(`/post`);
  };
  return (
    <HomeSubSectionContainer>
      <PostCreation onClick={handlePostCreate}>
        <PostTitle>포스트 생성</PostTitle>
      </PostCreation>

      <PostContainer>
        <StoreManagement>
          내 가게 <br /> 정보 관리하기
        </StoreManagement>
        <StoreContainer>
          <DataLookup>
            내가 만든 <br />
            포스팅
          </DataLookup>
          <UserGuide>이용가이드</UserGuide>
        </StoreContainer>
      </PostContainer>
    </HomeSubSectionContainer>
  );
}

const HomeSubSectionContainer = styled.article`
  ${({ theme }) => theme.fonts.heading_01};
`;

const PostTitle = styled.p`
  position: absolute;
`;

const PostContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  gap: 1rem;
  border-radius: 10px;
`;

const PostCreation = styled.div`
  display: flex;
  height: 10.5rem;

  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StoreManagement = styled.div`
  display: flex;
  height: 10.5rem;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const DataLookup = styled.div`
  height: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const UserGuide = styled.div`
  height: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;
