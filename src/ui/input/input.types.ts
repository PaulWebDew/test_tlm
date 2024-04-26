import { ChangeEvent, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';


export type InputProps = {
  checkBox?: boolean;
  className?: any;
  label?: string;
  defaultValue?: string;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  type?: 'text' | 'password' | 'number' | 'email' | 'phone' | 'date' | 'checkbox';
  disabled?: boolean;
  replaceValue?: (value: string, prevValue?: string) => string;
  mask?: string | (string | RegExp)[];
  onIconClick?: () => void;
  onBeforeIconClick?: () => void;
  placeholder?: string;
  unit?: ReactNode;
  onClickUnit?: () => void;
  autoComplete?: 'on' | 'off';
  min?: string | number;
  max?: string | number;
  afterContent?: string | any;
  readOnly?: boolean;
  require?: boolean;
};
