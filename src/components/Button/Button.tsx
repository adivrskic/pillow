import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
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
  let buttonIcon;

  if (icon === "error") {
    buttonIcon = <IoWarningOutline />;
  } else if (icon === "warning") {
    buttonIcon = <IoWarningOutline />;
  } else if (icon === "info") {
    buttonIcon = <IoInformationCircleOutline />;
  } else if (icon === "success") {
    buttonIcon = <IoCheckmarkCircleOutline />;
  } else {
    buttonIcon = null;
  }
  return href ? (
    <a
      role={role}
      className={`pillow-btn pillow-btn--${variant} pillow-btn--${size}`}
      onClick={() => onClick}
      href={href}
    >
      {icon && buttonIcon}
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
      className={`pillow-btn pillow-btn--${variant} pillow-btn--${size}`}
      disabled={disabled}
      onClick={() => onClick}
    >
      {icon && buttonIcon}
      {label}
    </button>
  );
};

export default Button;
