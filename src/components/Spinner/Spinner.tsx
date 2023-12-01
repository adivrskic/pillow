import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { SpinnerProps } from "../../pillow.types";
import "./Spinner.scss";

const Spinner = ({ complete, spinColor, variant, bgColor }: SpinnerProps) => {
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
      className={`pillow-spinner pillow-spinner--${variant}`}
    >
      <div className="pillow-spinner__spinner"></div>
    </div>
  );
};

export default Spinner;
