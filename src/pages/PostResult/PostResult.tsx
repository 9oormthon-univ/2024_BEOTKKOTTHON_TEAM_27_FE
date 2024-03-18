import styled from 'styled-components';
import Toggle from 'react-styled-toggle';

export default function PostResult() {
  return (
    <PostResultContainter>
      {/* Title */}
      <PostResultTitleContainer>
        <PostResultTitle>
          <span>포스트</span>가 완성되었어요!
        </PostResultTitle>
        <PostRetry>다시 만들어 주세요</PostRetry>
      </PostResultTitleContainer>

      {/* Body */}
      <PostImage />
      <PostTextContainer>
        <Toggle backgroundColorChecked='#342FFF' labelLeft='큰 글씨' />
        <PostText>
          망원동 성공 맛집 딸기프토 감성 카페☕️ <br />
          쫀득, 부드러운 토스트 위에 크림치즈와 딸기가 듬뿍!🍓 <br />
          비주얼부터 맛까지 빠짐없는 망원동 필수 코스 ✨ <br /> <br /># 망원동카페 # 합정카페 <br />
          🏷️ 망원동 #콘웰 <br />
          📍 서울 마포구 월드컵로15길 40 2층
        </PostText>
      </PostTextContainer>
    </PostResultContainter>
  );
}

const PostResultContainter = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostResultTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2.5rem 0 2rem;
`;

const PostResultTitle = styled.h1`
  ${({ theme }) => theme.fonts.Title};

  > span {
    color: ${({ theme }) => theme.colors.main};
  }
`;

const PostRetry = styled.p`
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: 0.5rem;

  ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.description};
`;

const PostImage = styled.img`
  width: 80%;
  aspect-ratio: 1/1;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  background: url(https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea)
    lightgray 50% / cover no-repeat;
`;

const PostTextContainer = styled.div`
  width: 80%;
  //   border: 1px solid red;
`;

const PostText = styled.p`
  width: 100%;
  border-radius: 0.3125rem;
  background: #f9f9f9;
  padding: 1.2rem 1.7rem;
  margin: 0.75rem 0;

  ${({ theme }) => theme.fonts.post_big};
`;
