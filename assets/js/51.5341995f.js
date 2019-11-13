(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{213:function(e,t,r){"use strict";r.r(t);var n=r(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://feathersjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),r("OutboundLink")],1),e._v(" on the backend side")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://quasar.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar"),r("OutboundLink")],1),e._v(" on the frontend side")])]),e._v(" "),r("p",[e._v("If you are not familiar with those technologies and want to develop with the "),r("strong",[e._v("KDK")]),e._v(", in addition to read this documentation, we recommend reading "),r("a",{attrs:{href:"https://github.com/claustres/quasar-feathers-tutorial",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/claustres/quasar-feathers-tutorial"),r("OutboundLink")],1),e._v(". Indeed, KDK template application is based on the Quasar wrapper for Feathers, while KDK modules are Feathers plugins.")]),e._v(" "),r("p",[e._v("A KDK-based application usually includes a front-end side client as well as back-end services or an API gateway proxying requests to back-end services. In order to ease the development of new applications we provide you with a KDK application template called the "),r("a",{attrs:{href:"https://github.com/kalisio/kApp",target:"_blank",rel:"noopener noreferrer"}},[e._v("kApp"),r("OutboundLink")],1),e._v(" as a starting point. In this guide we will use the template as a reference but most commands will be valid for any KDK-based application.")]),e._v(" "),r("p",[e._v("The kApp includes all the necessary boilerplate that you will need to get started building your application:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://quasar.dev/quasar-cli/developing-spa/introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("client-side boilerplate"),r("OutboundLink")],1),e._v(" in the "),r("em",[e._v("root")]),e._v(" folder")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.feathersjs.com/guides/basics/generator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("server-side boilerplate"),r("OutboundLink")],1),e._v(" in the "),r("em",[e._v("api")]),e._v(" folder")]),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../development/deploy.html"}},[e._v("continuous integration/deployment boilerplate")]),e._v(" in the "),r("em",[e._v("root")]),e._v(" and "),r("em",[e._v("deploy")]),e._v(" folders")],1)]),e._v(" "),r("p",[e._v("It also includes the minimum viable set of features to start:")]),e._v(" "),r("ul",[r("li",[e._v("a "),r("router-link",{attrs:{to:"./../../api/kcore/components.html#layout"}},[e._v("basic application layout")]),e._v(" including side navigation, application bar and a right panel")],1),e._v(" "),r("li",[e._v("ready-to-go "),r("router-link",{attrs:{to:"./../../api/kcore/services.html#users"}},[e._v("user authentication services")]),e._v(" and "),r("router-link",{attrs:{to:"./../../api/kcore/components.html#authentication"}},[e._v("screens")])],1),e._v(" "),r("li",[e._v("a "),r("router-link",{attrs:{to:"./../../api/kcore/application.html"}},[e._v("basic service")]),e._v(" to create/remove documents in database")],1),e._v(" "),r("li",[e._v("a "),r("router-link",{attrs:{to:"./../../api/kcore/mixins.html#base-activity"}},[e._v("basic activity")]),e._v(" listing documents using a "),r("router-link",{attrs:{to:"./../../api/kcore/components.html#collections"}},[e._v("k-list")])],1),e._v(" "),r("li",[e._v("a "),r("router-link",{attrs:{to:"./../../api/kcore/components.html#editors"}},[e._v("basic editor")]),e._v(" to fill document properties when creating a new document")],1)]),e._v(" "),e._m(2),e._v(" "),r("div",{staticClass:"warning custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("This requires you to "),r("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Docker"),r("OutboundLink")],1),e._v(", the world’s leading software container platform.")])]),e._v(" "),r("p",[e._v("Kalisio provides Docker images for the template on the "),r("a",{attrs:{href:"https://hub.docker.com/u/kalisio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),r("OutboundLink")],1),e._v(" to ease testing it. To run correctly it has to be linked with a standard "),r("a",{attrs:{href:"https://hub.docker.com/_/mongo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB container"),r("OutboundLink")],1),e._v(" for the database.")]),e._v(" "),r("p",[e._v("The following commands should do the job:")]),e._v(" "),e._m(3),r("p",[e._v("Then point your browser to "),r("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8081"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("You can also use "),r("a",{attrs:{href:"https://docs.docker.com/compose/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-compose"),r("OutboundLink")],1),e._v(" and the "),r("a",{attrs:{href:"https://github.com/kalisio/kApp/tree/master/deploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker compose files"),r("OutboundLink")],1),e._v(".\nThe following commands should do the job:")]),e._v(" "),e._m(5),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("For most applications some secrets (like your AWS S3 access key) need also to be set in your environment to make it work, see "),r("router-link",{attrs:{to:"./../development/deploy.html#prerequisites"}},[e._v("deployment prerequisites")])],1)]),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("First you have to ensure you fulfilled the "),r("router-link",{attrs:{to:"./../development/develop.html#prerequisites"}},[e._v("prerequisites")]),e._v(" to build and run kApp from source code. Then the following commands, assuming you have a MongoDB instance running on local host and default port (27017), should launch your local instance:")],1),e._v(" "),e._m(7),r("p",[e._v("Then point your browser to "),r("a",{attrs:{href:"http://localhost:8081",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:8081"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("To start coding into your application please refer to our "),r("router-link",{attrs:{to:"./../development/develop.html"}},[e._v("development guide")]),e._v(".")],1),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("kApp backend configuration is based on "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),r("OutboundLink")],1),e._v(" so the same guidelines are applicable, the default configuration can be found in the "),r("code",[e._v("api/config")]),e._v(" folder. The main properties are the following:")]),e._v(" "),r("ul",[e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("li",[r("strong",[e._v("apiLimiter")]),e._v(": the API rate limiting configuration\n"),r("ul",[r("li",[r("strong",[e._v("http")]),e._v(": for HTTP REST clients, compliant with "),r("a",{attrs:{href:"https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fnfriedly%2Fexpress-rate-limit",target:"_blank",rel:"noopener noreferrer"}},[e._v("express-rate-limit"),r("OutboundLink")],1),e._v(" options")]),e._v(" "),r("li",[r("strong",[e._v("websocket")]),e._v(": for Websocket clients, compliant with "),r("a",{attrs:{href:"https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fjhurliman%2Fnode-rate-limiter",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-rate-limiter"),r("OutboundLink")],1),e._v(" options")])])]),e._v(" "),r("li",[r("strong",[e._v("authentication")]),e._v(" : object configuring "),r("a",{attrs:{href:"https://github.com/feathersjs/feathers-authentication#default-options",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers authentication"),r("OutboundLink")],1),e._v(" plus custom options\n"),r("ul",[e._m(13),e._v(" "),e._m(14),e._v(" "),r("li",[r("strong",[e._v("limiter")]),e._v(": the authentication API rate limiting configuration\n"),r("ul",[r("li",[r("strong",[e._v("http")]),e._v(": for HTTP REST clients, compliant with "),r("a",{attrs:{href:"https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fnfriedly%2Fexpress-rate-limit",target:"_blank",rel:"noopener noreferrer"}},[e._v("express-rate-limit"),r("OutboundLink")],1),e._v(" options")]),e._v(" "),r("li",[r("strong",[e._v("websocket")]),e._v(": for Websocket clients, compliant with "),r("a",{attrs:{href:"https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fjhurliman%2Fnode-rate-limiter",target:"_blank",rel:"noopener noreferrer"}},[e._v("node-rate-limiter"),r("OutboundLink")],1),e._v(" options")])])])])]),e._v(" "),r("li",[r("strong",[e._v("logs")]),e._v(": object configuring the "),r("a",{attrs:{href:"https://github.com/winstonjs/winston",target:"_blank",rel:"noopener noreferrer"}},[e._v("winston"),r("OutboundLink")],1),e._v(" loggers to be used - each key is a "),r("a",{attrs:{href:"https://github.com/winstonjs/winston/blob/master/docs/transports.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("transport name"),r("OutboundLink")],1),e._v(" which value is associated configuration options")]),e._v(" "),r("li",[r("strong",[e._v("db")]),e._v(": database configuration\n"),r("ul",[r("li",[r("strong",[e._v("adapter")]),e._v(": the database adapter, for now the only supported one is "),r("a",{attrs:{href:"https://github.com/feathersjs/feathers-mongodb",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("mongodb")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("url")]),e._v(": database URL to access the app database used by drivers such as "),r("a",{attrs:{href:"https://github.com/mongodb/node-mongodb-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("mongodb"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[r("strong",[e._v("storage")]),e._v(": storage service configuration used by "),r("router-link",{attrs:{to:"./../../api/kcore/services.html#storage-service"}},[e._v("kCore")]),e._v(" "),e._m(15)],1),e._v(" "),r("li",[r("strong",[e._v("mailer")]),e._v(": e-mail service configuration used by "),r("router-link",{attrs:{to:"./../../api/knotify/services.html#mailer-service"}},[e._v("kNotify")]),e._v(", compliant with "),r("a",{attrs:{href:"https://github.com/nodemailer/nodemailer-smtp-transport",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodemailer"),r("OutboundLink")],1),e._v(" options plus custom Kalisio options, e.g.\n"),e._m(16)],1),e._v(" "),r("li",[r("strong",[e._v("pusher")]),e._v(": push notification service configuration used by "),r("router-link",{attrs:{to:"./../../api/knotify/services.html#pusher-service"}},[e._v("kNotify")]),e._v(" "),e._m(17)],1),e._v(" "),e._m(18)]),e._v(" "),r("p",[e._v("Environment variables (will override defaults in config file):")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),r("p",[e._v("kApp frontend configuration is based on the same underlying "),r("a",{attrs:{href:"https://github.com/lorenwest/node-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("tool"),r("OutboundLink")],1),e._v(" that powers "),r("a",{attrs:{href:"https://docs.feathersjs.com/guides/advanced/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers"),r("OutboundLink")],1),e._v(" so the same guidelines are applicable, the default configuration can be found in the "),r("code",[e._v("config")]),e._v(" folder. The main properties are the following:")]),e._v(" "),r("ul",[e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),r("li",[r("strong",[e._v("logs")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("level")]),e._v(": "),r("a",{attrs:{href:"https://github.com/pimterry/loglevel#documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("log level"),r("OutboundLink")],1),e._v(" to be used")])])]),e._v(" "),e._m(28),e._v(" "),r("li",[r("strong",[e._v("layout")]),e._v(": layout configuration, see "),r("a",{attrs:{href:"https://quasar.dev/layout/layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quasar docs"),r("OutboundLink")],1),e._v(" for details\n"),e._m(29)]),e._v(" "),e._m(30),e._v(" "),e._m(31)]),e._v(" "),e._m(32),e._v(" "),r("p",[e._v("Environment variables for the frontend development server (will override defaults):")]),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),r("p",[e._v("To get a deeper overview of some of the internals we recommend you to read our technical articles on Medium as a source of inspiration:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/feathersjs-in-production-configuration-api-prefixing-logging-and-error-catching-2a80e044e233",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeathersJS in production: configuration, API prefixing, logging and error catching"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/how-to-setup-oauth-flow-with-featherjs-522bdecb10a8",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to setup OAuth flow with FeathersJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/enterprise-grade-authentication-using-aws-cognito-and-onelogin-with-feathersjs-d4c6f46ab123",target:"_blank",rel:"noopener noreferrer"}},[e._v("Enterprise-grade authentication using AWS Cognito and OneLogin with FeathersJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/access-control-strategies-with-feathersjs-72452268739d",target:"_blank",rel:"noopener noreferrer"}},[e._v("Access control strategies with FeathersJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/stress-testing-your-feathersjs-application-like-in-production-4b8611ee8d9e",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stress testing your FeathersJS application like in production"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.feathersjs.com/feathersjs-in-production-password-policy-and-rate-limiting-32c9874dc563",target:"_blank",rel:"noopener noreferrer"}},[e._v("FeathersJS in production: password policy and rate limiting"),r("OutboundLink")],1)])]),e._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),r("p",[e._v("The Kalisio framework is also inspired by our experience in developing "),r("a",{attrs:{href:"https://weacast.github.io/weacast-docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Weacast"),r("OutboundLink")],1),e._v(", referring to it as a more simple project might help.")])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"a-step-by-step-introduction-to-kdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-step-by-step-introduction-to-kdk","aria-hidden":"true"}},[this._v("#")]),this._v(" A Step-by-Step introduction to KDK")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("KDK")]),this._v(" is mainly powered by the following stack:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-a-kapp-from-a-docker-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-a-kapp-from-a-docker-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Running a kApp from a Docker image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("// Retrieve the latest available dev tag\ndocker pull kalisio/kapp:0.3.0-dev\n// Run the MongoDB container\ndocker run --name mongodb-kapp -v mongodb_kapp:/data/db -d mongo\n\n// Run the Kalisio app container\ndocker run --name kapp -d -p 8081:8081 --link mongodb-kapp:mongodb -e "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"NODE_APP_INSTANCE="')]),this._v(" kalisio/kapp:0.3.0-dev\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("If running Docker under Windows in a virtual machine first redirect the port 8081 of your virtual machine to your host")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker pull kalisio/kapp\n// Run the MongoDB and Kalisio app containers\ndocker-compose up -d\n\n// Stop the MongoDB and Kalisio app containers\ndocker-compose down\n// Stop the MongoDB and Kalisio app containers erasing DB data\ndocker-compose down -v\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"running-a-kapp-from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-a-kapp-from-source-code","aria-hidden":"true"}},[this._v("#")]),this._v(" Running a kApp from source code")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("// Clone kApp\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/kalisio/kApp.git\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" kApp\n\n// Client build\nyarn "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nyarn/npm run build\n\n// Server build\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" api\nyarn "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\nyarn/npm run build\n\n// Running the server "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" production will also serve the client\nyarn/npm run prod\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuring-a-kapp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring-a-kapp","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring a kApp")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"backend-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend-side","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend side")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("apiPath")]),this._v(": the API path prefix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("port")]),this._v(": the server port")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("domain")]),this._v(": the web application domain name (eg https://app.kalisio.xyz)")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("passwordPolicy")]),e._v(": password policy configuration\n"),r("ul",[r("li",[r("strong",[e._v("minLength")]),e._v(": minimum length")]),e._v(" "),r("li",[r("strong",[e._v("maxLength")]),e._v(": maximum length")]),e._v(" "),r("li",[r("strong",[e._v("uppercase")]),e._v(": boolean indicating if the password requires at least an uppercase letter")]),e._v(" "),r("li",[r("strong",[e._v("lowercase")]),e._v(": boolean indicating if the password requires at least an uppercase letter")]),e._v(" "),r("li",[r("strong",[e._v("digits")]),e._v(": boolean indicating if the password requires at least a digit")]),e._v(" "),r("li",[r("strong",[e._v("symbols")]),e._v(": boolean indicating if the password requires at least a symbol")]),e._v(" "),r("li",[r("strong",[e._v("prohibited")]),e._v(": array of prohibited common passwords")]),e._v(" "),r("li",[r("strong",[e._v("history")]),e._v(": number of passwords to look for in history to avoid keeping a similar one when changing")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("defaultUsers")]),this._v(": the array of default users to be created on launch (format "),t("code",[this._v("{ email, password }")]),this._v(")\n"),t("ul",[t("li",[this._v("note: will not be exposed on staging/production environments for security concerns")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("accessKeyId")]),e._v(": AWS S3 access key")]),e._v(" "),r("li",[r("strong",[e._v("secretAccessKey")]),e._v(": AWS S3 secret access key")]),e._v(" "),r("li",[r("strong",[e._v("bucket")]),e._v(": AWS S3 bucket to be used")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("service")]),e._v(": e-mail service to be used (like "),r("code",[e._v("gmail")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("auth")]),e._v(": user login and password")]),e._v(" "),r("li",[r("strong",[e._v("templateDir")]),e._v(": directory containing the e-mails templates to be used")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("accessKeyId")]),e._v(": AWS SNS access key")]),e._v(" "),r("li",[r("strong",[e._v("secretAccessKey")]),e._v(": AWS SNS secret access key")]),e._v(" "),r("li",[r("strong",[e._v("region")]),e._v(": AWS region to be used (like "),r("code",[e._v("eu-west-1")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("apiVersion")]),e._v(": AWS API version to be used (like "),r("code",[e._v("2010-03-31")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("platforms")]),e._v(": object containing as keys platforms names in uppercase (like "),r("code",[e._v("ANDROID")]),e._v(") and corresponding AWS SNS ARN as values")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("proxyTable")]),this._v(": a set of proxy rules typically used for "),t("a",{attrs:{href:"./architecture/GLOBAL.MD#architecture-at-scale"}},[this._v("scaling")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("strong",[e._v("PORT / HTTPS_PORT")]),e._v(": backend port for HTTP and HTTPS modes")]),e._v(" "),r("li",[r("strong",[e._v("CLIENT_PORT / HTTPS_CLIENT_PORT")]),e._v(": frontend port for HTTP and HTTPS modes (only used in development)")]),e._v(" "),r("li",[r("strong",[e._v("DB_URL")]),e._v(": database URL to access the app database")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"frontend-side"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontend-side","aria-hidden":"true"}},[this._v("#")]),this._v(" Frontend side")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("apiPath")]),this._v(": the API path prefix")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("apiTimeout")]),this._v(": the API timeout")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("version")]),this._v(": the web application version number")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("domain")]),this._v(": the web application domain name (eg https://kapp.dev.kalisio.xyz)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("transport")]),this._v(" : the transport to be used between frontend and backend, could be "),t("code",[this._v("http")]),this._v(" for standard REST or "),t("code",[this._v("websocket")]),this._v(" for WebSockets")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("appName")]),this._v(": the name of the app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("appLogo")]),this._v(": the image to be used as logo for the app")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("screens")]),e._v(": connection screens configuration\n"),r("ul",[r("li",[r("strong",[e._v("extraLinks")]),e._v(": extra links displayed at the bottom of all screens,")]),e._v(" "),r("li",[r("strong",[e._v("banner")]),e._v(": displayed application banner,")]),e._v(" "),r("li",[r("strong",[e._v("login")]),e._v(": login screen configuration\n"),r("ul",[r("li",[r("strong",[e._v("providers")]),e._v(": array of OAuth2 providers to be used (like "),r("code",[e._v("['google', 'github']")]),e._v("),")]),e._v(" "),r("li",[r("strong",[e._v("links")]),e._v(": links displayed at the bottom of the screen,")])])]),e._v(" "),r("li",[r("strong",[e._v("logout")]),e._v(": logout screen configuration\n"),r("ul",[r("li",[r("strong",[e._v("links")]),e._v(": links displayed at the bottom of the screen,")])])]),e._v(" "),r("li",[r("strong",[e._v("changeEndpoint")]),e._v(": change endpoint screen configuration (only useful for mobile apps)\n"),r("ul",[r("li",[r("strong",[e._v("links")]),e._v(": links displayed at the bottom of the screen,")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("appBar")]),this._v(": component to be used for the app bar, e.g. "),t("code",[this._v("'layout/KAppBar'")])]),this._v(" "),t("li",[t("strong",[this._v("sideNav")]),this._v(": component to be used for the side bar, e.g. "),t("code",[this._v("'layout/KSideNav'")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[r("strong",[e._v("sideNav")]),e._v(":\n"),r("ul",[r("li",[r("strong",[e._v("banner")]),e._v(": image to be used as banner")]),e._v(" "),r("li",[r("strong",[e._v("components")]),e._v(": object containing as keys configuration key names (like "),r("code",[e._v("XXX")]),e._v(") and corresponding component to be used as values")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("strong",[this._v("XXX")]),this._v(": configuration object for component YYY of e.g. side navigation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("The main difference with the backend configuration is that the actual frontend configuration is generated by WebPack at build time from the config files, so you will need to rebuild the app to see your changes applied")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("PORT / HTTPS_PORT")]),this._v(": backend port for HTTP and HTTPS modes (used to configure proxy)")]),this._v(" "),t("li",[t("strong",[this._v("CLIENT_PORT / HTTPS_CLIENT_PORT")]),this._v(": frontend port for HTTP and HTTPS modes")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"to-go-further"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-go-further","aria-hidden":"true"}},[this._v("#")]),this._v(" To go further")])}],!1,null,null,null);o.options.__file="step-by-step.md";t.default=o.exports}}]);