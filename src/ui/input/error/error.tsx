import React, { FC } from 'react';
import { ErrorProps } from './error.type';

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    error && (
      <p className="text-red-500">
        <>{error}</>
      </p>
    )
  );
};

export default Error;
