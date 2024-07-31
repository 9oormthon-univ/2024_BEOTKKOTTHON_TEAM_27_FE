import type { SVGProps } from 'react';
const SvgIconFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 19 19' {...props}>
    <rect width={7.5} height={7.5} x={0.75} y={0.75} stroke='#9D9D9D' strokeWidth={1.5} rx={1.25} />
    <path
      stroke='#9D9D9D'
      strokeWidth={1.5}
      d='M12 .75h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25V2c0-.69.56-1.25 1.25-1.25Z'
    />
    <rect
      width={7.5}
      height={7.5}
      x={10.75}
      y={10.75}
      stroke='#9D9D9D'
      strokeWidth={1.5}
      rx={1.25}
    />
    <rect
      width={7.5}
      height={7.5}
      x={0.75}
      y={10.75}
      stroke='#9D9D9D'
      strokeWidth={1.5}
      rx={1.25}
    />
  </svg>
);
export default SvgIconFeed;
