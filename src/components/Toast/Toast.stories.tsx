import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Toast from "./Toast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const ToastComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ToastComponent.args = {
  title: "Text Field Example",
  content: "",
  onTextChange: () => console.log("change"),
  variant: "flat",
  bgColor: "#E4EBF5",
  textColor: "#6D5DFC",
};
