
import React, { lazy } from 'react';

export const contentRoutes = {
    "sample.md" : lazy( () => import("./docs/routes/sample.md") ), "list.md" : lazy( () => import("./docs/routes/list.md") )
};

