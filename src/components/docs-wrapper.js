import { MDXProvider } from "@mdx-js/react";
import { Text, Box } from "@razorpay/blade/components";
import { BladeProvider } from '@razorpay/blade/components';
import { paymentTheme } from '@razorpay/blade/tokens';
import React, { useEffect } from "react";
import { contentRoutes } from '../content-routes.js'
import { HeaderContext } from "../HeaderProvider.js";

export default function DocsWrapper({ name }) {
    const AsyncComponent = contentRoutes[name];
    const components = ReactMdxComponents();
    const setMetaTags = React.useContext(HeaderContext);
    useEffect(() => {
        setMetaTags({ title: name });
    }, [name, setMetaTags])
    return <BladeProvider themeTokens={paymentTheme} colorScheme='light'>
        <Box flex={1}>
            <MDXProvider>
                <AsyncComponent components={components} />
            </MDXProvider>
        </Box>
    </BladeProvider>
}

function ReactMdxComponents() {
    return {

    };
}