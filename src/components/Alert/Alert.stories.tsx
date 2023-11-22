import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Pillow UI/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertComponent = Template.bind({});
AlertComponent.args = {
  heading: "Success",
  label: "This is an example of a success alert",
  variant: "flat",
  severity: "success",
  bgColor: "#f2f3f7",
  textColor: "#323232",
};
