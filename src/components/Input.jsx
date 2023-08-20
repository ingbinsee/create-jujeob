import { useId } from "react";

function Input({disabled, type, placeholder, className, ...restProps}) {
  const id= useId()

  return (
    <>
      <label htmlFor={id} className="sr-only"></label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        {...restProps}
      />
    </>
  );
}
export default Input;
