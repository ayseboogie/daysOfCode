import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';
import { useRouter } from 'next/router';
import React from "react";
import CodeEditor from "@/components/editorApp";

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

            <CodeEditor />
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

