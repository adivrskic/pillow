import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { TextFieldProps } from "../../pillow.types";
import s from "./TextField.module.scss";

const TextField = ({
  title,
  content,
  onTextChange,
  variant,
  bgColor,
  textColor,
}: TextFieldProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);
  const style = {
    ["--textfield-bg-color" as string]: `${bgColor}`,
    ["--textfield-text-color" as string]: `${textColor}`,
    ["--textfield-top-shadow-color" as string]: `${topShadowColor}`,
    ["--textfield-bottom-shadow-color" as string]: `${bottomShadowColor}`,
  };
  return (
    <div
      style={style}
      className={`${s.textfield} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      <h2 className={s.title}>{title}</h2>
      <textarea
        style={style}
        className={`${s.textarea} ${variant === "flat" ? s.flat : s.pressed}`}
        onChange={(e) => onTextChange}
      >
        {content}
      </textarea>
    </div>
  );
};

export default TextField;
