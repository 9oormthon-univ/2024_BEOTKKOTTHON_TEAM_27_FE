import type { SVGProps } from 'react';
const SvgMyposting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 45 45'
    {...props}
  >
    <path fill='url(#myposting_svg__a)' d='M0 0h45v45H0z' />
    <defs>
      <pattern id='myposting_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#myposting_svg__b' transform='scale(.00042)' />
      </pattern>
      <image
        id='myposting_svg__b'
        width={2400}
        height={2400}
      />
    </defs>
  </svg>
);
export default SvgMyposting;