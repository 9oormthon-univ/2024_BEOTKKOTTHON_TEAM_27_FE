import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAi = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 25 16' {...props}>
    <rect width={25} height={16} fill='#FFC230' fillOpacity={0.1} rx={3} />
    <path
      fill='#FFA6A6'
      d='M9.146 12h-.918l2.587-7.07h.928L14.331 12h-.928l-.703-1.992H9.858zm.976-2.764h2.305l-1.123-3.164h-.059zm6.045-4.306V12h-.879V4.93z'
    />
  </svg>
);
export default SvgAi;
