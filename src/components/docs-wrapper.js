import React from "react";
import { contentRoutes } from '../content-routes.js'

export default function DocsWrapper({ name }) {
    const AsyncComponent = contentRoutes[name];
    return <div style={{ flex: 1 }}>
        <AsyncComponent />
    </div>
}