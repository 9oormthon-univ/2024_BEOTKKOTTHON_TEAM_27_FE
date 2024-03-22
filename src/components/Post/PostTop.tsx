import styled from 'styled-components';
import ImageKakao from '../../assets/Image/kakao.png';
import ImageCarrot from '../../assets/Image/carrot.png';
import ImageKakaoMap from '../../assets/Image/kakaoMap.png';
import ImageInsta from '../../assets/Image/Instagram.png';
import { getFormattedDate } from '../../utils/utils';

interface PostTopProps {
  channel?: string;
  createdDate?: string;
}

export default function PostTop({ channel, createdDate }: PostTopProps) {
  const IMG_SNS = new Map([
    ['인스타그램', ImageInsta],
    ['당근마켓', ImageCarrot],
    ['카카오톡 채널', ImageKakao],
    ['카카오 동네소식', ImageKakaoMap],
  ]);

  if (!channel || !createdDate) {
    return (
      <PostTopContainer>
        <SkeletonPostTopChannel />
        <SkeletonPostTopDate />
      </PostTopContainer>
    );
  }

  return (
    <PostTopContainer>
      <PostTopChannel>
        <img src={IMG_SNS.get(channel) || ImageInsta} alt={channel} />
        {channel}
      </PostTopChannel>
      <PostTopDate>{getFormattedDate(createdDate)}</PostTopDate>
    </PostTopContainer>
  );
}

const PostTopContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem 0 1.75rem;
`;

const PostTopChannel = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  ${({ theme }) => theme.fonts.subTitle};

  > img {
    width: 32px;
    height: 32px;
  }
`;

const PostTopDate = styled.div`
  ${({ theme }) => theme.fonts.date};
`;

const SkeletonPostTopChannel = styled.div`
  width: 50%;
  height: 1.3rem;
  border-radius: 0.5rem;

  ${({ theme }) => theme.mixins.skeleton};
`;

const SkeletonPostTopDate = styled.div`
  width: 30%;
  height: 1.3rem;
  border-radius: 0.5rem;

  ${({ theme }) => theme.mixins.skeleton};
`;
