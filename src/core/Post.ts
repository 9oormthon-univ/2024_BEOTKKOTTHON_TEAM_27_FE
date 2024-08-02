import { ImgSodong, ImgGuide, ImgMyStore } from '../assets/svg/index';
import TrendImg from '../assets/Image/trend3.png';
import TrendImg2 from '../assets/Image/trend4.png';

export const POSTING_CHANNEL = Object.freeze({
  INSTAGRAM: `인스타그램`,
  DANGUEN: `당근마켓`,
  KAKAO_CHANNEL: `카카오톡 채널`,
  KAKAO_TALK: `카카오톡 동네소식`,
});

export const POSTING_TYPE = Object.freeze({
  TEXT: `Text`,
  BOTH: `Both`,
});

export const PROMOTION_TYPE = Object.freeze({
  메뉴: `메뉴`,
  이벤트: `이벤트`,
});

export const CARD_CONFIG = {
  postNew: {
    title: 'SNS 마케팅 포스팅 만들기',
    subTitle: '가게 매출을 높여봐요!',
    buttonText: '포스팅 만들기',
    navigateTo: '/post',
    backgroundColor: 'main',
    Icon: ImgSodong,
    iconWidth: '13rem',
    iconBottom: '5.5rem',
    iconLeft: '8rem',
  },
  guideline: {
    title: '이용가이드',
    subTitle: '소동이 처음이라면 여기를 클릭하세요!',
    buttonText: '이용 가이드 확인하기',
    navigateTo: '/guide',
    backgroundColor: 'pink01',
    Icon: ImgGuide,
    iconWidth: '7rem',
    iconBottom: '4rem',
    iconLeft: '13rem',
  },
  myStore: {
    title: '나의 가게 관리',
    subTitle: '가게가 여러 개라면 소동에서 한번에 관리해요!',
    buttonText: '매장 관리하기',
    navigateTo: '/store-new',
    backgroundColor: 'yellow',
    Icon: ImgMyStore,
    iconWidth: '7rem',
    iconBottom: '2.2rem',
    iconLeft: '12rem',
  },
};

interface PostProps {
  title: string;
  hashtags: string[];
  imgSrc: string;
}

export const POSTS: PostProps[] = [
  {
    title: '코야코',
    hashtags: ['#혜화떡볶이맛집', '#치즈소스'],
    imgSrc: TrendImg,
  },
  {
    title: '청년 다방',
    hashtags: ['#혜화떡볶이맛집'],
    imgSrc: TrendImg2,
  },
  {
    title: '코야코',
    hashtags: ['#혜화떡볶이맛집', '#치즈소스'],
    imgSrc: TrendImg,
  },
];
