import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const AlertComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlertComponent.args = {
  heading: "Success",
  label: "This is an example of a success alert",
  variant: "flat",
  severity: "success",
};
