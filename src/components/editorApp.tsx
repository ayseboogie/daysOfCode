import { useState, useEffect } from "react";
import Editor from "./editor";
import styles from "./editor.module.css";
import cn from "classnames";

const EditorApp = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html lang="en">
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
        }, 200);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    return (
        <>
            <div className={cn("bg-zinc-500", styles.topPane)}>
                <Editor
                    className="px-2 py-3 md:w-1/3 md:pl-3 md:pr-2"
                    language="xml"
                    editorTitle="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    className="px-2 py-3 md:w-1/3 md:px-2"
                    language="css"
                    editorTitle="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    className="px-2 py-3 md:w-1/3 md:pl-1 md:pr-3"
                    language="javascript"
                    editorTitle="JS"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div style={{ height: "68vh" }}>
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                />
            </div>
        </>
    );
};

export default EditorApp;