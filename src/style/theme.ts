import { css } from 'styled-components';

/** 컬러 코드 나오면 추가 될 예정 */
const colors = {
  white: '#FFFFFF',
  black: '#222222',
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
    font-family: 'SUIT';
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
  heading_01: css`
    font-family: 'SUIT';
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
  `,
};

const theme = { colors, fonts };

export default theme;
