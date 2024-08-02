import type { SVGProps } from 'react';
const SvgIconArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 14' {...props}>
    <path
      fill='#000'
      d='m8.764 7.245-7.15 6.232a.84.84 0 0 1-1.076 0 .605.605 0 0 1 0-.939l7.15-6.23z'
    />
    <rect
      width={10.71}
      height={1.428}
      fill='#000'
      rx={0.714}
      transform='scale(-1.0661 -.9292)rotate(45 6.573 -13.433)'
    />
  </svg>
);
export default SvgIconArrow;
