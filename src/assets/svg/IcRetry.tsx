import type { SVGProps } from 'react';
const SvgIcRetry = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 32' {...props}>
    <mask
      id='icRetry_svg__a'
      width={18}
      height={18}
      x={7}
      y={7}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M7 7h18v18H7z' />
    </mask>
    <g mask='url(#icRetry_svg__a)'>
      <path
        fill='#402FFF'
        d='M16 23.5a6.5 6.5 0 0 1-2.634-.534 6.9 6.9 0 0 1-2.138-1.444 6.9 6.9 0 0 1-1.444-2.138 6.5 6.5 0 0 1-.534-2.634q0-1.406.534-2.634a6.9 6.9 0 0 1 1.444-2.138 6.9 6.9 0 0 1 2.138-1.444A6.5 6.5 0 0 1 16 10h.113L14.95 8.838 16 7.75l3 3-3 3-1.05-1.088 1.163-1.162H16q-2.194 0-3.722 1.528T10.75 16.75t1.528 3.722T16 22t3.722-1.528 1.528-3.722h1.5a6.5 6.5 0 0 1-.534 2.634 6.9 6.9 0 0 1-1.444 2.138 6.9 6.9 0 0 1-2.138 1.444A6.5 6.5 0 0 1 16 23.5'
      />
    </g>
  </svg>
);
export default SvgIcRetry;
