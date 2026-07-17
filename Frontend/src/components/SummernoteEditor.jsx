import React, { useEffect, useRef } from "react";

const SummernoteEditor = ({ value, onChange, placeholder, className, rows = 4 }) => {
    const textareaRef = useRef(null);
    const isUpdatingRef = useRef(false);
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    });

    useEffect(() => {
        const $textarea = window.$(textareaRef.current);

        isUpdatingRef.current = true;
        $textarea.summernote({
            placeholder: placeholder || "",
            tabsize: 2,
            height: rows * 40,
            toolbar: [
                ['font', ['bold', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'video']],
                ['view', ['fullscreen', 'codeview', 'help']]
            ],
            callbacks: {
                onChange: (contents) => {
                    if (!isUpdatingRef.current) {
                        onChangeRef.current(contents);
                    }
                }
            }
        });

        $textarea.summernote('code', value || '');
        isUpdatingRef.current = false;

        return () => {
            $textarea.summernote('destroy');
        };
    }, []);

    useEffect(() => {
        const $textarea = window.$(textareaRef.current);
        const currentCode = $textarea.summernote('code') || '';
        const normalizedValue = value || '';
        if (normalizedValue !== currentCode) {
            isUpdatingRef.current = true;
            $textarea.summernote('code', normalizedValue);
            isUpdatingRef.current = false;
        }
    }, [value]);

    return (
        <div className="w-full summernote-editor-container">
            <textarea ref={textareaRef} className={className} style={{ display: 'none' }} />
        </div>
    );
};

export default SummernoteEditor;
