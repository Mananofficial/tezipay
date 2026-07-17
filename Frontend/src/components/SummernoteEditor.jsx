import React, { useEffect, useRef } from "react";

const SummernoteEditor = ({ value, onChange, placeholder, className, rows = 4 }) => {
    const textareaRef = useRef(null);
    const isUpdatingRef = useRef(false);

    // Always keep a ref to the LATEST onChange prop.
    // The Summernote callback is set up once on mount ([] deps), so without this
    // ref it would capture a stale closure of onChange from the first render —
    // when all state fields are still empty — causing every keystroke to wipe
    // the other fields back to their initial empty values.
    const onChangeRef = useRef(onChange);
    useEffect(() => {
        onChangeRef.current = onChange;
    }); // no deps → runs after every render, keeping the ref fresh

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
                        // Call through the ref so we always invoke the
                        // latest onChange prop, not the stale initial one.
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
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
