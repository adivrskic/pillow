import React from "react";
import "./Spinner.scss";

export interface SpinnerProps {
  complete: boolean;
  variant: string;
}

const Spinner = ({ complete, variant }: SpinnerProps) => {
  if (complete) return null;

  let spinnerVariant;

  if (variant === "flat") {
    spinnerVariant = "pillow-spinner--flat";
  } else if (variant === "pressed") {
    spinnerVariant = "pillow-spinner--pressed";
  } else {
    spinnerVariant = "";
  }

  return (
    !complete && (
      <div className={`pillow-spinner ${spinnerVariant}`}>
        <div className="pillow-spinner__spinner"></div>
      </div>
    )
  );
};

export default Spinner;
