import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { TextFieldProps } from "../../pillow.types";
import "./TextField.scss";

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
      className={`pillow-textfield pillow-textfield--${variant}`}
    >
      <h2 className="pillow-textfield__title">{title}</h2>
      <textarea
        style={style}
        className={`pillow-textfield__textarea pillow-textfield--${variant}`}
        onChange={(e) => onTextChange}
      >
        {content}
      </textarea>
    </div>
  );
};

export default TextField;
