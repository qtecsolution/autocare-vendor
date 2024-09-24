'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false, // Disable server-side rendering for ReactQuill
});

const CustomQuillEditor = ({ editorId, toolbarId, placeholder, content, onContentChange }) => {

  const handleEditorChange = (value) => {
    if (onContentChange) {
      onContentChange(value); // Notify parent component about content change
    }
  };

  return (
    <div className="container px-5 pb-3">
      <ReactQuill
        style={{ minHeight: '300px' }}
        value={content} // Use content from props
        onChange={handleEditorChange} // Notify parent about changes
        modules={{
          toolbar: {
            container: [
              ['undo', 'redo'],
              ['bold', 'italic', 'underline'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['link'],
              [{ header: [1, 2, 3, false] }],
            ],
          },
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true,
          },
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'list',
          'bullet',
          'link',
          'undo',
          'redo',
        ]}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomQuillEditor;
