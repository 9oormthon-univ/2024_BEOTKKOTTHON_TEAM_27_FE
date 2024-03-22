import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIcArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' {...props}>
    <path
      fill='#212121'
      d='M16 21.5a1.5 1.5 0 0 1-1.06-.44l-8-8a1.49 1.49 0 0 1 0-2.12l8-8a1.5 1.5 0 1 1 2.12 2.12L10.12 12l6.94 6.94a1.49 1.49 0 0 1 0 2.12 1.5 1.5 0 0 1-1.06.44'
    />
  </svg>
);
export default SvgIcArrow;
