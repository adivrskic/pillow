import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Icon Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const IconButtonComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IconButtonComponent.args = {
  icon: <IoCheckmarkCircleOutline />,
  variant: "flat",
  size: "medium",
  bgColor: "#E4EBF5",
  textColor: "#6D5DFC",
};
