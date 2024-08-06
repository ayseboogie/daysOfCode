import { Controlled as CodeMirror, IControlledCodeMirror } from 'react-codemirror2';
import React from "react";


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

let languageLoaded = false;
if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css");
    require("codemirror/mode/javascript/javascript");
    languageLoaded = true;
}

interface EditorProps {
    language: string;
    editorTitle: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

const Editor: React.FC<EditorProps> = ({ language, editorTitle, value, onChange, className }) => {
    const handleChange = (editor: IControlledCodeMirror, data: any, value: string) => {
        onChange(value);
    };

    return (
        <div className={className}>
            <div className="flex justify-between text-white rounded-t-lg py-2 pr-2 pl-4 bg-zinc-700">
                {editorTitle}
            </div>
            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className="grow rounded-b-lg overflow-hidden text-left"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "tomorrow-night-bright",
                    lineNumbers: true,
                }}
            />
        </div>
    );
};

export default Editor;