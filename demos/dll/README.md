# DLL (Dynamic-link Library)

Using the [DLLPlugin](https://webpack.js.org/plugins/dll-plugin/) plugin to split up a build to by app/vendor so that app builds are not re-compiling static dependencies. Instead, the app externalizes the dependencies so that they're imported at run-time.
