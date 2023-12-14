import React from "react";

export interface AlertProps {
  heading: string;
  label: string;
  severity: string;
  variant: string;
  onClose: () => void;
  bgColor: string;
  textColor: string;
}

export interface BadgeProps {
  label: string | number;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ButtonProps {
  disabled: boolean;
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  role: string;
  size: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface CardProps {
  heading: string;
  imageAlt: string;
  imageSrc: string;
  text: string;
  textAlign: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ChipProps {
  icon: string;
  label: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  direction: string;
  fullWidth: boolean;
  align: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  variant: string;
  size: string;
  bgColor: string;
  textColor: string;
}

export interface ListProps {
  header: string;
  label: string;
  listItems: React.ReactNode[];
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ShapeProps {
  width: number;
  height: number;
  round: boolean;
  animate: boolean;
  variant: string;
  bgColor: string;
}

export interface SpinnerProps {
  complete: boolean;
  variant: string;
  spinColor: string;
  bgColor: string;
}

export interface SwitchProps {
  checked: boolean;
  disabled: boolean;
  required: boolean;
  onChange: () => void;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface TextFieldProps {
  title: string;
  content: string;
  onTextChange: () => void;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ToastProps {
  title: string;
  duration: number;
  onClose: () => void;
  variant: string;
  bgColor: string;
  textColor: string;
}
