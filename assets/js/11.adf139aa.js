(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{199:function(e,t,r){"use strict";r.r(t);var n=r(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The default Kalisio web application template is based on the "),r("a",{attrs:{href:"https://github.com/quasarframework/quasar-wrapper-feathersjs-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar wrapper for Feathers"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Then point your browser to "),r("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8080"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),r("p",[e._v("Then point your browser to "),r("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8081"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("From the root or backend "),r("code",[e._v("api")]),e._v(" folder run the server-side tests : "),r("code",[e._v("$ yarn/npm run test:server")]),e._v(" or "),r("code",[e._v("$ yarn/npm run test")]),e._v("\nThis will lint and fix issues in the code according to "),r("a",{attrs:{href:"https://github.com/feross/standard",target:"_blank",rel:"noopener noreferrer"}},[e._v("JS standard"),r("OutboundLink")],1),e._v(", then execute tests using "),r("a",{attrs:{href:"https://mochajs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mocha"),r("OutboundLink")],1),e._v(" and compute code coverage using "),r("a",{attrs:{href:"https://istanbul.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Istanbul"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("From the root folder run the client-side tests : "),r("code",[e._v("yarn/npm run test:client")]),e._v(". This will build the client, launch the server then execute tests using "),r("a",{attrs:{href:"https://github.com/DevExpress/testcafe",target:"_blank",rel:"noopener noreferrer"}},[e._v("TestCafé"),r("OutboundLink")],1),e._v(". If you already have a built app and a running server you could simply do this to launch TestCafé only: "),r("code",[e._v("$ yarn/npm run cafe")])]),e._v(" "),r("p",[e._v("In development mode, you can tell TestCafé to run a given fixture or a given test:")]),e._v(" "),e._m(12),e._m(13),e._v(" "),r("p",[e._v("Use "),r("a",{attrs:{href:"https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),r("OutboundLink")],1),e._v(", look at this "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=Xb_0awoShR8",target:"_blank",rel:"noopener noreferrer"}},[e._v("tutorial video"),r("OutboundLink")],1),e._v(". Usually you simply have to open "),r("code",[e._v("chrome://inspect")]),e._v(" in the Chrome URL.")]),e._v(" "),e._m(14),e._v(" "),r("p",[e._v("If you want to debug replicas you can use the following environment variables to launch two instances of your apps:")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),r("p",[r("a",{attrs:{href:"http://quasar-framework.org/guide/Cordova-wrapper.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar guide"),r("OutboundLink")],1),e._v(" might help.")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("Information about the "),r("a",{attrs:{href:"https://developer.android.com/studio/run/emulator-networking.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Android Emulator Networking"),r("OutboundLink")],1),e._v(" might be useful.")]),e._v(" "),e._m(19),e._v(" "),r("ul",[r("li",[e._v("use http://10.0.2.2:8081 in the emulator which is an alias to host loopback interface")]),e._v(" "),e._m(20),e._v(" "),r("li",[e._v("use "),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/remote-debugging/local-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("port forwarding"),r("OutboundLink")],1)])]),e._v(" "),e._m(21),e._v(" "),r("p",[e._v("Build the app (from project folder):")]),e._v(" "),e._m(22),e._m(23),e._v(" "),r("p",[e._v("Run the app (from project folder):")]),e._v(" "),e._m(24),r("p",[e._v("If no device is connected this should launch the emulator, otherwise this should use your device.")]),e._v(" "),r("blockquote",[r("p",[e._v("Check that the "),r("a",{attrs:{href:"https://developer.android.com/studio/command-line/adb.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("adb")]),e._v(" daemon"),r("OutboundLink")],1),e._v(" is running and that you authorized USB debug on your device. Use "),r("code",[e._v("adb devices")]),e._v(" to check if your device is here, if you see it in "),r("code",[e._v("unauthorised")]),e._v(" state uncheck/check again the USB debug option on your device.")])]),e._v(" "),e._m(25),e._v(" "),r("p",[e._v("Use "),r("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/remote-debugging/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),r("OutboundLink")],1),e._v(" for the WebView. If you want to also get native errors without running Android Studio use "),r("a",{attrs:{href:"https://ourcodeworld.com/articles/read/295/how-to-debug-java-code-in-a-Cordova-android-application-from-your-device-using-adb-in-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("logcat"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(26),e._v(" "),r("p",[e._v("It does exist a couple of solutions to generate it for your app:")]),e._v(" "),e._m(27),e._v(" "),r("p",[e._v("You will find the example model icon/splash in "),r("em",[e._v("Cordova/model")]),e._v(" so that running https://github.com/eberlitz/splashicon-generator in the "),r("em",[e._v("Cordova")]),e._v(" directory should work. "),r("strong",[e._v("Under windows")]),e._v(" take care to "),r("a",{attrs:{href:"https://github.com/eberlitz/splashicon-generator/issues/23",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(28),e._v(" "),r("p",[e._v("We rely on a bunch of Cordova plugins so it might be useful to refer to their specific issues:")]),e._v(" "),e._m(29),e._v(" "),r("p",[r("strong",[e._v("The Crosswalk project seems to be "),r("a",{attrs:{href:"https://crosswalk-project.org/blog/crosswalk-final-release.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("discontinued"),r("OutboundLink")],1),e._v(", as a consequence there are some issues with recent Cordova versions like "),r("a",{attrs:{href:"https://github.com/apache/Cordova-android/pull/417",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),r("OutboundLink")],1),e._v(". We will probably drop it soon.")])]),e._v(" "),e._m(30),e._v(" "),r("p",[e._v("Kalisio modules/plugins are "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/creating-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers plugins"),r("OutboundLink")],1),e._v(", so you will find most of the required information in the linked Feathers documentation. Typically for development you will do the following for each required plugins so that the module is re-compiled on each file change:")]),e._v(" "),e._m(31),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"develop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#develop","aria-hidden":"true"}},[this._v("#")]),this._v(" Develop")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"web-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Web app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-for-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-for-development","aria-hidden":"true"}},[this._v("#")]),this._v(" Running for development")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Run the frontend Quasar app (from root project folder): "),t("code",[this._v("$ quasar dev")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then from the backend "),t("code",[this._v("api")]),this._v(" folder run the server-side Feathers app: "),t("code",[this._v("$ yarn/npm run dev")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"building-for-production"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-for-production","aria-hidden":"true"}},[this._v("#")]),this._v(" Building for production")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Build the frontend Quasar app (from root project folder): "),t("code",[this._v("$ quasar build")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then from the backend "),t("code",[this._v("api")]),this._v(" folder build the server-side Feathers app: "),t("code",[this._v("$ yarn/npm run build")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-in-production"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-in-production","aria-hidden":"true"}},[this._v("#")]),this._v(" Running in production")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Make sure you built your app first")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From the backend "),t("code",[this._v("api")]),this._v(" folder run the server-side Feathers app, this will also serve the frontend Quasar app : "),t("code",[this._v("$ yarn/npm run prod")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-tests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-tests","aria-hidden":"true"}},[this._v("#")]),this._v(" Running tests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# Running a given fixture\nnpm run cafe -- -f "my fxture"\n\n# Running a given test\nnpm run cafe -- -t "my test"\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"debug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug","aria-hidden":"true"}},[this._v("#")]),this._v(" Debug")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you want to pause the debugger when running the tests this should do it: "),t("code",[this._v("npm run mocha -- --inspect-brk")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("PORT / HTTPS_PORT")]),this._v(": API server port for HTTP and HTTPS modes")]),this._v(" "),t("li",[t("strong",[this._v("CLIENT_PORT / HTTPS_CLIENT_PORT")]),this._v(": frontend server port for HTTP and HTTPS modes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For the backend run one instance with "),t("code",[this._v("$ yarn/npm run dev")]),this._v(" and the other one with "),t("code",[this._v("$ yarn/npm run dev:replica")]),this._v(" (this will use another port for the Node.js debugger on the second instance and avoid conflict).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cordova-wrapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova-wrapper","aria-hidden":"true"}},[this._v("#")]),this._v(" Cordova wrapper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuring-the-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring the app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When running the app through Cordova the "),t("code",[this._v("domain")]),this._v(" entry of the client-side config file is used to know how to contact the remote API service:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("use eg http://192.168.1.16:8081 in your device which is the IP affected by your router to your localhost (use "),t("code",[this._v("ipconfig /all")]),this._v(" under Windows or "),t("code",[this._v("ifconfig")]),this._v(" under Linux to get it)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"building-the-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-the-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Building the app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// Debug mode\n$ yarn/npm run Cordova:build:debug\n// Release mode\n$ yarn/npm run Cordova:build:release\n// All\n$ yarn/npm run Cordova:build\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-the-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("// Debug mode\n$ yarn/npm run Cordova:dev\n// Release mode\n$ yarn/npm run Cordova:prod\n// Shortcut to dev mode\n$ yarn/npm run Cordova\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"debug-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#debug-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Debug")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"icons-splashscreens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icons-splashscreens","aria-hidden":"true"}},[this._v("#")]),this._v(" Icons & Splashscreens")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://github.com/eberlitz/splashicon-generator")]),this._v(" "),t("li",[this._v("https://www.npmjs.com/package/Cordova-gen-icon")]),this._v(" "),t("li",[this._v("https://www.javascripttuts.com/how-to-automatically-generate-icons-and-splash-screens-with-the-ionic-cli/")]),this._v(" "),t("li",[this._v("https://github.com/AlexDisler/Cordova-icon")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://github.com/apache/Cordova-plugin-device")]),this._v(" "),t("li",[this._v("https://github.com/phonegap/phonegap-plugin-push")]),this._v(" "),t("li",[this._v("https://github.com/apache/Cordova-plugin-geolocation")]),this._v(" "),t("li",[this._v("https://github.com/crosswalk-project/Cordova-plugin-crosswalk-webview")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"modules-plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Modules/Plugins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" kTeam\nyarn/npm "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v("\nyarn/npm run "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("watch")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-tests-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-tests-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Running tests")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To run the module tests including linting and coverage : "),t("code",[this._v("$ npm run test")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To speed-up things simply run the tests with: "),t("code",[this._v("$ npm run mocha")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To speed-up things even more run a single test suite with: "),t("code",[this._v('$ npm run mocha -- --grep "test suite name"')])])}],!1,null,null,null);s.options.__file="develop.md";t.default=s.exports}}]);