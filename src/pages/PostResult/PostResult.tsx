import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import PostButton from '../../components/PostResult/PostButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import Confetti from 'react-confetti';
import PostBottomSheet from '../../components/PostResult/PostBottomSheet';
import { useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';

export default function PostResult() {
  const { width, height } = useWindowSize();

  // GET - 포스트 조회
  const post = {
    text: '망원동 성공 맛집 딸기프토 감성 카페☕️ \n쫀득, 부드러운 토스트 위에 크림치즈와 딸기가 듬뿍!🍓 \n비주얼부터 맛까지 빠짐없는 망원동 필수 코스 ✨\n\n# 망원동카페 # 합정카페 \n🏷️ 망원동 #콘웰 \n📍 서울 마포구 월드컵로15길 40 2층',
    image:
      'https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea',
    sns: 'instagram',
    postingText_modifiedDate: '',
    postingText_modifiedCount: 3,
    postingImage_modifiedDate: '',
    postingImage_modifiedCount: 0,
  };

  // POST - 포스트 수정
  const [isOpen, setIsOpen] = useState(false);
  function handleRetry(type: string) {
    setIsOpen(false);
    console.log('Retry - > ', type);
  }

  return (
    <PostResultContainter>
      {/* 상단 */}
      <PostTitle onRetry={() => setIsOpen(true)} />

      {/* 중간 - 이미지, 텍스트 */}
      <PostImage url={post.image} />
      <PostText text={post.text} />

      {/* 하단 */}
      <PostButton image={post.image} text={post.text} sns={post.sns} />

      {/* 기타 - 컨페티, 바텀시트 */}
      <Confetti width={width} height={height} recycle={false} />
      <PostBottomSheet open={isOpen} onDismiss={() => setIsOpen(false)} onSelect={handleRetry} />
    </PostResultContainter>
  );
}

const PostResultContainter = styled.div`
  width: 100%;
  max-width: 360px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-bottom: calc(3.125rem + 3.125rem + 1rem + 1rem); // 버튼 영역 고려
`;
