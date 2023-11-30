import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { SwitchProps } from "../../pillow.types";
import "./Switch.scss";

const Switch = ({
  checked,
  disabled,
  required,
  onChange,
  variant,
  bgColor,
  textColor,
}: SwitchProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  const style = {
    ["--textfield-bg-color" as string]: `${bgColor}`,
    ["--textfield-text-color" as string]: `${textColor}`,
    ["--textfield-top-shadow-color" as string]: `${topShadowColor}`,
    ["--textfield-bottom-shadow-color" as string]: `${bottomShadowColor}`,
  };
  return (
    <div
      style={style}
      className={`pillow-switch pillow-switch--${variant}`}
    ></div>
  );
};

export default Switch;
