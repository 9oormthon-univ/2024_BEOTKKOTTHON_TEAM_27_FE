import { css, keyframes } from 'styled-components';

const sizes = {
  maxWidth: '375px',
};

const colors = {
  white: '#FFFFFF',
  black: '#1E1E1E',
  gray: '#94A3B8',
  light_gray: '#F9F9F9',
  deep_gray: '#727272',
  main: '#206BFF',
  pink01: '#FFD6E7',
  pink02: '#FF77B0',
  yellow: '#FFD74A',
  light_main: '#E2E5FF',
  main_blue: '#206BFF',
  sub_blue: '#8E85FF',
  sub_blue01: '#B7CBFF',
  sub_purple: '#D4D1FB',
  G_01: '#F8F8F8',
  G_02: '#EBE9EA',
  G_03: '#ECEEF4',
  G_04: '#D3CFD1',
  G_05: '#CAC6C8',
  G_06: '#BDBDBD',
  G_07: '#757373',
  G_08: '#868384',
  G_09: '#686566',
  G_10: '#BDBDBD',
  G_11: '#848485',
  G_12: '#EEEEEE',
  G_13: '#F3F4F6',
  G_14: '#D9D9D9',
};

/** 폰트 결정 시 수정 될 예정 */
const fonts = {
  HomeTitle: css`
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  `,
  sub_title: css`
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  `,
  PostingTitle: css`
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 144.583%; /* 34.7px */
  `,
  posting_card_title: css`
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  `,
  posting_card_sub: css`
    font-family: Pretendard;
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.85rem;
  `,

  card_button: css`
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.625rem;
  `,
  subTitle: css`
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.583%; /* 1.35544rem */
  `,
  heading_01: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  `,

  description: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 500;
  `,
  post_normal: css`
    font-family: 'Pretendard';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 120%;
  `,
  post_big: css`
    color: #000;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 120%;
  `,
  heading_02: css`
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  footer: css`
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  subheading_02: css`
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  subheading_03: css`
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  heading_03: css`
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  `,
  heading_04: css`
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 32px */
  `,
  title_01: css`
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 32px */
  `,
  p_01: css`
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 32px */
  `,
  footer_01: css`
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  `,
  modal_01: css`
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 1.8rem */
  `,
  toggle_01: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 500;
  `,
  button_01: css`
    color: #fff;
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 700;
  `,
  button_02: css`
    color: #402fff;
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 500;
  `,
  tooltip: css`
    font-family: 'Pretendard';
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 144.583%; /* 1.08438rem */
  `,
  ex_01: css`
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 144.583%;
  `,
  date: css`
    color: #757373;
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.583%;
  `,
  content_01: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 125%;
  `,
  select_off: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    color: #21212166;
  `,
  select_off_01: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  `,
  select_on: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  `,
};

/* 믹스인 */
const mixins = {
  flexBox: (direction = 'row', justify = 'center', align = 'center') => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  skeleton: () => {
    const moveRight = keyframes`
      0% {
        transform: translateX(-200%);
      }
      100% {
        transform: translateX(1100%);
      }
    `;

    return css`
      position: relative;

      background: #e5e7eb;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10%;
        height: 100%;
        background: #d1d5db;
        box-shadow: 0px 0px 50px 30px #d1d5db;
        animation: ${moveRight} 1s infinite linear;
      }
    `;
  },
};

const theme = { colors, fonts, mixins, sizes };

export default theme;
