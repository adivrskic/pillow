import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonComponent.args = {
  bgColor: "#E4EBF5",
  disabled: false,
  href: "",
  icon: <IoCheckmarkCircleOutline />,
  label: "Click Me",
  role: "button",
  size: "small",
  textColor: "#6D5DFC",
  variant: "flat",
};
