export interface AlertProps {
  heading: string;
  label: string;
  severity: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface BadgeProps {
  label: string;
  variant: string;
  bgColor: string;
  textColor: string;
}

export interface ButtonProps {
  disabled: boolean;
  href: string;
  icon: string;
  label: string;
  onClick: () => void;
  role: string;
  size: string;
  variant: string;
  bgColor: string;
  textColor: string;
}
