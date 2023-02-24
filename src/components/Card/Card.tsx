import React from "react";
import "./Card.scss";

export interface CardProps {
  heading: string;
  imageAlt: string;
  imageSrc: string;
  text: string;
  variant: string;
}

const Card = ({ heading, imageAlt, imageSrc, text, variant }: CardProps) => {
  let cardVariant;

  if (variant === "flat") {
    cardVariant = "pillow-card--flat";
  } else if (variant === "pressed") {
    cardVariant = "pillow-card--pressed";
  } else {
    cardVariant = "";
  }

  return (
    <div className={`pillow-card ${cardVariant}`}>
      {imageSrc && (
        <img className="pillow-card__image" src={imageSrc} alt={imageAlt} />
      )}
      <h2 className="pillow-card__heading">{heading}</h2>
      <p className="pillow-card__text">{text}</p>
    </div>
  );
};

export default Card;
