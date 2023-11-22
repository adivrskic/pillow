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
  heading: "Example",
  imageAlt: "Example image",
  imageSrc: "/public/bg.webp",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  variant: "flat",
  bgColor: "#f2f3f7",
  textColor: "#323232",
};
