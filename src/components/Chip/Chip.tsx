import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ChipProps } from "../../pillow.types";
import "./Chip.scss";

const Chip = ({ icon, label, variant, bgColor, textColor }: ChipProps) => {
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
      className={`pillow-chip pillow-chip--${variant}`}
    >
      {label}
    </div>
  );
};

export default Chip;
