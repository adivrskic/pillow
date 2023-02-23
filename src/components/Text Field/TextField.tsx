import React from "react";
import "./TextField.scss";

export interface TextFieldProps {
  title: string;
  content: string;
  onTextChange: () => void;
  variant: string;
}

const TextField = ({
  title,
  content,
  onTextChange,
  variant,
}: TextFieldProps) => {
  let textFieldVariant;

  if (variant === "flat") {
    textFieldVariant = "pillow-textfield--flat";
  } else if (variant === "pressed") {
    textFieldVariant = "pillow-textfield--pressed";
  } else {
    textFieldVariant = "";
  }

  return (
    <div className={`pillow-textfield ${textFieldVariant}`}>
      <h2 className="pillow-textfield__title">{title}</h2>
      <textarea
        className={`pillow-textfield__textarea ${textFieldVariant}`}
        onChange={(e) => onTextChange}
      >
        {content}
      </textarea>
    </div>
  );
};

export default TextField;
