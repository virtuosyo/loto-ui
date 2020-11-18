import React from "react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

export const defaultButton = () => (
  <Button onClick={action("click")}>default button</Button>
);
defaultButton.storyName = "Default Button";

export const smallSize = () => <Button size="sm">small button</Button>;
smallSize.storyName = "Small Button";

export const largeSize = () => <Button size="lg">large button</Button>;
largeSize.storyName = "Large Button";

export const primaryBtn = () => (
  <Button btnType="primary">primary button</Button>
);
primaryBtn.storyName = "Primary Button";

export const dangerBtn = () => <Button btnType="danger">danger button</Button>;
dangerBtn.storyName = "Danger Button";

export const linkBtn = () => (
  <Button btnType="link" href="https://google.com">
    link button
  </Button>
);
linkBtn.storyName = "Link Button";

const storySettings = {
  title: "Button Component",
  component: Button,
};

export default storySettings;
