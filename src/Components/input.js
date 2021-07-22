import React, { useContext } from "react";
import { EditorContext } from "./Editorcontext";

export default function Input() {
  const { markdownText, setMarkdownText } = useContext(EditorContext);

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setMarkdownText(newValue);
  };

  return (
    <div className="input">
      <div className="input-header">
        <p>Raw Input</p>
      </div>
      <div className="input-body">
        <textarea
          className="raw-input"
          value={markdownText}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
