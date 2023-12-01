import React from "react";
import { getColor } from "../../helpers";
import { luminosity } from "../../constants";
import { ShapeProps } from "../../pillow.types";
import "./Shape.scss";

const Shape = ({
  width,
  height,
  round,
  animate,
  variant,
  bgColor,
}: ShapeProps) => {
  const topShadowColor = getColor(bgColor, -luminosity);
  const bottomShadowColor = getColor(bgColor, luminosity);

  const styles = {
    ["--shape-bg-color" as string]: bgColor,
    ["--shape-top-shadow-color" as string]: topShadowColor,
    ["--shape-bottom-shadow-color" as string]: bottomShadowColor,
    ["--shape-width" as string]: width + "px",
    ["--shape-height" as string]: height + "px",
  };

  return (
    <div
      style={styles}
      className={`pillow-shape  pillow-shape--${variant} ${
        animate ? "pillow-shape--animate" : ""
      } ${round ? "pillow-shape--round" : ""}`}
    ></div>
  );
};

export default Shape;
