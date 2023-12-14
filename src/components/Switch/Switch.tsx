import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { SwitchProps } from "../../pillow.types";
import s from "./Switch.module.scss";

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
    <label
      style={style}
      className={`${s.switch} ${variant === "flat" ? s.flat : s.pressed} ${
        disabled ? s.disabled : null
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={() => onChange}
        className={s.input}
      />
      <span className={s.inner} />
    </label>
  );
};

export default Switch;
