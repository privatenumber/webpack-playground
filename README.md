# 🤹‍♂️ Webpack playground

This repo contains a variety of examples that demonstrate different Webpack configurations and an evaluation of their outputs.


## ⛳️ Demos
<!-- demos:start -->
- [depend-on](/demos/depend-on)

	Webpack's depend-on feature

- [dll](/demos/dll)

	Splitting bundles with DLL to improve build-time

- [esbuild](/demos/esbuild)

	Blazing fast JS transpilation & minification with esbuild

- [filename-chunkhash-wp4](/demos/filename-chunkhash-wp4)

	Filename chunkhash using Webpack 4

- [filename-chunkhash-wp5](/demos/filename-chunkhash-wp5)

	Filename chunkhash using Webpack 5

- [filename-contenthash-wp4](/demos/filename-contenthash-wp4)

	Filename contenthash using Webpack 4

- [filename-contenthash-wp5](/demos/filename-contenthash-wp5)

	Filename contenthash using Webpack 5

- [filename-hash-wp4](/demos/filename-hash-wp4)

	Filename hash using Webpack 4

- [filename-hash-wp5](/demos/filename-hash-wp5)

	Filename hash using Webpack 5

- [library-targets](/demos/library-targets)

	See the different output formats Webpack supports

- [library-targets-externals](/demos/library-targets-externals)

	See how different library-targets externalize modules

- [magic-comments](/demos/magic-comments)

	See how Webpack magic comments influence code-splitting

- [module-output](/demos/module-output)

	Webpack's experimental ESM module output

- [split-chunks-all](/demos/split-chunks-all)

	Webpack's Split Chunks on all chunks

- [split-chunks-all-dynamic-import](/demos/split-chunks-all-dynamic-import)

	Webpack's Split Chunks on all chunks w/ dynamic import

- [split-chunks-individual-dependency-vendors](/demos/split-chunks-individual-dependency-vendors)

	Webpack's Split Chunks to individually chunk each node module

- [tree-shaking-lodash-babel-plugin](/demos/tree-shaking-lodash-babel-plugin)

	Tree-shaking performance using babel-plugin-lodash

- [tree-shaking-lodash-babel-webpack-plugin](/demos/tree-shaking-lodash-babel-webpack-plugin)

	Tree-shaking performance using babel-plugin-lodash & lodash-webpack-plugin

- [tree-shaking-lodash-es](/demos/tree-shaking-lodash-es)

	Tree-shaking performance with lodash-es

- [tree-shaking-lodash-es-wp4](/demos/tree-shaking-lodash-es-wp4)

	Tree-shaking performance with lodash-es using Webpack 4

- [tree-shaking-lodash-path](/demos/tree-shaking-lodash-path)

	Bundling performance importing specific lodash utils
<!-- demos:end -->

## 🛠 Contributing

### Setup
```sh
$ nvm i  # Use appropriate Node.js version via http://nvm.sh
$ pnpm i --frozen-lockfile # Install dependencies using pnpm
```

### Running builds

#### Run all package builds
```sh
$ pnpm run -r build
```

#### Run build in a specific package
```sh
$ pnpm run -C demos/<PACKAGE_NAME> build
```
