import type { ReactNode } from "react";
import React, { forwardRef } from "react";
import clsx from "clsx";

type Ref = HTMLButtonElement;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: ReactNode;
  containerClassName?: string;
}

export const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      selected = false,
      disabled,
      className,
      children,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={containerClassName}>
        <button
          className={clsx("border border-sky-500 px-2 rounded-md", className)}
          disabled={disabled}
          ref={ref}
          {...props}
        >
          <span>{children}</span>
        </button>
      </div>
    );
  },
);
