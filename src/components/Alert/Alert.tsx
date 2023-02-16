import React from "react";
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import "./Alert.scss";

export interface AlertProps {
  heading: string;
  label: string;
  severity: string;
  variant: string;
}

const Alert = ({ heading, label, severity, variant }: AlertProps) => {
  let alertVariant;

  if (variant === "flat") {
    alertVariant = "pillow-alert--flat";
  } else if (variant === "concave") {
    alertVariant = "pillow-alert--concave";
  } else if (variant === "convex") {
    alertVariant = "pillow-alert--convex";
  } else if (variant === "pressed") {
    alertVariant = "pillow-alert--pressed";
  } else {
    alertVariant = "";
  }

  let alertSeverity, alertIcon;
  if (severity === "error") {
    alertSeverity = "pillow-alert--error";
    alertIcon = <IoInformationCircleOutline />;
  } else if (severity === "warning") {
    alertSeverity = "pillow-alert--warning";
    alertIcon = <IoWarningOutline />;
  } else if (severity === "info") {
    alertSeverity = "pillow-alert--info";
    alertIcon = <IoInformationCircleOutline />;
  } else if (severity === "success") {
    alertSeverity = "pillow-alert--success";
    alertIcon = <IoCheckmarkCircleOutline />;
  } else {
    alertSeverity = "";
    alertIcon = null;
  }

  return (
    <div className={`pillow-alert ${alertVariant} ${alertSeverity}`}>
      {alertIcon && alertIcon}
      <div className="pillow-alert__content">
        <div className="pillow-alert__heading">{heading}</div>
        <div className="pillow-alert__label">{label}</div>
      </div>
    </div>
  );
};

export default Alert;
