import fs from 'fs';
import { globSync } from 'glob';

function getAllFiles() {
    return globSync("src/docs/routes/**/*.md")
}

function generateRoutes() {
    const mdFiles = getAllFiles();
    return mdFiles
        .map(file => {
            const path = file
                .replace("src/docs/routes/", "")
                .replace("/index.md", '');

            const src = file.replace("src", ".");
            return `{
                path : '${path}',
                element : <DocsWrapper name="${path}" />
            }`
        }).join(", ");
}

function generateAsyncComponents() {
    const mdFiles = getAllFiles();
    return mdFiles
        .map(file => {
            const path = file
                .replace("src/docs/routes/", "")
                .replace("/index.md", '');
            const src = file.replace("src", ".");
            return `"${path}" : lazy( () => import("${src}") )`
        })
        .join(", ")
}

const routes = generateRoutes();

fs.writeFileSync('src/routes.tsx', `
import React, { lazy } from 'react';
import DocsWrapper from './components/docs-wrapper';

export default [
    ${routes}
];

`)

const asyncComponents = generateAsyncComponents();

fs.writeFileSync('src/content-routes.js', `
import React, { lazy } from 'react';

export const contentRoutes = {
    ${asyncComponents}
};

`)