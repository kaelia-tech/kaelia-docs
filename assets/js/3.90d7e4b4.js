(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{386:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-global.bf86d245.svg"},387:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-travis.5e40ee62.svg"},388:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-env.e2075fb1.svg"},389:function(e,t,i){e.exports=i.p+"assets/img/kdk-workspace.d228efd0.png"},390:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-app.f5ae4922.svg"},391:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-android.aac6a2e0.svg"},392:function(e,t,i){e.exports=i.p+"assets/img/cd-pipeline-ios.b4f66a54.svg"},426:function(e,t,i){"use strict";i.r(t);var o=i(27),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deploy-your-app"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploy-your-app"}},[e._v("#")]),e._v(" Deploy your app")]),e._v(" "),o("h2",{attrs:{id:"deployment-pipeline"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment-pipeline"}},[e._v("#")]),e._v(" Deployment pipeline")]),e._v(" "),o("p",[e._v("The main purpose of the continuous integration and deployment (CI/CD) pipeline is to create/build application artifacts (Docker images for the web application and mobile application bundles) and deploy it in production-like environments in order to test/run it. We rely on "),o("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis CI"),o("OutboundLink")],1),e._v(" for continuous integration and delivery, as such you need to create the CI/CD pipeline in Travis CI by syncing your GitHub repository.")]),e._v(" "),o("p",[e._v("You can read this "),o("a",{attrs:{href:"https://medium.com/better-programming/why-we-stopped-using-so-called-best-practices-in-our-ci-cd-process-2ff09811f633",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),o("OutboundLink")],1),e._v(" on Medium to get an overview of our global CI/CD pipeline, which is illustrated in the following schema:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(386),alt:"Global deployment pipeline"}})]),e._v(" "),o("p",[e._v("The different operations performed by each stages are the following:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("APP")]),e._v(": executes the "),o("em",[e._v("travis.app.sh")]),e._v(" script to\n"),o("ul",[o("li",[e._v("creates the Docker images for the application and testing")]),e._v(" "),o("li",[e._v("run backend and frontend tests on the target infrastructure")]),e._v(" "),o("li",[e._v("deploy the web application on the target infrastructure")])])]),e._v(" "),o("li",[o("strong",[e._v("ANDROID")]),e._v(": executes the "),o("em",[e._v("travis.android.sh")]),e._v(" script to\n"),o("ul",[o("li",[e._v("build the Android APK")]),e._v(" "),o("li",[e._v("deploy it to Google Play")])])]),e._v(" "),o("li",[o("strong",[e._v("IOS")]),e._v(": executes the "),o("em",[e._v("travis.ios.sh")]),e._v(" script to\n"),o("ul",[o("li",[e._v("build the iOS IPA")]),e._v(" "),o("li",[e._v("deploy it to App Store Connect")])])])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("You can skip any of this stage by adding "),o("code",[e._v("[skip stage]")]),e._v(" to your commit message, e.g. "),o("code",[e._v("[skip android]")]),e._v(" to skip the Android build")])]),e._v(" "),o("p",[e._v("In addition, the "),o("em",[e._v("travis.env.sh")]),e._v(" script automatically generates a temporary environment file, based on the secret variables defined in the Travis repository settings or coming from a dedicated private repository (see details hereafter), which is used to "),o("RouterLink",{attrs:{to:"/guides/development/configure.html"}},[e._v("configure the application")]),e._v(". The following schema summarizes the different scripts used by the CI/CD:")],1),e._v(" "),o("p",[o("img",{attrs:{src:i(387),alt:"Travis scripts"}})]),e._v(" "),o("h2",{attrs:{id:"deployment-flavors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment-flavors"}},[e._v("#")]),e._v(" Deployment flavors")]),e._v(" "),o("p",[e._v("CI/CD comes al well in three different flavors, as defined by the value of the "),o("code",[e._v("FLAVOR")]),e._v("/"),o("code",[e._v("NODE_APP_INSTANCE")]),e._v(" environment variables:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("dev")]),e._v(": in order to deploy current development/alpha version, linked to the "),o("code",[e._v("master")]),e._v(" branch of your code")]),e._v(" "),o("li",[o("strong",[e._v("test")]),e._v(": in order to deploy current staging/beta version, linked to the "),o("code",[e._v("test")]),e._v(" branch of your code, identified by matching the following regular expression pattern "),o("code",[e._v("^test-*|-test$")])]),e._v(" "),o("li",[o("strong",[e._v("prod")]),e._v(": in order to deploy current production version, linked to "),o("code",[e._v("tags")]),e._v(" on the "),o("code",[e._v("test")]),e._v(" branch of your code")])]),e._v(" "),o("p",[e._v("The output Docker image artifacts use the prerelease SemVer notation to identify which flavor has been used to produce it —  "),o("code",[e._v("1.0.0-dev")]),e._v(" for alpha version, "),o("code",[e._v("1.3.0-test")]),e._v(" for beta version or "),o("code",[e._v("1.4.0")]),e._v(" for production.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("In the CI/CD process the "),o("code",[e._v("FLAVOR")]),e._v("/"),o("code",[e._v("NODE_APP_INSTANCE")]),e._v(" environment variable is automatically set based on the branch/tag you are pushing. During local development these variables are usually not defined.")])]),e._v(" "),o("p",[e._v("Starting from the following base application setup:")]),e._v(" "),o("ul",[o("li",[e._v("a root domain, defined by the value of the "),o("code",[e._v("DOMAIN")]),e._v(" environment variable like "),o("code",[e._v("kalisio.xyz")])]),e._v(" "),o("li",[e._v("a version number, defined by the value of the "),o("code",[e._v("VERSION")]),e._v(" environment variable like "),o("code",[e._v("1.3.0")]),e._v(" and automatically extracted from your "),o("em",[e._v("package.json")]),e._v(" file")]),e._v(" "),o("li",[e._v("a name, defined in the "),o("code",[e._v("APP")]),e._v(" environment variable like "),o("code",[e._v("kapp")])])]),e._v(" "),o("p",[e._v("Each flavor is then attached to a different target infrastructure, subdomain and version tag:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("dev")]),e._v(": "),o("code",[e._v("SUBDOMAIN=dev.$DOMAIN")]),e._v(", "),o("code",[e._v("VERSION_TAG=$VERSION-dev")])]),e._v(" "),o("li",[o("strong",[e._v("test")]),e._v(": "),o("code",[e._v("SUBDOMAIN=test.$DOMAIN")]),e._v(", "),o("code",[e._v("VERSION_TAG=$VERSION-test")])]),e._v(" "),o("li",[o("strong",[e._v("prod")]),e._v(": "),o("code",[e._v("SUBDOMAIN=$DOMAIN")]),e._v(", "),o("code",[e._v("VERSION_TAG=$VERSION")])])]),e._v(" "),o("p",[e._v("The subdomain is usually used to build a fully-qualified domain name for the application based on its name, i.e. "),o("code",[e._v("$APP.$SUBDOMAIN")]),e._v(". The version tag defines the name of the created Docker images as "),o("code",[e._v("$APP:$VERSION_TAG")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"deployment-workspace"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deployment-workspace"}},[e._v("#")]),e._v(" Deployment workspace")]),e._v(" "),o("p",[e._v('Each build stage of the CI/CD pipeline first setup the "workspace" required to correctly build the application, i.e. environment variables, application and module source code, configuration files, etc. The following schema summarizes the different steps performed to setup the workspace in the '),o("em",[e._v("travis.env.sh")]),e._v(" script:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(388),alt:"Travis scripts"}})]),e._v(" "),o("p",[e._v("In order to simplify and unify as much as possible secrets management we use a private GitHub repository as a secret store for:")]),e._v(" "),o("ul",[o("li",[e._v("environment variables through env files\n"),o("ul",[o("li",[o("strong",[e._v(".env")]),e._v(" for application configuration")]),e._v(" "),o("li",[o("strong",[e._v(".travis.env")]),e._v(" for CI/CD configuration")])])]),e._v(" "),o("li",[e._v("configuration files required either by the application or the CI/CD (e.g. mobile application certificates, ssh key to connect to hosting infrastructures, etc.)")])]),e._v(" "),o("p",[e._v("Each workspace includes a "),o("strong",[e._v("common")]),e._v(" folder to store shared secrets between all flavor, then a folder dedicated to secrets specific to each flavor as depicted in the following diagram:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(389),alt:"KDK workspace"}})]),e._v(" "),o("h2",{attrs:{id:"web-application-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#web-application-deployment"}},[e._v("#")]),e._v(" Web application deployment")]),e._v(" "),o("p",[e._v("The following schema summarizes the different steps performed to deploy the web application:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(390),alt:"Travis scripts"}})]),e._v(" "),o("h2",{attrs:{id:"mobile-applications-deployment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mobile-applications-deployment"}},[e._v("#")]),e._v(" Mobile applications deployment")]),e._v(" "),o("p",[e._v("The following schema summarizes the different steps performed to deploy the Android application:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(391),alt:"Travis scripts"}})]),e._v(" "),o("p",[e._v("The following schema summarizes the different steps performed to deploy the IOS application:")]),e._v(" "),o("p",[o("img",{attrs:{src:i(392),alt:"Travis scripts"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);