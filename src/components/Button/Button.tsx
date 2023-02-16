import React from "react";
import "./Button.scss";

export interface ButtonProps {
  disabled: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  role: string;
  size: string;
  variant: string;
}

const Button = ({
  disabled,
  href,
  icon,
  label,
  onClick,
  role,
  size,
  variant,
}: ButtonProps) => {
  let btnVariant;

  if (variant === "flat") {
    btnVariant = "pillow-btn--flat";
  } else if (variant === "concave") {
    btnVariant = "pillow-btn--concave";
  } else if (variant === "convex") {
    btnVariant = "pillow-btn--convex";
  } else if (variant === "pressed") {
    btnVariant = "pillow-btn--pressed";
  } else {
    btnVariant = "";
  }

  let btnSize;
  if (size === "small") {
    btnSize = "pillow-btn--small";
  } else if (size === "medium") {
    btnSize = "pillow-btn--medium";
  } else if (size === "large") {
    btnSize = "pillow-btn--large";
  } else {
    btnSize = "";
  }

  return href ? (
    <a
      role={role}
      className={`pillow-btn ${btnVariant} ${btnSize}`}
      onClick={() => onClick}
      href={href}
    >
      {icon && <span></span>}
      {label}
    </a>
  ) : (
    <button
      role={role}
      className={`pillow-btn ${btnVariant} ${btnSize}`}
      disabled={disabled}
      onClick={() => onClick}
    >
      {icon && <span></span>}
      {label}
    </button>
  );
};

export default Button;
