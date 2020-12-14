import React from "react";
import "../src/styles/index.scss";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { themes } from "@storybook/theming";

library.add(fas)

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
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  info: { inline: true, header: false },
};
