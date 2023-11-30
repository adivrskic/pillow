import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "Pillow UI/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeComponent = Template.bind({});
BadgeComponent.args = {
  label: 100,
  variant: "flat",
  bgColor: "#E4EBF5",
  textColor: "#6D5DFC",
};
