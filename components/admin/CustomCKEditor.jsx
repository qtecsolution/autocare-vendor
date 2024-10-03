'use client'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

function CustomCKEditor() {
    return (
        <CKEditor
            editor={ ClassicEditor }
            config={ {
                toolbar: {
                    items: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                },
                plugins: [
                    Bold, Essentials, Italic, Mention, Paragraph, Undo
                ],
                mention: { 
                    // Mention configuration
                },
                initialData: ''
            } }
        />
    );
}

export default CustomCKEditor;
