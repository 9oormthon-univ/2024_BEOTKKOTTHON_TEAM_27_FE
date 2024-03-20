import styled from 'styled-components';
import ImageCard from '../../components/PostHistory/ImageCard/ImageCard';
import TextCard from '../../components/PostHistory/TextCard/TextCard';

interface CardData {
  date: string;
  imageAlt: string;
  text: string;
}

function PostHistoryPage() {
  const cardData: CardData[] = [
    {
      date: '2014-03-20',
      imageAlt: '생성-이미지',
      text: '진정한 감성을 맛보다! 🍟🧀 토마토 소스와 치즈가 만나 환상의 조합을 이룬 웨지 감자튀김으로 당신의 입맛을 사로잡아 보세요! 😋✨ #웨지감자 #치즈소스 #맛있다그램 #먹스타그램',
    },
    {
      date: '2014-03-20',
      imageAlt: '생성-이미지',
      text: '동네 이웃 여러분, 맛과 행복이 가득한 오픈 이벤트를 소개합니다! 🎉🍲 로제 떡볶이로 새로운 맛의 세계를 체험하세요! 달콤한 로제 소스와 매콤한 떡볶이의 조합이 일품입니다. 이벤트 기간 동안 특별한 혜택도 놓치지 마세요! 😉✨ #로제떡볶이 #맛집이벤트 #동네맛집 #떡볶이사랑',
    },
  ];

  return (
    <PostHistoryPageContainer>
      {cardData.map((data, index) => {
        if (index % 2 === 0) {
          return (
            <ImageCard key={index} date={data.date} imageAlt={data.imageAlt} text={data.text} />
          );
        } else {
          return <TextCard key={index} date={data.date} text={data.text} />;
        }
      })}
    </PostHistoryPageContainer>
  );
}

const PostHistoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;

export default PostHistoryPage;
