import React, { useState } from "react";
import "./Chip.scss";

export interface ChipProps {
  deletable: boolean | null;
  icon: React.ReactNode;
  label: string;
  variant: string;
}

const Chip = ({ deletable, icon, label, variant }: ChipProps) => {
  const [deleted, setDeleted] = useState(false);

  let chipVariant;

  if (variant === "flat") {
    chipVariant = "pillow-chip--flat";
  } else if (variant === "pressed") {
    chipVariant = "pillow-chip--pressed";
  } else {
    chipVariant = "";
  }

  if (deleted) return null;

  return (
    !deleted && (
      <div
        className={`pillow-chip ${chipVariant}`}
        onClick={deletable ? () => setDeleted(true) : undefined}
      >
        {icon && icon}
        {label}
      </div>
    )
  );
};

export default Chip;
