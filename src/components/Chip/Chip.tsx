import React, { useState } from "react";
import "./Chip.scss";

export interface ChipProps {
  icon: React.ReactNode;
  label: string;
  variant: string;
}

const Chip = ({ icon, label, variant }: ChipProps) => {
  let chipVariant;

  if (variant === "flat") {
    chipVariant = "pillow-chip--flat";
  } else if (variant === "pressed") {
    chipVariant = "pillow-chip--pressed";
  } else {
    chipVariant = "";
  }

  return (
    <div className={`pillow-chip ${chipVariant}`}>
      {icon && icon}
      {label}
    </div>
  );
};

export default Chip;
