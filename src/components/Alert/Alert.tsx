import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { AlertProps } from "../../pillow.types";
import "./Alert.scss";

const Alert = ({
  heading,
  label,
  severity,
  variant,
  onClose,
  bgColor,
  textColor,
}: AlertProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  let alertIcon;

  if (severity === "error") {
    alertIcon = <IoWarningOutline className="pillow-alert__icon" />;
  } else if (severity === "warning") {
    alertIcon = <IoWarningOutline className="pillow-alert__icon" />;
  } else if (severity === "info") {
    alertIcon = <IoInformationCircleOutline className="pillow-alert__icon" />;
  } else if (severity === "success") {
    alertIcon = <IoCheckmarkCircleOutline className="pillow-alert__icon" />;
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
      {onClose && (
        <IoCloseOutline
          className="pillow-alert__close"
          onClick={() => onClose()}
        />
      )}
      <div className="pillow-alert__content">
        <h4 className="pillow-alert__heading">{heading}</h4>
        <p className="pillow-alert__label">{label}</p>
      </div>
    </div>
  );
};

export default Alert;
