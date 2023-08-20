function Button({type, text, className, ...restProps}) {
  return <button type={type} className={className} {...restProps}>{text}</button>;
}

export default Button;
