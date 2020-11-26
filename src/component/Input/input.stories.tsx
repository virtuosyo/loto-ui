import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "./input";

const ControlledInput = () => {
  const [value, setValue] = useState("");
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const defaultInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      placeholder="placeholder"
      onChange={action("changed")}
    />
    <ControlledInput />
  </>
);
defaultInput.storyName = "Default Input";

export const disabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);
disabledInput.storyName = "Disabled Input";

export const iconInput = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);
iconInput.storyName = "Icon Input";

export const sizeInput = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);
sizeInput.storyName = "Size Input";

export const pendInput = () => (
  <>
    <Input
      style={{ width: "300px" }}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} defaultValue="google" append=".com" />
  </>
);
pendInput.storyName = "Pend Input";

const storySettings = {
  title: "Input component",
  component: Input,
};

export default storySettings;
