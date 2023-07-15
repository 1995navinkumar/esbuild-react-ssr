import express from 'express';
import compression from 'compression'
import React from "react";
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

app.use(compression());

app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/*', async (req, res) => {
    console.log(`render from server ${req.url}`);

    const { pipe } = renderToPipeableStream(
        <StaticRouter location={req.url}>
            <App req={req} />
        </StaticRouter>,
        {
            onShellReady: () => {
                res.setHeader('content-type', 'text/html');
                pipe(res);
            },
            bootstrapModules: ['/entryBrowser.js']
        });
});


const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});