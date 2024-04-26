import clsx from "clsx";
import { ChangeEvent, ForwardedRef, forwardRef, useRef, useState } from "react";

import {
  inputClassName,
  inputLabelClassName,
  inputWrapperClassName,
} from "./input.styles";
import { InputProps } from "./input.types";
import Error from "./error";

export const Input = forwardRef(
  (props: InputProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      require,
      defaultValue,
      replaceValue,
      label,
      error,
      onChange,
      onClick,
      type = "text",
      placeholder,
      disabled = false,
      unit,
      onClickUnit,
      mask,
      onIconClick,
      onBeforeIconClick,
      autoComplete = "on",
      min,
      max,
      afterContent,
      checkBox,
      readOnly,

      ...remindedProps
    } = props;

    const [isFocus, setIsFocus] = useState(false);
    const prevDefaultValue = useRef<string>();

    const inputProps = {
      readOnly: readOnly,
      className: inputClassName,
      type,
      placeholder,
      disabled,
      autoComplete,
      onChange: handleOnChange,
      onClick,
      min,
      max,
      onFocus: setIsFocus.bind(null, true),
      onBlur: setIsFocus.bind(null, false),
      ...remindedProps,
    };

    const renderLabel = label && (
      <label
        className={clsx(
          inputLabelClassName(disabled),
          type === "checkbox" && "w-full mt-1 ",
        )}
      >
        {label}
        {require && <span className={"text-red-600 ml-1 "}>*</span>}
      </label>
    );

    const renderError = !!error && <Error error={error} />;

    const renderInput = (
      <input ref={forwardedRef} value={defaultValue} {...inputProps} />
    );

    const renderAfterContent = afterContent && (
      <div className="mr-[12px]">{afterContent}</div>
    );

    function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
      const value = event.target.value;
      onChange?.(event);
      prevDefaultValue.current = value;
    }

    return (
      <div className={clsx("w-full", type === "checkbox" && "flex h-10")}>
        {renderLabel}
        <div
          className={inputWrapperClassName({
            readOnly,
            isFocus,
            disabled,
            error: !!error,
            checkBox,
          })}
        >
          {renderInput}
          {renderAfterContent}
        </div>
        {renderError}
      </div>
    );
  },
);

Input.displayName = "Input";
