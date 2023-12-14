import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "./List";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/List",
  component: List,
} as ComponentMeta<typeof List>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ListComponent.args = {
  bgColor: "#E4EBF5",
  header: "List",
  label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  listItems: [<p>List item 1</p>, <p>List item 2</p>, <p>List item 3</p>],
  textColor: "#6D5DFC",
  variant: "flat",
};
