import { action } from "@storybook/addon-actions";
import React from "react";
import { Upload, UploadFile } from "./upload";
import Icon from "../Icon/icon";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultFileList: UploadFile[] = [
  {
    uid: "123",
    size: 1234,
    name: "hello.md",
    status: "uploading",
    percent: 30,
  },
  { uid: "122", size: 1234, name: "xyz.md", status: "success", percent: 30 },
  { uid: "121", size: 1234, name: "eyiha.md", status: "error", percent: 30 },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert("file too big");
    return false;
  }
  return true;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.docx", { type: file.type });
  return Promise.resolve(newFile);
};
export const SimpleUpload = () => {
  return (
    <>
      <Upload
        // action="https://jsonplaceholder.typicode.com/posts/"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action("changed")}
        onRemove={action("removed")}
        name="fileName"
        drag
        // beforeUpload={checkFileSize}
        // data={{ key: "value" }}
        // header={{ "X-Powered-By": "loto-ui" }}
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br />
        <p>Drag file over to upload</p>
      </Upload>
    </>
  );
};

SimpleUpload.storyName = "Simple Upload";

const storySettings = {
  title: "Upload component",
  component: SimpleUpload,
};

export default storySettings;
