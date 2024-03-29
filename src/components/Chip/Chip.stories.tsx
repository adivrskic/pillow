import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Chip from "./Chip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const ChipComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChipComponent.args = {
  bgColor: "#E4EBF5",
  label: "Chip Example",
  textColor: "#6D5DFC",
  variant: "flat",
};
