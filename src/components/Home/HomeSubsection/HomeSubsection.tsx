import { useNavigate } from 'react-router-dom';
import sodong from '../../../assets/Image/sodong_half.png';
import styled from 'styled-components';
import { Ai, ChatGpt, Kogpt } from '../../../assets/svg';

export default function HomeSubsection() {
  const navigate = useNavigate();

  const handlePostCreate = () => {
    navigate(`/post`);
  };
  return (
    <HomeSubSectionContainer>
      <PostCreation onClick={handlePostCreate}>
        <PostTitle>포스트 생성</PostTitle>
        <IconContainer>
          <Ai style={{ height: '20px' }} />
          <Kogpt style={{ height: '20px' }} />
          <ChatGpt style={{ height: '20px' }} />
        </IconContainer>
        <img src={sodong} alt='소동-캐릭터' />
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

const PostCreation = styled.div`
  display: flex;
  justify-content: space-between;

  height: 10.5rem;
  padding-left: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.main};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  img {
    width: 172px;
    height: 168px;
  }
`;

const PostTitle = styled.p`
  padding-top: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;

  width: 30%;
  padding-top: 11%;
  gap: 0.3rem;
`;

const PostContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StoreManagement = styled.div`
  display: flex;
  height: 10.5rem;
  width: 50%;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;
  gap: 1rem;
  border-radius: 10px;
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