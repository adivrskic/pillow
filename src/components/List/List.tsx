import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ListProps } from "../../pillow.types";
import s from "./List.module.scss";

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
      className={`${s.list} ${variant === "flat" ? s.flat : s.pressed}`}
    >
      <h2 className={s.header}>{header}</h2>
      <p className={s.label}>{label}</p>
      <ul
        style={{
          ["--list-item-bg-color" as string]: `${bgColor}`,
          ["--list-item-text-color" as string]: `${textColor}`,
          ["--list-item-top-shadow-color" as string]: `${topShadowColor}`,
          ["--list-item-bottom-shadow-color" as string]: `${bottomShadowColor}`,
        }}
        className={`${s.ul} ${variant === "flat" ? s.flat : s.pressed}`}
      >
        {listItems.map((item, index) => (
          <li key={index} className={s.li}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
