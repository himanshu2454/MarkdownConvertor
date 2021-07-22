import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { EditorContext } from "./Editorcontext";

export default function Output() {
  const { markdownText } = useContext(EditorContext);

  return (
    <div className="output">
      <div className="output-header">
        <p>
          Equivalent Markdown
          <a href="https://guides.github.com/features/mastering-markdown/">
            (Learn)
          </a>
        </p>
      </div>
      <div className="output-body">
        <ReactMarkdown remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
