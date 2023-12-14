import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SwitchComponent.args = {
  bgColor: "#E4EBF5",
  checked: true,
  disabled: false,
  onChange: () => console.log("Changed"),
  required: true,
  textColor: "#6D5DFC",
  variant: "flat",
};
