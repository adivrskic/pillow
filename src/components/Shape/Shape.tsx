import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ShapeProps } from "../../pillow.types";
import "./Shape.scss";

const Shape = ({ bgColor }: ShapeProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  return <div></div>;
};

export default Shape;
