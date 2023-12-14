import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardComponent.args = {
  bgColor: "#E4EBF5",
  heading: "Example",
  imageAlt: "Example image",
  imageSrc: "",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  textAlign: "center",
  textColor: "#6D5DFC",
  variant: "flat",
};
