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
import s from "./Alert.module.scss";

const Alert = ({
  bgColor,
  heading,
  inline,
  label,
  onClose,
  severity,
  textColor,
  variant,
}: AlertProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  let alertIcon;

  if (severity === "error") {
    alertIcon = <IoWarningOutline className={s.icon} />;
  } else if (severity === "warning") {
    alertIcon = <IoWarningOutline className={s.icon} />;
  } else if (severity === "info") {
    alertIcon = <IoInformationCircleOutline className={s.icon} />;
  } else if (severity === "success") {
    alertIcon = <IoCheckmarkCircleOutline className={s.icon} />;
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
      className={`${s.alert} ${variant === "flat" ? s.flat : s.pressed} `}
    >
      {alertIcon && alertIcon}
      {onClose && (
        <IoCloseOutline
          className={`${s.icon} ${s.close}`}
          onClick={() => onClose()}
        />
      )}
      <div className={`${s.content} ${inline ? s.inline : null}`}>
        <h4 className={s.heading}>{heading}</h4>
        <p className={s.label}>{label}</p>
      </div>
    </div>
  );
};

export default Alert;
