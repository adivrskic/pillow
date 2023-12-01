import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ToastProps } from "../../pillow.types";
import "./Toast.scss";

const Toast = ({
  title,
  duration,
  onClose,
  variant,
  bgColor,
  textColor,
}: ToastProps) => {
  const [active, setActive] = useState(true);
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  const style = {
    ["--toast-bg-color" as string]: `${bgColor}`,
    ["--toast-text-color" as string]: `${textColor}`,
    ["--toast-top-shadow-color" as string]: `${topShadowColor}`,
    ["--toast-bottom-shadow-color" as string]: `${bottomShadowColor}`,
  };

  const handleClose = () => {
    onClose();
    setActive(false);
  };

  if (duration) {
    setTimeout(() => {
      setActive(false);
    }, duration * 1000);
  }

  if (!active) return null;

  return (
    <div style={style} className={`pillow-toast pillow-toast--${variant}`}>
      <p className="pillow-toast__title">{title}</p>
      <IoCloseOutline
        className="pillow-toast__close"
        onClick={() => handleClose()}
      />
    </div>
  );
};

export default Toast;
