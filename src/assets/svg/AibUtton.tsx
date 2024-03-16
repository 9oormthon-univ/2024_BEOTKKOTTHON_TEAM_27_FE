import type { SVGProps } from 'react';
const SvgAibUtton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 33 24' {...props}>
    <g filter='url(#AIBUtton_svg__a)'>
      <rect
        width={25}
        height={16}
        x={4}
        fill='#fff'
        fillOpacity={0.8}
        rx={3}
        shapeRendering='crispEdges'
      />
      <path
        fill='#342FFF'
        d='M13.146 12h-.919l2.588-7.07h.928L18.331 12h-.928l-.703-1.992h-2.842zm.976-2.764h2.305l-1.123-3.164h-.059zm6.045-4.306V12h-.879V4.93z'
      />
    </g>
    <defs>
      <filter
        id='AIBUtton_svg__a'
        width={33}
        height={24}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_539_2696' />
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_539_2696' result='shape' />
      </filter>
    </defs>
  </svg>
);
export default SvgAibUtton;
