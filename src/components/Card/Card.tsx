import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { CardProps } from "../../pillow.types";
import "./Card.scss";

const Card = ({
  heading,
  imageAlt,
  imageSrc,
  text,
  variant,
  bgColor,
  textColor,
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
      className={`pillow-card pillow-card--${variant}`}
    >
      {imageSrc !== "" && (
        <img className="pillow-card__image" src={imageSrc} alt={imageAlt} />
      )}
      <h2 className="pillow-card__heading">{heading}</h2>
      <p className="pillow-card__text">{text}</p>
    </div>
  );
};

export default Card;
