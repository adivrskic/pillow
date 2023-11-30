import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ContainerProps } from "../../pillow.types";
import "./Container.scss";

const Container = ({
  children,
  direction,
  fullWidth,
  variant,
  bgColor,
  textColor,
}: ContainerProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--container-bg-color" as string]: `${bgColor}`,
        ["--container-text-color" as string]: `${textColor}`,
        ["--container-top-shadow-color" as string]: `${topShadowColor}`,
        ["--container-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`pillow-container pillow-container--${variant} pillow-container--${direction} ${
        fullWidth ? "pillow-container--full-width" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
