import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { SpinnerProps } from "../../pillow.types";
import s from "./Spinner.module.scss";

const Spinner = ({ bgColor, complete, spinColor, variant }: SpinnerProps) => {
  if (complete) return null;
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--spinner-bg-color" as string]: `${bgColor}`,
        ["--spinner-spin-color" as string]: `${spinColor}`,
        ["--spinner-top-shadow-color" as string]: `${topShadowColor}`,
        ["--spinner-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`${s.spinner} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      <div className={s.inner}></div>
    </div>
  );
};

export default Spinner;
