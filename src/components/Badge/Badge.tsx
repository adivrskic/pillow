import React from "react";
import "./Badge.scss";

export interface BadgeProps {
  label: string;
  variant: string;
}

const Badge = ({ label, variant }: BadgeProps) => {
  let badgeVariant;

  if (variant === "flat") {
    badgeVariant = "pillow-alert--flat";
  } else if (variant === "pressed") {
    badgeVariant = "pillow-alert--pressed";
  } else {
    badgeVariant = "";
  }

  return <div className={`pillow-badge ${badgeVariant}`}>{label}</div>;
};

export default Badge;
