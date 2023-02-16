import React from "react";
import "./Badge.scss";

export interface BadgeProps {
  content: string;
  variant: string;
}

const Badge = ({ content, variant }: BadgeProps) => {
  let badgeVariant;

  if (variant === "flat") {
    badgeVariant = "pillow-alert--flat";
  } else if (variant === "pressed") {
    badgeVariant = "pillow-alert--pressed";
  } else {
    badgeVariant = "";
  }

  return <div className={`pillow-badge ${badgeVariant}`}>{content}</div>;
};

export default Badge;
