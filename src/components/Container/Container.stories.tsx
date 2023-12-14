import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from "./Container";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const ContainerComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ContainerComponent.args = {
  align: "left",
  bgColor: "#E4EBF5",
  children: (
    <>
      <p>Hello</p>
      <button>Button</button>
    </>
  ),
  direction: "column",
  fullWidth: false,
  textColor: "#6D5DFC",
  variant: "flat",
};
