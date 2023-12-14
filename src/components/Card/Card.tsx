import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { CardProps } from "../../pillow.types";
import s from "./Card.module.scss";

const Card = ({
  bgColor,
  heading,
  imageAlt,
  imageSrc,
  text,
  textAlign,
  textColor,
  variant,
}: CardProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--card-bg-color" as string]: `${bgColor}`,
        ["--card-text-color" as string]: `${textColor}`,
        ["--card-top-shadow-color" as string]: `${topShadowColor}`,
        ["--card-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`${s.card} ${variant === "flat" ? s.flat : s.pressed} ${
        textAlign === "left" && s.left
      } ${textAlign === "center" && s.center} ${
        textAlign === "right" && s.right
      }`}
    >
      {imageSrc && <img className={s.image} src={imageSrc} alt={imageAlt} />}
      <h2 className={s.heading}>{heading}</h2>
      <p className={s.text}>{text}</p>
    </div>
  );
};

export default Card;
