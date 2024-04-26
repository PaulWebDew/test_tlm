import clsx from "clsx";

export const inputWrapperClassName = ({
  disabled,
  error,
  isFocus,
  checkBox,
  readOnly,
}: {
  disabled: boolean;
  error: boolean;
  isFocus: boolean;
  checkBox: boolean | undefined;
  readOnly: boolean | undefined;
}) =>
  clsx(
    "border",
    "text-gray-600",
    "placeholder-gray-700",
    "font-regular",
    "rounded-[8px]",
    "block",
    "w-full",
    "inline-flex",
    "items-center",
    "transition",
    readOnly
      ? "outline-none"
      : checkBox
        ? "border-none outline-none w-8 flex align-center"
        : disabled
          ? "border-gray-300 bg-gray-50 cursor-not-allowed"
          : error
            ? "border-red-500"
            : isFocus
              ? "outline outline-1 outline-blue-600"
              : "border-gray-300 hover:border-gray-400 ",
  );

export const inputClassName = clsx(
  "border-none",
  "focus:border-none",
  "outline-0",
  "focus:outline-0",
  "w-full",
  "p-[8px]",
  "rounded-[8px]",
  "text-gray-900",
  "disabled:bg-gray-100",
  "disabled:text-gray-400",
  "disabled:cursor-not-allowed",
);

export const inputLabelClassName = (disabled: boolean) => {
  return clsx(
    "block",
    "mb-1",
    "truncate",
    "flex",
    disabled ? "text-gray-400" : "text-gray-600",
  );
};
