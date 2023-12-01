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
    ["--switch-bg-color" as string]: `${bgColor}`,
    ["--switch-text-color" as string]: `${textColor}`,
    ["--switch-top-shadow-color" as string]: `${topShadowColor}`,
    ["--switch-bottom-shadow-color" as string]: `${bottomShadowColor}`,
  };
  return (
    <label style={style} className={`pillow-switch pillow-switch--${variant}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={() => onChange}
        className="pillow-switch__input"
      />
      <span className="switch" />
    </label>
  );
};

export default Switch;
