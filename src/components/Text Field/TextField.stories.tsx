import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from "./TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pillow UI/Text Field",
  component: TextField,
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const TextFieldComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextFieldComponent.args = {
  bgColor: "#E4EBF5",
  content: "",
  onTextChange: () => console.log("change"),
  textColor: "#6D5DFC",
  title: "Text Field Example",
  variant: "flat",
};
