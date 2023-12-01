import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Shape from "./Shape";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Shape",
  component: Shape,
} as ComponentMeta<typeof Shape>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Shape> = (args) => <Shape {...args} />;

export const ShapeComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ShapeComponent.args = {
  width: 300,
  height: 300,
  round: true,
  variant: "flat",
  animate: true,
  bgColor: "#E4EBF5",
};
