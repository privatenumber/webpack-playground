# 🤹‍♂️ Webpack playground

This repo contains a variety of examples that demonstrate different Webpack configurations and an evaluation of their outputs.


## ⛳️ Demos
<!-- demos:start -->
### [dll](/demos/dll)
Splitting bundles with DLL to improve build-time

### [esbuild](/demos/esbuild)
Blazing fast JS transpilation & minification with esbuild

### [library-targets](/demos/library-targets)
See the different output formats Webpack supports

### [library-targets-externals](/demos/library-targets-externals)
See how different library-targets externalize modules

### [magic-comments](/demos/magic-comments)
See how Webpack magic comments influence code-splitting

### [module-output](/demos/module-output)
Webpack's experimental ESM module output

### [tree-shaking-lodash-babel-plugin](/demos/tree-shaking-lodash-babel-plugin)
Tree-shaking performance using babel-plugin-lodash

### [tree-shaking-lodash-es](/demos/tree-shaking-lodash-es)
Tree-shaking performance with lodash-es

### [tree-shaking-lodash-es-wp-4](/demos/tree-shaking-lodash-es-wp-4)
Tree-shaking performance with lodash-es using Webpack 4

### [tree-shaking-lodash-path](/demos/tree-shaking-lodash-path)
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
