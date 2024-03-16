import { css } from 'styled-components';

/** 컬러 코드 나오면 추가 될 예정 */
const colors = {
  white: '#FFFFFF',
  black: '#1E1E1E',
  main: '#342FFF',
  G_01: '#F8F8F8',
  G_02: '#EBE9EA',
  G_03: '#E1DEDF',
  G_04: '#D3CFD1',
  G_05: '#CAC6C8',
  G_06: '#BDB8BA',
  G_07: '#ACA7A9',
  G_08: '#868384',
  G_09: '#686566',
};

/** 폰트 결정 시 수정 될 예정 */
const fonts = {
  Title: css`
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  `,
  heading_01: css`
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 125%;
  `,
};

const theme = { colors, fonts };

export default theme;
