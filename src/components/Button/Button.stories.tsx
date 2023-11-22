import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

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
  label: "Click Me",
  variant: "flat",
  size: "small",
  icon: "",
  role: "button",
  href: "",
  disabled: false,
  bgColor: "#f2f3f7",
  textColor: "#323232",
};
