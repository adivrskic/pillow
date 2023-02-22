import React from "react";
import "./Container.scss";

export interface ContainerProps {
  children: React.ReactNode;
  variant: string;
}

const Container = ({ children, variant }: ContainerProps) => {
  let containerVariant;

  if (variant === "flat") {
    containerVariant = "pillow-chip--flat";
  } else if (variant === "pressed") {
    containerVariant = "pillow-chip--pressed";
  } else {
    containerVariant = "";
  }

  return (
    <div className={`pillow-container ${containerVariant}`}>{children}</div>
  );
};

export default Container;
