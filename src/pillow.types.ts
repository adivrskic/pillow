import React from "react";

export interface AlertProps {
  bgColor: string;
  heading: string;
  inline: boolean;
  label: string;
  onClose: () => void;
  severity: string;
  textColor: string;
  variant: string;
}

export interface BadgeProps {
  bgColor: string;
  label: string | number;
  textColor: string;
  variant: string;
}

export interface ButtonProps {
  bgColor: string;
  disabled: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  role: string;
  size: string;
  textColor: string;
  variant: string;
}

export interface CardProps {
  bgColor: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  text: string;
  textAlign: string;
  textColor: string;
  variant: string;
}

export interface ChipProps {
  bgColor: string;
  icon: string;
  label: string;
  textColor: string;
  variant: string;
}

export interface ContainerProps {
  align: string;
  bgColor: string;
  children: React.ReactNode;
  direction: string;
  fullWidth: boolean;
  textColor: string;
  variant: string;
}

export interface IconButtonProps {
  bgColor: string;
  icon: React.ReactNode;
  size: string;
  textColor: string;
  variant: string;
}

export interface ListProps {
  bgColor: string;
  header: string;
  label: string;
  listItems: React.ReactNode[];
  textColor: string;
  variant: string;
}

export interface ShapeProps {
  animate: boolean;
  bgColor: string;
  height: number;
  round: boolean;
  variant: string;
  width: number;
}

export interface SpinnerProps {
  bgColor: string;
  complete: boolean;
  spinColor: string;
  variant: string;
}

export interface SwitchProps {
  bgColor: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
  required: boolean;
  textColor: string;
  variant: string;
}

export interface TextFieldProps {
  bgColor: string;
  content: string;
  onTextChange: () => void;
  textColor: string;
  title: string;
  variant: string;
}

export interface ToastProps {
  bgColor: string;
  duration: number;
  onClose: () => void;
  textColor: string;
  title: string;
  variant: string;
}
