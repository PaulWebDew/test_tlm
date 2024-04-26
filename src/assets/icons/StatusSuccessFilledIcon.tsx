import type { ComponentPropsWithRef } from 'react';

export const StatusSuccessFilledIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='#22A06B'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.6667 8C14.6667 4.318 11.682 1.33333 8 1.33333C4.318 1.33333 1.33333 4.318 1.33333 8C1.33333 11.682 4.318 14.6667 8 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8ZM11.16 6.44845L7.82665 10.1151L7.39712 10.5876L6.90657 10.1788L4.90657 8.51215L5.76015 7.48786L7.2696 8.74573L10.1734 5.55156L11.16 6.44845Z'
      />
    </svg>
  );
};
