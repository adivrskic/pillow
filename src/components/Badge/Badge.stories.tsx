import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BadgeComponent.args = {
  label: "9+",
  variant: "flat",
};
