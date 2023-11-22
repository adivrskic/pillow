import React from "react";
import { luminosity } from "../../constants";
import { getColor } from "../../helpers";
import { BadgeProps } from "../../pillow.types";
import "./Badge.scss";

const Badge = ({ label, variant, bgColor, textColor }: BadgeProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--badge-bg-color" as string]: `${bgColor}`,
        ["--badge-text-color" as string]: `${textColor}`,
        ["--badge-top-shadow-color" as string]: `${topShadowColor}`,
        ["--badge-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`pillow-badge pillow-badge--${variant}`}
    >
      {label}
    </div>
  );
};

export default Badge;
