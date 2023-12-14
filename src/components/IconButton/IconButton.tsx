import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { IconButtonProps } from "../../pillow.types";
import s from "./IconButton.module.scss";

const IconButton = ({
  icon,
  variant,
  size,
  bgColor,
  textColor,
}: IconButtonProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--chip-bg-color" as string]: `${bgColor}`,
        ["--chip-text-color" as string]: `${textColor}`,
        ["--chip-top-shadow-color" as string]: `${topShadowColor}`,
        ["--chip-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`${s.btn} ${variant === "flat" ? s.flat : s.pressed} ${
        size === "small" && s.small
      } ${size === "medium" && s.medium} ${size === "large" && s.large}`}
    >
      {icon && icon}
    </div>
  );
};

export default IconButton;
