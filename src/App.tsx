import React, { Suspense, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import appRoutes from "./routes";
import { Helmet } from 'react-helmet';
import { HeaderContext } from "./HeaderProvider";

export default function App() {
    const [metaTags, setMetaTags] = React.useState({ title: "My App" });
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="/styles.css"></link>
                <link rel="icon" type="image/x-icon" href="/scorpion.png"></link>
                <title>My App</title>
            </head>
            <body>
                <HeaderContext.Provider value={setMetaTags}>
                    <div id="root">
                        <div style={{ display: 'flex', height: "100vh" }}>
                            <RenderLinks appRoutes={appRoutes} />
                            <Head metaTags={metaTags} />
                            <Suspense fallback={<div>Loading...</div>}>
                                <Routes>
                                    {appRoutes.map(routeProps => <Route key={routeProps.path} {...routeProps} />)}
                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </HeaderContext.Provider>
            </body>
        </html>
    );
}

function RenderLinks({ appRoutes }) {
    return <section style={{ display: 'flex', gap: '16px', flexDirection: 'column', minWidth: '400px', maxWidth: '400px', overflow: 'scroll', borderRight: "1px solid #dedede" }}>
        {appRoutes.map(routeProps => <Link key={routeProps.path} to={routeProps.path}>{routeProps.path}</Link>)}
    </section>
}


function Head({ metaTags }) {
    return <Helmet>
        <title>{metaTags.title}</title>
    </Helmet>
}