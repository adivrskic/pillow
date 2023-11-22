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
  children: (
    <div>
      Hello <button>Button</button>
    </div>
  ),
  variant: "flat",
  bgColor: "#f2f3f7",
  textColor: "#323232",
};
