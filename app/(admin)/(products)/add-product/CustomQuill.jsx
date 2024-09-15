'use client'
import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomQuillEditor = ({ editorId, toolbarId, placeholder }) => {
  const quillRef = useRef(null);

  const undo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.undo();
  };

  const redo = () => {
    const editor = quillRef.current.getEditor();
    editor.history.redo();
  };

  return (
    <div>
      <div id={toolbarId}>
        <button type="button" onClick={undo}>
          Undo
        </button>
        <button type="button" onClick={redo}>
          Redo
        </button>
      </div>
      <ReactQuill
        ref={quillRef}
        placeholder={placeholder}
        modules={{
          toolbar: {
            container: `#${toolbarId}`,
            handlers: {
              undo: undo,
              redo: redo,
            },
          },
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true,
          },
        }}
        theme="snow"
      />
    </div>
  );
};

export default CustomQuillEditor;
