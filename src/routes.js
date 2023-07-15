
import React, { lazy } from 'react';
import DocsWrapper from './components/docs-wrapper';

export default [
    {
                path : 'sample.md',
                element : <DocsWrapper name="sample.md" />
            }, {
                path : 'list.md',
                element : <DocsWrapper name="list.md" />
            }
];

