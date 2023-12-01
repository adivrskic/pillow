import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { IconButtonProps } from "../../pillow.types";
import "./IconButton.scss";

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
      className={`pillow-icon-button pillow-icon-button--${variant} pillow-icon-button--${size}`}
    >
      {icon && icon}
    </div>
  );
};

export default IconButton;
