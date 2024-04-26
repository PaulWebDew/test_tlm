import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export type ErrorProps = {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};
