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
  bgColor: "#E4EBF5",
  heading: "Success",
  label: "This is an example of a success alert",
  inline: false,
  onClose: () => console.log("Closing"),
  severity: "success",
  textColor: "#6D5DFC",
  variant: "flat",
};
