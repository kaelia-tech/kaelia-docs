/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "64cb66f77f9a9c042f3aab8810b8930d"
  },
  {
    "url": "about/contact.html",
    "revision": "d271f424c5ebea338631fc8b6ae74e2a"
  },
  {
    "url": "about/contributing.html",
    "revision": "c525de77a7d309c1f9b9c20d35cbca2a"
  },
  {
    "url": "about/index.html",
    "revision": "85d35e37b0e63256714bc74a6f4f18bf"
  },
  {
    "url": "about/license.html",
    "revision": "20c0e01a8f99e33dfd2ff16e097e82ff"
  },
  {
    "url": "about/roadmap.html",
    "revision": "e1f80c4e9a5c5b47ee2f7c704219f345"
  },
  {
    "url": "api/core/application.html",
    "revision": "f11adff27855f221975b8144cc2d898a"
  },
  {
    "url": "api/core/components.html",
    "revision": "b2a3c5baba1ae5b0846be48469b360f4"
  },
  {
    "url": "api/core/hooks.html",
    "revision": "6b36e71742d7fb8e4211a0f6b66b6a5c"
  },
  {
    "url": "api/core/index.html",
    "revision": "4443ccae2b1d82ae1bf7ac7bbefb3d74"
  },
  {
    "url": "api/core/mixins.html",
    "revision": "3189322651322a640795d929cf460e1d"
  },
  {
    "url": "api/core/services.html",
    "revision": "4c03d58dee499103989d8f4d15a304ff"
  },
  {
    "url": "api/index.html",
    "revision": "17d832984423af781f212b4c1d8a7ec4"
  },
  {
    "url": "api/map/components.html",
    "revision": "6a85ead424b85531101f33b618b40196"
  },
  {
    "url": "api/map/globe-mixins.html",
    "revision": "301a6ac64cbd9677632238705036d1fe"
  },
  {
    "url": "api/map/hooks.html",
    "revision": "9507f539be8a0e09c606f7580cf2c382"
  },
  {
    "url": "api/map/index.html",
    "revision": "db6b9e3fc1d5fe13c740f6847527c703"
  },
  {
    "url": "api/map/map-mixins.html",
    "revision": "4a9ce075e4730bec654612e0224d6c44"
  },
  {
    "url": "api/map/mixins.html",
    "revision": "3d2298be0aa2aed5d97b215ebe1b1fa3"
  },
  {
    "url": "api/map/services.html",
    "revision": "da5d0c86661dcfa05d762431cf08e53c"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "81b3f0206b6369824007bb089b2daa62"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "b32f95f0f39f01d5c71d5877c6813d57"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "81694ed63a5d5e95b87edfca819a5d5e"
  },
  {
    "url": "architecture/index.html",
    "revision": "93cc3d5e3328a22b6c1f07511315db9a"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "9e465859b311bda377e214f49dc8c39b"
  },
  {
    "url": "assets/css/0.styles.be5e49f6.css",
    "revision": "fae068808c1c3a8f81a1b90be35d1766"
  },
  {
    "url": "assets/img/aggregated-feature-data-model.688823b1.png",
    "revision": "688823b1d38b25a2bf17ca95920def55"
  },
  {
    "url": "assets/img/aktnmap-layout.7dce3192.png",
    "revision": "7dce31929edd640a0491536514cbe7b9"
  },
  {
    "url": "assets/img/alert-data-model.77595bb5.png",
    "revision": "77595bb53c67ef3aa32e8455a15f4cd0"
  },
  {
    "url": "assets/img/alert-hooks.a29b1547.png",
    "revision": "a29b154748a226fbbe8e6a589aa14012"
  },
  {
    "url": "assets/img/application-hooks.e15ca2e0.svg",
    "revision": "e15ca2e0e0ce1b30ac2716348e14cc33"
  },
  {
    "url": "assets/img/authorisations-hooks.223455bf.png",
    "revision": "223455bfff7bf51dddf7721b4a40d5f6"
  },
  {
    "url": "assets/img/catalog-data-model.998b319c.png",
    "revision": "998b319c85f0c564838fe6886a1aa5b3"
  },
  {
    "url": "assets/img/cd-pipeline-android.aac6a2e0.svg",
    "revision": "aac6a2e0ae4e0a08d62434fc4f9e700c"
  },
  {
    "url": "assets/img/cd-pipeline-app.f5ae4922.svg",
    "revision": "f5ae4922e9e2a5263b805ee8a1cd1779"
  },
  {
    "url": "assets/img/cd-pipeline-env.e2075fb1.svg",
    "revision": "e2075fb1bb069e7f46ea7f0a880df06b"
  },
  {
    "url": "assets/img/cd-pipeline-global.bf86d245.svg",
    "revision": "bf86d245695e16937bf9f6e08c38b0ad"
  },
  {
    "url": "assets/img/cd-pipeline-ios.b4f66a54.svg",
    "revision": "b4f66a5494f77e98899d44a066515ed0"
  },
  {
    "url": "assets/img/cd-pipeline-travis.5e40ee62.svg",
    "revision": "5e40ee62f8c213080bcd46106366ccbd"
  },
  {
    "url": "assets/img/component-view.de49f2d5.png",
    "revision": "de49f2d54005249f92b47c78e46776cc"
  },
  {
    "url": "assets/img/domain-model.0547d09f.svg",
    "revision": "0547d09ff803394e1f2d859c04728556"
  },
  {
    "url": "assets/img/editor-lifecycle.174bae43.png",
    "revision": "174bae432562fed4c258bc985253d0ac"
  },
  {
    "url": "assets/img/feature-data-model.de64ed49.png",
    "revision": "de64ed4936ffd7dc5ee67482f140cbba"
  },
  {
    "url": "assets/img/feature-hooks.725395b0.png",
    "revision": "725395b044879fab8bcffbc5b4c012e0"
  },
  {
    "url": "assets/img/global-architecture.62f2e9b2.svg",
    "revision": "62f2e9b23f59d325b00376982b49ea43"
  },
  {
    "url": "assets/img/groups-data-model.437e9630.svg",
    "revision": "437e963022b899ff09e989224a42ba90"
  },
  {
    "url": "assets/img/hooks-diagram-template.bf7579e1.png",
    "revision": "bf7579e1f6e36a2f9585242446149c20"
  },
  {
    "url": "assets/img/item-collections.59bf2c4c.png",
    "revision": "59bf2c4c802c8fc5c68c359ecfa95398"
  },
  {
    "url": "assets/img/kano-3D.65e359f9.png",
    "revision": "65e359f95783bb99097fc5b763ec4151"
  },
  {
    "url": "assets/img/kano-components.ad92b7e2.png",
    "revision": "ad92b7e2f4bf02c26bb9e24b67f19b11"
  },
  {
    "url": "assets/img/kano-layout.702937a9.png",
    "revision": "702937a910e38ce3e140ae86cbfd5b3c"
  },
  {
    "url": "assets/img/kano-weather.2b6d4bbf.png",
    "revision": "2b6d4bbfa0992bbbbaae5745b2a7db4b"
  },
  {
    "url": "assets/img/kdk-workspace.d228efd0.png",
    "revision": "d228efd0427f5ee0027e9557bf11f9c8"
  },
  {
    "url": "assets/img/layers-panel.def38fe5.png",
    "revision": "def38fe54ce12f8b11b1d523eeacbaec"
  },
  {
    "url": "assets/img/marker-cluster-2D.63ae3032.png",
    "revision": "63ae3032f9266059c3d95ccb402b0608"
  },
  {
    "url": "assets/img/marker-cluster-3D.e8927429.png",
    "revision": "e892742919b7d249bada3f31153e11fa"
  },
  {
    "url": "assets/img/organizations-data-model.0d40de04.svg",
    "revision": "0d40de04d4ac06c438ad08de62bdbf6b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/storage-hooks.f7cd9bef.png",
    "revision": "f7cd9befe2f959dfbe39b009dcda2ea0"
  },
  {
    "url": "assets/img/tags-hooks.19298e57.png",
    "revision": "19298e5708cae740717b9063f3f8868c"
  },
  {
    "url": "assets/img/timeseries.370f7197.png",
    "revision": "370f7197130302dce62fdcd4d3be49ea"
  },
  {
    "url": "assets/img/users-data-model.e037f5f6.svg",
    "revision": "e037f5f6dd66241e355c8f7b559237e4"
  },
  {
    "url": "assets/img/users-hooks.506d5935.png",
    "revision": "506d59353934862bbe3bb0fb5210ffdc"
  },
  {
    "url": "assets/js/10.df94f51f.js",
    "revision": "1af18275a1e4383098114cec639d1ac6"
  },
  {
    "url": "assets/js/11.288a047e.js",
    "revision": "41c2bc9966e0b42927c707e34dc1f5f0"
  },
  {
    "url": "assets/js/12.be4330c5.js",
    "revision": "f8dc7998ecdc9a802d8dc16e9fc377eb"
  },
  {
    "url": "assets/js/13.893dbb92.js",
    "revision": "7f70bdd177cdc1acb84dacfff24f0dbe"
  },
  {
    "url": "assets/js/14.e02b2f7f.js",
    "revision": "52c5ffb20d2cb4fbd92d2e8a32068456"
  },
  {
    "url": "assets/js/15.fbcd425c.js",
    "revision": "ec48f5197d58e4118d29b40a0f2f55d9"
  },
  {
    "url": "assets/js/16.f2926829.js",
    "revision": "b0ab220637c2b0bc141a748111ced695"
  },
  {
    "url": "assets/js/17.8432ca96.js",
    "revision": "86a72d3086f6adce376f79d900a46629"
  },
  {
    "url": "assets/js/18.b0b69d45.js",
    "revision": "d6a1ead75a380c93d761d0cbf517c221"
  },
  {
    "url": "assets/js/19.6771d45d.js",
    "revision": "869abc1c151bdaae58e8b7854099c98b"
  },
  {
    "url": "assets/js/2.a75dded2.js",
    "revision": "b4964084f90a19819df0b6846eddbdbd"
  },
  {
    "url": "assets/js/20.0d959288.js",
    "revision": "08043bf7ce5bd34e4b72dda81960f728"
  },
  {
    "url": "assets/js/21.0f4447a7.js",
    "revision": "e77e74d94b1546b32d3d956097771241"
  },
  {
    "url": "assets/js/22.318e76dc.js",
    "revision": "94c6416d23f7eda235e821d7d909e5a3"
  },
  {
    "url": "assets/js/23.68549475.js",
    "revision": "846d2c39f137072df7f65a8ca62bc8ec"
  },
  {
    "url": "assets/js/24.c294c6b6.js",
    "revision": "d80611bbb2acbeb88933e35dfc8de1f2"
  },
  {
    "url": "assets/js/25.1ea98d22.js",
    "revision": "d982049243f67b08bb2d94cf72cda874"
  },
  {
    "url": "assets/js/26.c4d4e09d.js",
    "revision": "a0e66fa04955b0938acca61ad4cfe6e7"
  },
  {
    "url": "assets/js/27.a55b4b79.js",
    "revision": "fb4b8c8be70a25265036218413a18fc9"
  },
  {
    "url": "assets/js/28.fb33f918.js",
    "revision": "373f4df922291ce8d39a232aa34d3278"
  },
  {
    "url": "assets/js/29.67036f90.js",
    "revision": "0db7add6a48e5bfc0d736b4509e4413b"
  },
  {
    "url": "assets/js/3.e5a19f1a.js",
    "revision": "238607f717250888a9a81e98922b68b3"
  },
  {
    "url": "assets/js/30.8ac7aa4b.js",
    "revision": "535858ad0df6638c2ece7e56107b1138"
  },
  {
    "url": "assets/js/31.1c21120b.js",
    "revision": "ed0b03dd000a0b2e730dccdfa482b3ff"
  },
  {
    "url": "assets/js/32.f7f3a789.js",
    "revision": "6b53250042fd6b110d22437ee816b964"
  },
  {
    "url": "assets/js/33.b3743538.js",
    "revision": "b8d3b7aca10c8c6200b8aee3cf7a8202"
  },
  {
    "url": "assets/js/34.fa03596f.js",
    "revision": "40633e7901a862241195f8bbad9a9636"
  },
  {
    "url": "assets/js/35.b8e26439.js",
    "revision": "7d60495f4d460782a07124a8bbc5d0fa"
  },
  {
    "url": "assets/js/36.5d07c426.js",
    "revision": "2647d627d9a7d44040ca25674359c7c3"
  },
  {
    "url": "assets/js/37.63b9daa8.js",
    "revision": "2c51936a8f605bbb6db40192cc7b308c"
  },
  {
    "url": "assets/js/38.0f06d4ea.js",
    "revision": "92d051ba2bf2b3de46e37d3637408ca1"
  },
  {
    "url": "assets/js/39.e07d4572.js",
    "revision": "e2fed2b4d97e145559fc62c09c4186fe"
  },
  {
    "url": "assets/js/4.66807596.js",
    "revision": "532212b5be6cdb8f52e2fafac2534606"
  },
  {
    "url": "assets/js/40.62ba7745.js",
    "revision": "d89c449943fc9e12eb841bc3a7908ead"
  },
  {
    "url": "assets/js/41.2d3cc305.js",
    "revision": "5036d68389691d88958ad066d13b681d"
  },
  {
    "url": "assets/js/42.abb2d38b.js",
    "revision": "ed080faf88b8ff05d389f067bc823e5a"
  },
  {
    "url": "assets/js/43.471b5226.js",
    "revision": "be0f03c02c927a4013894fc3fa9077ce"
  },
  {
    "url": "assets/js/44.e3c2d27b.js",
    "revision": "d805d544abdece2c2cec6b0666fefff2"
  },
  {
    "url": "assets/js/45.416a8eb4.js",
    "revision": "e57654d01374e76ac527d84901224ecb"
  },
  {
    "url": "assets/js/46.a7a78828.js",
    "revision": "8b4692cb3cb5e87cb9d830908c2ce226"
  },
  {
    "url": "assets/js/47.586d84f2.js",
    "revision": "bdb2eccc6335e7566546d813a96431a3"
  },
  {
    "url": "assets/js/5.c7114d47.js",
    "revision": "9882ce7b8831345532c80cce38e4b8e9"
  },
  {
    "url": "assets/js/6.87bf1999.js",
    "revision": "105ecca8244dc930f63f54ff5e5f0fbd"
  },
  {
    "url": "assets/js/7.6af8861a.js",
    "revision": "d6d3fa6e01e169d6a8e1cd74e8a240a3"
  },
  {
    "url": "assets/js/8.cde45b70.js",
    "revision": "31304cddd02a01950df56b5eeef9eee2"
  },
  {
    "url": "assets/js/9.83ecdb5c.js",
    "revision": "74cadb40647f7a5a344d71c6f3c4d5fb"
  },
  {
    "url": "assets/js/app.42959372.js",
    "revision": "2d485ebf93ec3ac03ba9b3eee028ca29"
  },
  {
    "url": "guides/basics/step-by-step.html",
    "revision": "2dc6401423ec772b1078c91cca1581e8"
  },
  {
    "url": "guides/development/configure.html",
    "revision": "bcfa1c1211b8467b2a28e656bd4f66ed"
  },
  {
    "url": "guides/development/deploy.html",
    "revision": "5f82f7dd628ec4fc73a5ab3be14f57d3"
  },
  {
    "url": "guides/development/develop.html",
    "revision": "a2bb73526a0fb2b4571bb1ebe8e2853c"
  },
  {
    "url": "guides/development/publish.html",
    "revision": "93727d0f8f9d683b0a66cebc64099303"
  },
  {
    "url": "guides/development/setup.html",
    "revision": "b8c7bd5d6a35fb25fd19d919808a3274"
  },
  {
    "url": "guides/index.html",
    "revision": "abc666c080c82c42bbdc9c6c277206f4"
  },
  {
    "url": "index.html",
    "revision": "b6188c4e5c30c079d2b1148c2d4430a7"
  },
  {
    "url": "tips.html",
    "revision": "94092af433847b904961fab268e61084"
  },
  {
    "url": "tools/browsers.html",
    "revision": "744e4ddc3b2b24bc6e81e90fed385a2b"
  },
  {
    "url": "tools/cli.html",
    "revision": "c51d7308f431ec0caa3f940439095a35"
  },
  {
    "url": "tools/db.html",
    "revision": "3682ccf9984ce9e8f1322883b022c9ab"
  },
  {
    "url": "tools/documentation.html",
    "revision": "f4945041390ac86bb14c418527766c1a"
  },
  {
    "url": "tools/index.html",
    "revision": "c1da4c83feb46e5536ff8b8ccbfbc573"
  },
  {
    "url": "tools/infrastructure.html",
    "revision": "b4a567c486d1cb5c6e46719c13312268"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
