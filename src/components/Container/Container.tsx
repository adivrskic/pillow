import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ContainerProps } from "../../pillow.types";
import s from "./Container.module.scss";

const Container = ({
  children,
  direction,
  fullWidth,
  align,
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
      className={`${s.container} ${variant === "flat" ? s.flat : null} ${
        variant === "pressed" ? s.pressed : null
      }${direction === "row" ? s.row : s.column}
        ${fullWidth && s.full}
        ${align === "left" && s.left}
        ${align === "center" && s.center}
        ${align === "right" && s.right}
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
