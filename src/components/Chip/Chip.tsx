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
  let chipIcon;

  if (icon === "error") {
    chipIcon = <IoWarningOutline />;
  } else if (icon === "warning") {
    chipIcon = <IoWarningOutline />;
  } else if (icon === "info") {
    chipIcon = <IoInformationCircleOutline />;
  } else if (icon === "success") {
    chipIcon = <IoCheckmarkCircleOutline />;
  } else {
    chipIcon = null;
  }

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
      {icon && chipIcon}
      {label}
    </div>
  );
};

export default Chip;
