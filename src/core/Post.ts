import { ImgSodong, ImgGuide, ImgMyStore } from '../assets/svg/index';

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
export const cardConfig = {
  postNew: {
    title: 'SNS 마케팅 포스팅 만들기',
    subTitle: '가게 매출을 높여봐요!',
    buttonText: '포스팅 만들기',
    navigateTo: '/post',
    backgroundColor: 'main',
    Icon: ImgSodong,
    iconWidth: '13rem',
    iconBottom: '5.8rem',
    iconLeft: '10rem',
  },
  guideline: {
    title: '이용가이드',
    subTitle: '소동이 처음이라면 여기를 클릭하세요!',
    buttonText: '이용 가이드 확인하기',
    navigateTo: '/guideline',
    backgroundColor: 'pink',
    Icon: ImgGuide,
    iconWidth: '8rem',
    iconBottom: '5rem',
    iconLeft: '13rem',
  },
  myStore: {
    title: '나의 가게 관리',
    subTitle: '매장 관리와 운영에 도움을 드려요!',
    buttonText: '매장 관리하기',
    navigateTo: '/mystore',
    backgroundColor: 'yellow',
    Icon: ImgMyStore,
    iconWidth: '7rem',
    iconBottom: '2.5rem',
    iconLeft: '13rem',
  },
};
