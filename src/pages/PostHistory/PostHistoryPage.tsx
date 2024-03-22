import styled from 'styled-components';
import TextCardWithImage from '../../components/PostHistory/TextCardWithImage/TextCardWithImage';
import { useOutletContext } from 'react-router-dom';
import { HeaderLayoutContext } from '../../layouts/HeaderLayout';
import { useEffect } from 'react';

interface CardData {
  date: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function PostHistoryPage() {
  /**
   * 헤더 타이틀 변경
   */
  const { setTitle } = useOutletContext<HeaderLayoutContext>();
  useEffect(() => {
    setTitle('내가 만든 포스팅');
  }, [setTitle]);

  const cardData: CardData[] = [
    {
      date: '2024-03-22',
      text: '진정한 감성을 맛보다! 🍟🧀 토마토 소스와 치즈가 만나 환상의 조합을 이룬 웨지 감자튀김으로 당신의 입맛을 사로잡아 보세요! 😋✨ #웨지감자 #치즈소스 #맛있다그램 #먹스타그램',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea',
      imageAlt: '이미지 대체 텍스트 1',
    },
    {
      date: '2024-03-21',
      text: '동네 이웃 여러분, 맛과 행복이 가득한 오픈 이벤트를 소개합니다! 🎉🍲 로제 떡볶이로 새로운 맛의 세계를 체험하세요! 달콤한 로제 소스와 매콤한 떡볶이의 조합이 일품입니다. 이벤트 기간 동안 특별한 혜택도 놓치지 마세요! 😉✨ #로제떡볶이 #맛집이벤트 #동네맛집 #떡볶이사랑',
    },
    {
      date: '2024-03-22',
      text: '진정한 감성을 맛보다! 🍟🧀 토마토 소스와 치즈가 만나 환상의 조합을 이룬 웨지 감자튀김으로 당신의 입맛을 사로잡아 보세요! 😋✨ #웨지감자 #치즈소스 #맛있다그램 #먹스타그램',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea',
      imageAlt: '이미지 대체 텍스트 1',
    },
  ];

  return (
    <HistoryPageContainer>
      {cardData.map((data, index) => {
        if (data.imageUrl && data.imageAlt) {
          // 이미지가 있는 경우
          return (
            <TextCardWithImage
              key={index}
              date={data.date}
              text={data.text}
              imageUrl={data.imageUrl}
              imageAlt={data.imageAlt}
            />
          );
        } else {
          // 이미지가 없는 경우
          return <TextCardWithImage key={index} date={data.date} text={data.text} />;
        }
      })}
    </HistoryPageContainer>
  );
}

const HistoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;
