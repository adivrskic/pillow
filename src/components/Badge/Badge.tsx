import React from "react";
import { luminosity } from "../../constants";
import { getColor } from "../../helpers";
import { BadgeProps } from "../../pillow.types";
import s from "./Badge.module.scss";

const Badge = ({ bgColor, label, textColor, variant }: BadgeProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  const badgeLabel =
    typeof label === "number" ? (label > 99 ? "99+" : label) : label;
  return (
    <div
      style={{
        ["--badge-bg-color" as string]: `${bgColor}`,
        ["--badge-text-color" as string]: `${textColor}`,
        ["--badge-top-shadow-color" as string]: `${topShadowColor}`,
        ["--badge-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`${s.badge} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      {badgeLabel}
    </div>
  );
};

export default Badge;
