## React SSR using esbuild

This is to experiment bundling React SSR using esbuild. Aim is to use SSR without `loadable` and webpack dependency.

#### Experimented Features
- React SSR
- Code Splitting using React.lazy and React.Suspense
- Use `renderToPipeableStream` to support Suspense in server
- esbuild Mdx Loader

### To do

- styled-components integration