import fs from 'fs';
import React from "react";
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.mjs';
import App from './App.js';
import routes from "./routes.js";

function generatePages() {
    routes.forEach(route => {
        const { path } = route;
        fs.mkdirSync(`dist/${path}`, { recursive: true });
        const ws = fs.createWriteStream(`dist/${path}/index.html`);
        const { pipe } = renderToPipeableStream(
            getReactElement(`/${path}`),
            {
                onShellReady: () => {
                    pipe(ws);
                },
                bootstrapModules: ['/browser/entryBrowser.js']
            });
    })
}

function getReactElement(location) {
    const appElement = React.createElement(App, {}, null);
    const Router = React.createElement(StaticRouter, { location }, appElement);
    return Router;
}

generatePages();