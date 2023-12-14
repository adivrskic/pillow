import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ChipProps } from "../../pillow.types";
import s from "./Chip.module.scss";

const Chip = ({ bgColor, label, textColor, variant }: ChipProps) => {
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
      className={`${s.chip} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      {label}
    </div>
  );
};

export default Chip;
