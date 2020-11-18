import React from "react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
import { themes } from "@storybook/theming";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

export const decorators = [
  (Story: () => React.ReactNode) => (
    <div style={wrapperStyle}>
      <h3>组件演示</h3>
      {Story()}
    </div>
  ),
  withInfo,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  info: { inline: true, header: false },
}; 
