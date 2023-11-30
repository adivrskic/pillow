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
  onClose: () => console.log("Closing"),
  bgColor: "#E4EBF5",
  textColor: "#6D5DFC",
};
