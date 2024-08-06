import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import React from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import Bounded from "@/components/Bounded";

interface Props {
    readmeContent: string;
}

const DayPage: React.FC<Props> = ({ readmeContent }) => {
    const router = useRouter();
    const { day } = router.query;

    return (
        <div>
            <h1>{day}</h1>
            <h2>README</h2>
            <pre>{readmeContent}</pre>

            <Bounded size="small">
            <div className="w-1/8">
            <CodeMirror
                value='<h1>I ♥ react-codemirror2</h1>'
                options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true
                }}
                cursor={{
                    line: 5,
                    ch: 10
                }}
                onChange={(editor, data, value) => {
                }}
            />
            </div>
            </Bounded>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const { day } = params as { day: string };
    const readmePath = path.join(process.cwd(), 'public', day, 'README.md');
    let readmeContent = '';

    try {
        readmeContent = fs.readFileSync(readmePath, 'utf-8');
    } catch (err) {
        readmeContent = 'README.md not found';
    }

    return {
        props: {
            readmeContent,
        },
    };
};

export default DayPage;

