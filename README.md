## React SSR using esbuild

This is to experiment bundling React SSR using esbuild. Aim is to use SSR without `loadable` and webpack dependency.

#### Experimented Features
- React SSR
- Code Splitting using React.lazy and React.Suspense
- Use `renderToPipeableStream` to support Suspense in server
- esbuild Mdx Loader

### To do

- styled-components integration


### Setup

- git clone https://github.com/1995navinkumar/esbuild-react-ssr.git
- cd esbuild-react-ssr
- npm install
- Run `npm dev` and `npm serve` for watch mode
- Run `npm build` and `npm serve` for production
