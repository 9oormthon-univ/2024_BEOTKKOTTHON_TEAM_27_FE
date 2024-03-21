import type { SVGProps } from 'react';
const SvgTip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 32 16' {...props}>
    <rect width={32} height={16} fill='#9FA9FF' fillOpacity={0.47} rx={3} />
    <path
      fill='#2A40FF'
      d='M10.618 12V5.62h-2.16v-.98h5.49v.98h-2.16V12zm4.614 0V4.64h1.17V12zm3.085 0V4.64h2.24c1.64 0 2.81.56 2.81 2.23 0 1.61-1.17 2.34-2.77 2.34h-1.11V12zm1.17-3.72h1c1.17 0 1.73-.45 1.73-1.41 0-.98-.6-1.29-1.78-1.29h-.95z'
    />
  </svg>
);
export default SvgTip;
