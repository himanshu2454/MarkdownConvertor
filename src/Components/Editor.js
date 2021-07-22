import React, { useState } from "react";
import Input from "./input";
import Output from "./output";
import { EditorContext } from "./Editorcontext";

export default function Editor() {
  //Markdown Text State
  const [markdownText, setMarkdownText] = useState("");
  //Context Value
  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <div className="editor">
        <Input />
        <Output />
      </div>
    </EditorContext.Provider>
  );
}
