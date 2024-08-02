import { Highlight } from '../../components/PostNew/SelectSns/SelectSnsTitle';
import RelatedPosts from '../../components/common/Card/RelatedPosts';
import SubTitle from '../../components/common/Title/SubTitle';
import styled from 'styled-components';
import Trend1 from '../../assets/Image/trend1.png';
import Trend2 from '../../assets/Image/trend2.png';
import { IconArrow } from '../../assets/svg';
import CommonHeader from '../../components/common/Header/HeaderCommon';

export default function FeedPage() {
  return (
    <>
      <CommonHeader title='피드' />
      <TitleContainer>
        <TrendContainer>
          <SubTitle>요즘 트렌드 참고하기 ✈️</SubTitle>
          <IconArrow style={{ width: '0.7rem' }} />
        </TrendContainer>

        <TrendContainer>
          <SubTitle>
            <Highlight>소동 떡볶이</Highlight>님과 관련된 <br /> 다른 가게 글을 확인해보세요
          </SubTitle>
          <IconArrow style={{ width: '0.7rem' }} />
        </TrendContainer>
      </TitleContainer>

      <ImgContainer>
        <img src={Trend1} />
        <img src={Trend2} />
        <img src={Trend1} />
      </ImgContainer>

      <RelatedPostsContainer>
        <RelatedPosts />
      </RelatedPostsContainer>
    </>
  );
}

const ImgContainer = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  gap: 1rem;
  padding: 0 1.5rem;
  transform: translateX(-50%);
  overflow-x: auto;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  gap: 12rem;
`;

const TrendContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RelatedPostsContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  overflow-x: auto;
`;
