import React from "react";
import "./List.scss";

export interface ListProps {
  header: string;
  label: string;
  listItems: React.ReactNode[];
  variant: string;
}

const List = ({ header, label, listItems, variant }: ListProps) => {
  let listItemVariant: string;

  if (variant === "flat") {
    listItemVariant = "pillow-list__list-item--flat";
  } else if (variant === "pressed") {
    listItemVariant = "pillow-list__list-item--pressed";
  } else {
    listItemVariant = "";
  }

  return (
    <div className={`pillow-list`}>
      <h2 className="pillow-list__header">{header}</h2>
      <p className="pillow-list__label">{label}</p>
      <ul className="pillow-list__list">
        {listItems.map((item, index) => (
          <li
            key={index}
            className={`pillow-list__list-item ${listItemVariant}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
