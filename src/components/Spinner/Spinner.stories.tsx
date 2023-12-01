import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const SpinnerComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SpinnerComponent.args = {
  complete: false,
  variant: "flat",
  spinColor: "#6D5DFC",
  bgColor: "#E4EBF5",
};
