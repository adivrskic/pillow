import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ListProps } from "../../pillow.types";
import "./List.scss";

const List = ({
  header,
  label,
  listItems,
  variant,
  bgColor,
  textColor,
}: ListProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return (
    <div
      style={{
        ["--list-item-bg-color" as string]: `${bgColor}`,
        ["--list-item-text-color" as string]: `${textColor}`,
        ["--list-item-top-shadow-color" as string]: `${topShadowColor}`,
        ["--list-item-bottom-shadow-color" as string]: `${bottomShadowColor}`,
      }}
      className={`pillow-list pillow-list--${variant}`}
    >
      <h2 className="pillow-list__header">{header}</h2>
      <p className="pillow-list__label">{label}</p>
      <ul
        style={{
          ["--list-item-bg-color" as string]: `${bgColor}`,
          ["--list-item-text-color" as string]: `${textColor}`,
          ["--list-item-top-shadow-color" as string]: `${topShadowColor}`,
          ["--list-item-bottom-shadow-color" as string]: `${bottomShadowColor}`,
        }}
        className={`pillow-list__list pillow-list__list--${variant}`}
      >
        {listItems.map((item, index) => (
          <li key={index} className="pillow-list__list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
