import type { SVGProps } from 'react';
const SvgImgSodong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 207 154'
    {...props}
  >
    <path fill='url(#img_sodong_svg__a)' d='M0 0h207v154H0z' transform='matrix(-1 0 0 1 207 0)' />
    <defs>
      <pattern id='img_sodong_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#img_sodong_svg__b' transform='scale(.0005 .00067)' />
      </pattern>
      <image
        id='img_sodong_svg__b'
        width={2000}
        height={2000}
      />
    </defs>
  </svg>
);
export default SvgImgSodong;