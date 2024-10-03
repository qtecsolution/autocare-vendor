'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo, Image, ImageInsert, Heading, Link } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

function CustomCKEditor({ content, onContentChange }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content} // Initial content
      onChange={(event, editor) => {
        const data = editor.getData();
        onContentChange(data); // Update content
      }}
      config={{
        toolbar: {
          items: ['heading', 'bold', 'italic', 'link', 'image', 'imageInsert', 'undo', 'redo',],
        },
        plugins: [
          Heading, Bold, Essentials, Italic, Link, Mention, Paragraph, Undo, Image, ImageInsert,
        ],
        mention: {
          // Mention configuration
        },
        initialData: '',
      }}
      onReady={editor => {
        // Optionally set width/height directly
        editor.editing.view.change(writer => {
          writer.setStyle('height', '300px', editor.editing.view.document.getRoot());
        });
      }}
    />
  );
}

export default CustomCKEditor;
