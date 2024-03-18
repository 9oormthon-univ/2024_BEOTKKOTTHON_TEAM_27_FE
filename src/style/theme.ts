import { css } from 'styled-components';

/** 컬러 코드 나오면 추가 될 예정 */
const colors = {
  white: '#FFFFFF',
  black: '#1E1E1E',
  gray: '#94A3B8',
  light_gray: '#F9F9F9',
  deep_gray: '#727272',
  main: '#4C2FFF',
  G_01: '#F8F8F8',
  G_02: '#EBE9EA',
  G_03: '#ECEEF4',
  G_04: '#D3CFD1',
  G_05: '#CAC6C8',
  G_06: '#BDB8BA',
  G_07: '#757373',
  G_08: '#868384',
  G_09: '#686566',
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
  PostingTitle: css`
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 144.583%; /* 34.7px */
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
  heading_03: css`
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 32px */
  `,
  footer_01: css`
    color: #fff;
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
};

const theme = { colors, fonts };

export default theme;
