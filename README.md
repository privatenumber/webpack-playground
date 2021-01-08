# 🤹‍♂️ Webpack playground

This repo contains a variety of examples that demonstrate different Webpack configurations and an evaluation of their outputs.


## ⛳️ Demos
<!-- demos:start -->
- [dll](/demos/dll): Webpack config demos
- [esbuild](/demos/esbuild): Webpack config demos
- [externals](/demos/externals): Webpack config demos
- [library-targets](/demos/library-targets): Webpack config demos
- [magic-comments](/demos/magic-comments): Webpack config demos
- [module-output](/demos/module-output): Webpack config demos
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
$ pnpm run -C packages/<PACKAGE_NAME> build
```
