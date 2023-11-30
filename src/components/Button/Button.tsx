import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ButtonProps } from "../../pillow.types";
import "./Button.scss";

const Button = ({
  disabled,
  href,
  icon,
  label,
  onClick,
  role,
  size,
  variant,
  bgColor,
  textColor,
}: ButtonProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return href ? (
    <a
      role={role}
      className={`pillow-btn pillow-btn--${variant} pillow-btn--${size}  ${
        disabled ? "pillow-btn--disabled" : ""
      }`}
      onClick={() => onClick()}
      href={href}
    >
      {icon && icon}
      {label}
    </a>
  ) : (
    <button
      style={{
        ["--btn-bg-color" as string]: `${bgColor}`,
        ["--btn-text-color" as string]: `${textColor}`,
        ["--btn-top-shadow-color" as string]: `${topShadowColor}`,
        ["--btn-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      role={role}
      className={`pillow-btn pillow-btn--${variant} pillow-btn--${size} ${
        disabled ? "pillow-btn--disabled" : ""
      }`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Button;
