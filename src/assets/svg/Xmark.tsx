import type { SVGProps } from 'react';
const SvgXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 17' {...props}>
    <path
      fill='#8E8E93'
      fillRule='evenodd'
      d='M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17m3.766-12.266a.8.8 0 0 1 0 1.132L9.63 8.5l2.635 2.634a.8.8 0 1 1-1.132 1.132L8.5 9.63l-2.634 2.635a.8.8 0 1 1-1.132-1.132L7.37 8.5 4.734 5.866a.8.8 0 0 1 1.132-1.132L8.5 7.37l2.634-2.635a.8.8 0 0 1 1.132 0'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgXmark;
