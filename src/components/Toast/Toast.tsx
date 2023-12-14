import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ToastProps } from "../../pillow.types";
import s from "./Toast.module.scss";

const Toast = ({
  title,
  duration,
  onClose,
  variant,
  bgColor,
  textColor,
}: ToastProps) => {
  let active = true;
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  const style = {
    ["--toast-bg-color" as string]: `${bgColor}`,
    ["--toast-text-color" as string]: `${textColor}`,
    ["--toast-top-shadow-color" as string]: `${topShadowColor}`,
    ["--toast-bottom-shadow-color" as string]: `${bottomShadowColor}`,
  };

  const handleClose = () => {
    active = false;
    onClose();
  };

  if (duration) {
    setTimeout(() => {
      active = false;
    }, duration * 1000);
  }

  if (!active) return null;

  return (
    <div
      style={style}
      className={`${s.toast} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      <p className={s.title}>{title}</p>
      <IoCloseOutline className={s.close} onClick={() => handleClose()} />
    </div>
  );
};

export default Toast;
