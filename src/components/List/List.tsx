import React from "react";
import "./List.scss";

export interface ListProps {
  header: string;
  label: string;
  listItems: [];
  variant: string;
}

const List = ({ header, label, listItems, variant }: ListProps) => {
  let listItemVariant;

  if (variant === "flat") {
    listItemVariant = "pillow-chip--flat";
  } else if (variant === "pressed") {
    listItemVariant = "pillow-chip--pressed";
  } else {
    listItemVariant = "";
  }

  return (
    <div className={`pillow-list`}>
      <h2>{header}</h2>
      <p>{label}</p>
      <ul>
        {listItems.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
