export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "pillow",
    values: [
      {
        name: "pillow",
        value: "#E4EBF5",
      },
      {
        name: "white",
        value: "#fff",
      },
    ],
  },
};
