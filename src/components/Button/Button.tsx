import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ButtonProps } from "../../pillow.types";
import s from "./Button.module.scss";

const Button = ({
  bgColor,
  disabled,
  href,
  icon,
  label,
  onClick,
  role,
  size,
  textColor,
  variant,
}: ButtonProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return href ? (
    <a
      style={{
        ["--btn-text-color" as string]: `${textColor}`,
      }}
      role={role}
      className={`${s.btn} ${variant === "flat" ? s.flat : s.pressed} ${
        disabled && s.disabled
      } ${size === "small" && s.small} ${size === "medium" && s.medium} ${
        size === "large" && s.large
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
      className={`${s.btn} ${variant === "flat" ? s.flat : s.pressed} ${
        disabled && s.disabled
      } ${size === "small" && s.small} ${size === "medium" && s.medium} ${
        size === "large" && s.large
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
