import * as esbuild from 'esbuild';
import mdx from '@mdx-js/esbuild';
import { remarkPlugin } from './mdx-plugins/remark-plugins.mjs';

const mdxOptions = {
    format: 'mdx',
    mdxExtensions: ['.md'],
    providerImportSource: "@mdx-js/react",
    development: true,
    remarkPlugins: [
        remarkPlugin
    ]
}

// const clientConfig = {
//     entryPoints: ['./src/entryBrowser.js'],
//     loader: { ".js": "jsx" },
//     bundle: true,
//     outdir: 'dist',
//     plugins: [
//         mdx(mdxOptions),
//     ],
//     format: 'esm',
//     splitting: true,
// }

// const serverConfig = {
//     entryPoints: ['./src/entryServer.js'],
//     loader: { ".mjs": "jsx", ".js": "jsx" },
//     bundle: true,
//     outfile: 'dist/entryServer.js',
//     platform: 'node',
//     // packages: 'external',
//     // format: 'esm',
//     plugins: [
//         mdx(mdxOptions),
//     ],
// }

// if (process.env.ENV === 'production') {
//     console.log('prod build');
//     await esbuild.build(clientConfig);
//     await esbuild.build(serverConfig);
// } else {
//     let ctxClient = await esbuild.context(clientConfig);
//     let ctxServer = await esbuild.context(serverConfig);
//     await ctxClient.watch();
//     await ctxServer.watch();
//     console.log('watch mode started');

// }


/* ------------- */

const clientConfig = {
    entryPoints: ['./src/entryBrowser.js'],
    bundle: true,
    outdir: 'dist/browser',
    plugins: [
        mdx(mdxOptions),
    ],
    format: 'esm',
    splitting: true,
}



const serverConfig = {
    entryPoints: ['./src/generate-pages.mjs'],
    bundle: true,
    outfile: 'dist/server/generate-pages.js',
    platform: 'node',
    plugins: [
        mdx(mdxOptions),
    ],
}

await esbuild.build(clientConfig);
await esbuild.build(serverConfig);
