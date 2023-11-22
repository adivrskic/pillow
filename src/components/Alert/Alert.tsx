import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { getColor } from "../../helpers";
import { AlertProps } from "../../pillow.types";
import "./Alert.scss";

const Alert = ({
  heading,
  label,
  severity,
  variant,
  bgColor,
  textColor,
}: AlertProps) => {
  const topShadowColor = getColor(bgColor, -0.2);
  const bottomShadowColor = getColor(bgColor, 0.2);
  let alertIcon;

  if (severity === "error") {
    alertIcon = <IoWarningOutline />;
  } else if (severity === "warning") {
    alertIcon = <IoWarningOutline />;
  } else if (severity === "info") {
    alertIcon = <IoInformationCircleOutline />;
  } else if (severity === "success") {
    alertIcon = <IoCheckmarkCircleOutline />;
  } else {
    alertIcon = null;
  }

  return (
    <div
      style={{
        ["--alert-bg-color" as string]: `${bgColor}`,
        ["--alert-text-color" as string]: `${textColor}`,
        ["--alert-top-shadow-color" as string]: `${topShadowColor}`,
        ["--alert-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`pillow-alert pillow-alert--${variant} pillow-alert--${severity}`}
    >
      {alertIcon && alertIcon}
      <div className="pillow-alert__content">
        <h4 className="pillow-alert__heading">{heading}</h4>
        <p className="pillow-alert__label">{label}</p>
      </div>
    </div>
  );
};

export default Alert;
