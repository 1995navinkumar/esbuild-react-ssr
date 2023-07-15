import * as esbuild from 'esbuild';
import mdx from '@mdx-js/esbuild';

const clientConfig = {
    entryPoints: ['./src/entryBrowser.js'],
    loader: { ".js": "jsx" },
    bundle: true,
    outdir: 'dist',
    plugins: [
        mdx(),
    ],
    format: 'esm',
    splitting: true,
    minify: true
}

const serverConfig = {
    entryPoints: ['./src/entryServer.js'],
    loader: { ".mjs": "jsx", ".js": "jsx" },
    bundle: true,
    outfile: 'dist/entryServer.js',
    platform: 'node',
    packages: 'external',
    plugins: [
        mdx(),
    ],
}

if (process.env.ENV === 'production') {
    console.log('prod build');
    await esbuild.build(clientConfig);
    await esbuild.build(serverConfig);
} else {
    console.log('dev server');
    let ctxClient = await esbuild.context(clientConfig);
    let ctxServer = await esbuild.context(serverConfig);
    await ctxClient.watch();
    await ctxServer.watch();
}