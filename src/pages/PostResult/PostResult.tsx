import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import PostButton from '../../components/PostResult/PostButton';
import { useWindowSize } from '../../hooks/useWindowSize';
import Confetti from 'react-confetti';
import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { Image, Text } from '../../assets/svg';

export default function PostResult() {
  const post = {
    text: '망원동 성공 맛집 딸기프토 감성 카페☕️ \n쫀득, 부드러운 토스트 위에 크림치즈와 딸기가 듬뿍!🍓 \n비주얼부터 맛까지 빠짐없는 망원동 필수 코스 ✨\n\n# 망원동카페 # 합정카페 \n🏷️ 망원동 #콘웰 \n📍 서울 마포구 월드컵로15길 40 2층',
    image:
      'https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea',
    sns: 'instagram',
  };

  const { width, height } = useWindowSize();
  const [open, setIsOpen] = useState(true);

  return (
    <PostResultContainter>
      <PostTitle />
      <PostImage url={post.image} />
      <PostText text={post.text} />
      <PostButton image={post.image} text={post.text} sns={post.sns} />
      <Confetti width={width} height={height} recycle={false} />
      <BottomSheet open={open}>
        <BottomSheetContainer>
          <BottomSheetTitle>포스트 다시 생성하기</BottomSheetTitle>
          <BottomSheetSubtitle>
            다시 생성하기는 <b>15초</b> 이후, 최대 <b>2회</b>까지 가능해요
          </BottomSheetSubtitle>

          <BottomSheetSelectContainer>
            <BottomSheetSelect>
              <Image style={{ width: '110px' }} />
              <p>이미지 생성하기</p> <div>0/3</div>
            </BottomSheetSelect>
            <BottomSheetSelect>
              <Text style={{ width: '110px' }} />
              <p>글 생성하기</p> <div>3/3</div>
            </BottomSheetSelect>
          </BottomSheetSelectContainer>
        </BottomSheetContainer>
      </BottomSheet>
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

const BottomSheetContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.7rem;
`;

const BottomSheetTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading_02};
`;

const BottomSheetSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.p_01};

  > b {
    font-weight: 700;
  }
`;

const BottomSheetSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 1.75rem;
`;

const BottomSheetSelect = styled.div`
  flex: 1;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.deep_gray};

  > img {
  }

  > p {
    ${({ theme }) => theme.fonts.content_01};
  }

  > div {
    ${({ theme }) => theme.fonts.ex_01};
  }
`;
