(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(e,t,r){"use strict";r.r(t);var s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The global deployment pipeline is illustrated in the following schema:")]),e._v(" "),r("p",[e._v("![Deployment pipeline](./../figures/Deploy Pipeline Diagram.svg)")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Depending on the services you need you will have to do the following:")]),e._v(" "),r("ul",[r("li",[e._v("Create a Firebase app in the "),r("a",{attrs:{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firebase Console"),r("OutboundLink")],1),e._v(" "),e._m(4)]),e._v(" "),r("li",[e._v("Create a GCM application in the "),r("a",{attrs:{href:"https://eu-west-1.console.aws.amazon.com/sns/v2/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS SNS console"),r("OutboundLink")],1),e._v(" using the previous server key\n"),e._m(5)]),e._v(" "),r("li",[e._v("Create a new project for your app in the "),r("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Console"),r("OutboundLink")],1),e._v(" "),e._m(6)]),e._v(" "),r("li",[e._v("Create an OAuth2 ID for a Web App in "),r("a",{attrs:{href:"https://console.cloud.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud Console"),r("OutboundLink")],1),e._v(" > "),r("em",[e._v("API & services")]),e._v(" "),e._m(7)]),e._v(" "),r("li",[e._v("Create an OAuth2 App in "),r("a",{attrs:{href:"https://github.com/organizations/kalisio/settings/applications",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(" "),e._m(8)]),e._v(" "),r("li",[e._v("Create an AWS user in "),r("a",{attrs:{href:"https://console.aws.amazon.com/iam/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAM"),r("OutboundLink")],1),e._v(" with access to S3 API (e.g. "),r("em",[e._v("AmazonS3FullAccess")]),e._v(")\n"),e._m(9)]),e._v(" "),e._m(10),e._v(" "),r("li",[e._v("Create an AWS user in "),r("a",{attrs:{href:"https://console.aws.amazon.com/iam/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("IAM"),r("OutboundLink")],1),e._v(" with access to SNS API (e.g. "),r("em",[e._v("AmazonSNSFullAccess")]),e._v(")\n"),e._m(11)])]),e._v(" "),r("p",[e._v("Create required environment variables in a script file you can source before launching your app:")]),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("We heavily rely on "),r("a",{attrs:{href:"https://travis-ci.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis CI"),r("OutboundLink")],1),e._v(" for continuous integration and delivery, as such the best is to create a "),r("em",[e._v("secrets.tar")]),e._v(" containing all secured files and encode it to "),r("em",[e._v("secrets.tar.enc")]),e._v(" a using "),r("a",{attrs:{href:"https://github.com/kalisio/kdk/blob/master/tools/CLI.MD#travis-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Travis CLI"),r("OutboundLink")],1),e._v(". This file will be decrypted before the build or whenever you need something inside.")]),e._v(" "),e._m(16),e._v(" "),r("p",[e._v("This "),r("a",{attrs:{href:"https://github.com/skywinder/github-changelog-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("gem"),r("OutboundLink")],1),e._v(" generates a change log file based on "),r("strong",[e._v("tags")]),e._v(", "),r("strong",[e._v("issues")]),e._v(" and merged "),r("strong",[e._v("pull requests")]),e._v(" (and splits them into separate lists according to labels) from :octocat: GitHub Issue Tracker. This requires you to install (e.g. for Windows) "),r("a",{attrs:{href:"http://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby"),r("OutboundLink")],1),e._v(" and its "),r("a",{attrs:{href:"https://github.com/oneclick/rubyinstaller/wiki/Development-Kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevKit"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(17),e._v(" "),r("p",[e._v("The same process applies when releasing a patch, minor or major version, i.e. the following tasks are done:")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),r("p",[e._v("Because Kalisio web app are also released as Docker images you can build it like this:")]),e._v(" "),e._m(22),r("p",[e._v("Then release it as latest version:")]),e._v(" "),e._m(23),e._m(24),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._v(" "),r("p",[e._v("The same process applies as for the web app but in addition the module is published on the NPM registry.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),r("p",[e._v("As an application often relies on third-party services its configuration must include secrets like API keys, passwords, etc. In this section we detail how we manage it in a secure way.")]),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),r("p",[e._v("Environment variables might be used to store secrets then retrieved in config files like this:")]),e._v(" "),e._m(33),r("p",[e._v("In your local development environment you should use a script to setup all the required secrets. This script should be safe-guarded in a non-public environment.")]),e._v(" "),r("p",[e._v("When using Travis CI you can use "),r("a",{attrs:{href:"https://docs.travis-ci.com/user/environment-variables/",target:"_blank",rel:"noopener noreferrer"}},[e._v("encrypted variables"),r("OutboundLink")],1),e._v(" set either in build file or repository settings.")]),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),r("p",[e._v("To set up the CI/CD pipeline, sensitive data are needed to access the different services and api. If some of these data can be stored using environment variables, others are stored through files and need to be pushed within the respoitory. For this purpose Travis CI offer a way to store these files within a unique encrypted archive.")]),e._v(" "),r("p",[e._v("See https://docs.travis-ci.com/user/encryption-keys/")]),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),r("p",[e._v("The table below lists all the required files:")]),e._v(" "),e._m(40),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),r("p",[e._v("You need to be logged in to Travis CI")]),e._v(" "),e._m(43),r("p",[e._v("Do not push the secret files on your repository but keep them in a secure place !")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy","aria-hidden":"true"}},[this._v("#")]),this._v(" DEPLOY")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"global-pipeline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-pipeline","aria-hidden":"true"}},[this._v("#")]),this._v(" Global pipeline")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"configure-third-party-services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-third-party-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure third-party services")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("retrieve the "),r("code",[e._v("google-services.json")]),e._v(" to be stored as a secret file in the "),r("em",[e._v("cordova")]),e._v(" directory")]),e._v(" "),r("li",[e._v("create an Android app in your Firebase app and keep track of secret server key in "),r("em",[e._v("Parameters > Cloud Messaging")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("keep track of app ARN")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Activate the Google+ API on your project")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the redirect URL should match "),t("em",[this._v("your.domain/auth/google/callback")])]),this._v(" "),t("li",[this._v("download the "),t("em",[this._v("json")]),this._v(" dans keep track of client ID and secret")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("the redirect URL should match "),t("em",[this._v("your.domain/auth/github/callback")])]),this._v(" "),t("li",[this._v("download the "),t("em",[this._v("json")]),this._v(" dans keep track of client ID and secret")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("keep track of access key ID and secret")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Create a bucket for your app in the Kalisio account\n"),t("ul",[t("li",[this._v("keep track of its name")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("keep track of access key ID and secret")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("export GOOGLE_MAIL_USER=xxx\nexport GOOGLE_MAIL_PASSWORD=xxx\nexport SNS_ACCESS_KEY=xxx\nexport SNS_SECRET_ACCESS_KEY=xxx\nexport SNS_ANDROID_ARN=xxx\nexport S3_ACCESS_KEY=xxx\nexport S3_SECRET_ACCESS_KEY=xxx\nexport S3_BUCKET=xxx\nexport GITHUB_CLIENT_ID=xxx\nexport GITHUB_CLIENT_SECRET=xxx\nexport GOOGLE_CLIENT_ID=xxx\nexport GOOGLE_CLIENT_SECRET=xxx\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Note: some of the previous accounts/IDs are not app specific and can be share accross multiple apps, e.g. S3, SNS, etc.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Most information here should be "),t("a",{attrs:{href:"./PUBLISH.MD#security"}},[this._v("secured")]),this._v(" and "),t("strong",[this._v("should not be pushed under source control unless you use private repositories (and even in this case it is best to secure it)")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"configure-continuous-integration-and-delivery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-continuous-integration-and-delivery","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure continuous integration and delivery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"install-change-log-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-change-log-generator","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Change log generator")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"web-app"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-app","aria-hidden":"true"}},[this._v("#")]),this._v(" Web app")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("increase the package version number in the "),t("strong",[this._v("package.json")]),this._v(" file (frontend and backend API)")]),this._v(" "),t("li",[this._v("create a tag accordingly in the git repository and push it")]),this._v(" "),t("li",[this._v("generates the changelog in the git repository and push it")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("strong",[this._v("Before you publish your app take care of updating the version of all dependent plugins to the latest version published, for example  perform "),t("code",[this._v("yarn upgrade kCore kTeam kClient")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Depending on the release type the following command will do the job (where type is either "),t("code",[this._v("patch")]),this._v(", "),t("code",[this._v("minor")]),this._v(", "),t("code",[this._v("major")]),this._v("):")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn/npm run release:type\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker build -t kalisio/kapp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker login\ndocker push kalisio/kapp\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And tag it ("),t("code",[this._v("version_tag")]),this._v(" being the current version number like "),t("code",[this._v("1.1.2")]),this._v(")")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker tag kalisio/kapp kalisio/kapp:version_tag\ndocker push kalisio/kapp:version_tag\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("This requires you to have a DockerHub account and be a team member of the Kalisio organization, if you'd like to become a maintainer please tell us")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Plugins")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("This requires you to have a NPM and GitHub account and be a team member of the Kalisio organization, if you'd like to become a maintainer please tell us")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("strong",[this._v("Before you publish a plugin take care of updating the version of your dependent plugins to the latest version published, for example  perform "),t("code",[this._v("yarn upgrade kCore")]),this._v(" for a plugin depending on the core plugin before publishing it")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security","aria-hidden":"true"}},[this._v("#")]),this._v(" Security")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("The most important point is you should never store passwords or other sensitive data in source code, and you shouldn't use production secrets in development and test mode.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"using-environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Using environment variables")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("github: {\n  clientID: process.env.GITHUB_CLIENT_ID,\n  clientSecret: process.env.GITHUB_CLIENT_SECRET\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("If you'd like to set a value holding multilines or special characters take care to surround it with "),t("code",[this._v('"')]),this._v(" so that it will be properly escaped.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"services"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services","aria-hidden":"true"}},[this._v("#")]),this._v(" Services")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sensitive-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sensitive-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Sensitive data")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"secret-archive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secret-archive","aria-hidden":"true"}},[this._v("#")]),this._v(" Secret archive")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"secret-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secret-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Secret files")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("keystore file")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("A binary file containing the private key of the certificate you need to sign the Android app")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("cordova build file")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("A Json file used by Cordova to sign the generated application. It uses the keystore file")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("google play service account")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("A Json file storing the data needed to use the Google Play service account")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("google services account")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("A Json file storing the the keys to access the various Google services")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"creating-the-archive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-archive","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating the archive")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As mentioned in the documentation (https://docs.travis-ci.com/user/encrypting-files/#Encrypting-multiple-files), is it not possible to encrypt multiple files. It is then required to create a "),t("code",[this._v("tar")]),this._v(" file containing the different secret files and then to encrypt the archive.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("tar cvf secrets.tar your_keystore.keystore build.json google-play.json google-services.json\ntravis encrypt-file secrets.tar\n")])])])}],!1,null,null,null);i.options.__file="DEPLOY.md";t.default=i.exports}}]);