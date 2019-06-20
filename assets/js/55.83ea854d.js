(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{203:function(e,t,n){"use strict";n.r(t);var a=n(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("If you'd like a third-party application to rely on the API of your application without authenticating using a user/password you can generate an access token with a fixed expiration date to be used as an API key.")]),e._v(" "),n("p",[e._v("If your API needs a user ID to work as expected first register a user as usual. Then, using your application secret and a "),n("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT library"),n("OutboundLink")],1),e._v(", issue a JWT with a payload matching the configuration options of your application regarding audience (i.e. domain), issuer and the user ID if any, e.g.:")]),e._v(" "),e._m(2),e._m(3),e._v(" "),n("p",[e._v("Due to the modular approach of the KDK we need to "),n("a",{attrs:{href:"https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),n("OutboundLink")],1),e._v(" the modules and the applications according to the dependency tree when developing.")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("Due to some "),n("a",{attrs:{href:"http://codetunnel.io/npm-5-changes-to-npm-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("changes"),n("OutboundLink")],1),e._v(" in the way "),n("code",[e._v("npm")]),e._v(" manages linked modules we prefer to use "),n("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),n("OutboundLink")],1),e._v(" as a package manager.")])]),e._v(" "),n("p",[e._v("It appeared that when performing a new install, adding a new dependency, or launching two installs concurrently, some of these links often break raising different errors:")]),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("As a workaround you will either need to:")]),e._v(" "),e._m(5),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("You might also clean all dependencies frist using "),n("a",{attrs:{href:"http://www.nikola-breznjak.com/blog/javascript/nodejs/how-to-delete-node_modules-folder-on-windows-machine/",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("rimraf node_modules")]),n("OutboundLink")],1)])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("If you need more than two side-by-side applications then use set "),n("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_node_options_options",target:"_blank",rel:"noopener noreferrer"}},[e._v("NODE_OPTIONS"),n("OutboundLink")],1),e._v(" environment variable before launching each one, e.g. "),n("code",[e._v("NODE_OPTIONS='--inspect-port=9230'")]),e._v(".")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tips","aria-hidden":"true"}},[this._v("#")]),this._v(" Tips")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"generating-service-account-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-service-account-tokens","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating service account tokens")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aud"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://kano.kargo.kalisio.xyz"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"iss"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kalisio"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exp"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1552402010")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"userId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5bc5b166beb4648d3cd79327"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"linking-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linking-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Linking errors")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v("TypeError: Cannot read property 'eventMappings' of undefined")])]),e._v(" "),n("li",[n("code",[e._v("TypeError: processNextTick is not a function")])]),e._v(" "),n("li",[n("code",[e._v("Error: Cannot find module 'safer-buffer'")])]),e._v(" "),n("li",[n("code",[e._v("An unexpected error occurred: \"ENOENT: no such file or directory, scandir 'xxx'")])]),e._v(" "),n("li",[e._v("...")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("clear the yarn cache "),n("code",[e._v("yarn cache clean")]),e._v(" (or "),n("code",[e._v("yarn cache clean module")]),e._v(" to be more specific)")]),e._v(" "),n("li",[e._v("restore the broken links using commands like e.g. "),n("code",[e._v("yarn link @kalisio/kdk-core")]),e._v(" in the broken modules/applications")]),e._v(" "),n("li",[e._v("reinstall all dependencies using "),n("code",[e._v("yarn install")]),e._v(" in broken modules/applications, and then restore the links as above")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("Errors are often visible when launching the app server but might come from an underlying module. For instance the "),t("code",[this._v("TypeError: Cannot read property 'eventMappings' of undefined")]),this._v(" error often appears in kCore, probably due to the fact incompatible versions of the same library (e.g. Feathers) are installed. So try first to reinstall and relink the modules before your app, and if you'd like to see if a module is fine running its tests is usually a good indcator: "),t("code",[this._v("npm run mocha")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-multiple-applications-side-by-side-in-development-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-applications-side-by-side-in-development-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Running multiple applications side-by-side in development mode")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("For instance, as Kano depends for some features on a running Weacast API you will need to run both on your local environment. If your application also uses replication you will need to launch two instances in parallel. The problem is that by default all our apps uses the "),t("code",[this._v("8081")]),this._v(" port for server and "),t("code",[this._v("8080")]),this._v(" port for client in development mode, generating a port conflict. Similarly the Node.js debugger uses by default the "),t("code",[this._v("9229")]),this._v(" port.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You should run the first server by defining eg. "),n("code",[e._v("PORT=8082")]),e._v(" (to avoid port conflict). If single-sign-on is expected to work, define also "),n("code",[e._v("APP_SECRET=same value as in second application configuration")]),e._v(" as environment variables. Then execute the "),n("code",[e._v("npm run dev:replica")]),e._v(" command (will setup the Node.js debugger to use the "),n("code",[e._v("9229")]),e._v(" port to avoid port conflict). Last, you can launch the second server/client as usual.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("You usually don't need the client application but only the API on the replica but if required you can launch another client similarly e.g. by setting "),t("code",[this._v("CLIENT_PORT=8083")]),this._v(".")])])}],!1,null,null,null);s.options.__file="tips.md";t.default=s.exports}}]);