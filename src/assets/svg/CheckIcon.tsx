import type { SVGProps } from 'react';
const SvgCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 23 23' {...props}>
    <circle cx={11.5} cy={11.5} r={11.5} fill='#8E85FF' />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='m6.5 11.5 3.837 4.317a.2.2 0 0 0 .31-.013L16.5 8'
    />
  </svg>
);
export default SvgCheckIcon;
