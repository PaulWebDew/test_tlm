import type { ComponentPropsWithRef } from 'react';

export const StatusErrorFilledIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#E34935'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.00001 1.33333C11.682 1.33333 14.6667 4.31867 14.6667 8C14.6667 11.6813 11.682 14.6667 8.00001 14.6667C4.31801 14.6667 1.33334 11.6813 1.33334 8C1.33334 4.31867 4.31801 1.33333 8.00001 1.33333ZM7.33334 4.66667V9H8.66668V4.66667H7.33334ZM7.33334 10V11.3333H8.66668V10H7.33334Z'
      />
    </svg>
  );
};
