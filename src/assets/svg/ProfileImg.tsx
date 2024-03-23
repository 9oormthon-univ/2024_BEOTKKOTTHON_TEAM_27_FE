import type { SVGProps } from 'react';
const SvgProfileImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 64 64'
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill='#E7E7E7' />
    <path
      fill='url(#profileImg_svg__a)'
      fillRule='evenodd'
      d='M9.143 54.395V10.971H55.77v42.452C49.914 59.917 41.434 64 32 64c-8.954 0-17.05-3.678-22.857-9.605'
      clipRule='evenodd'
    />
    <defs>
      <pattern id='profileImg_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#profileImg_svg__b' transform='matrix(.00127 0 0 .00112 -.807 0)' />
      </pattern>
      <image
        id='profileImg_svg__b'
        width={1920}
        height={1080}
      />
    </defs>
  </svg>
);
export default SvgProfileImg;