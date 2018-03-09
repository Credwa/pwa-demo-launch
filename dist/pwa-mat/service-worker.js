"use strict";var precacheConfig=[["/app.de2cafac7075eb6d3cfee6ebf82393ee.css","44ea7df081371d69f879232bf0699bf9"],["/app.e03912aab34773c2b7b3b5f0d26a448d.css","9e9f429bf9d8d6396d2f7a05149e002c"],["/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["/fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["/fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["/fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["/fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["/fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["/index.html","f5e91873209260fc3f15d8a139563a62"],["/js/0.275a35ccf6a8c07674f1.js","81aa925e74a6b075676499cbec55bfc9"],["/js/0.2eb8dae4682ba09e04a4.js","7c9fd7df168c8adfb3460f8ded4cf495"],["/js/0.39ad102330fab345cd95.js","18c8b98a3126822b0e2b72c192fa57ad"],["/js/0.4535c6d14e5a2ff41ff8.js","8e24cfc177bd76eb09a920d49c43129d"],["/js/0.49c4d907354f2d188c49.js","0cf1c0178a0de0a669f69049fd17d1fa"],["/js/0.803e15254f7500336bfa.js","d0943378fc3a7b998a03f9d67214a473"],["/js/0.979bcbea89649a17e76a.js","2a5ea38e4021567689ea6f3bca5fe5ea"],["/js/0.b08cd822f72baf0321c4.js","8b1ffc73cb4e90b3a3c54b075305fd6c"],["/js/0.dfad1fb98d93153837c6.js","4c7e1ff6487fefc461163e66c93adbc1"],["/js/1.08a3082d4e32851f4824.js","0e58ca893c3e6b126ccf77cc6e8d9716"],["/js/1.77651626df84eb4f4d4e.js","dc91cc3c0e85ed8b100092fcfb383310"],["/js/1.7c3e39f08bf6c65c257f.js","ea584baafa2dc54dbe9843d88b97803b"],["/js/1.86071cd4f86366f01594.js","6091e83ed49fcdc6171fa381f54613c7"],["/js/2.698ed491942edf9954d0.js","930798c82da95cda19fab015d22c061d"],["/js/app.84c09101fc3d007a2ebc.js","f3d2fa66069be836da8221ea7bad9504"],["/js/app.f858666f33c69bb2d51a.js","067a5b2d79e8348a05f48a5d73d95552"],["/js/vendor.15bd87908e767ce55a87.js","18af95cc13fc472c0c44f1c261550a83"],["/js/vendor.a8bd09a8e64fdb160cc3.js","e9bb0034026ee01bfe1e98de962d4e30"],["/js/vendor.a94db21789a2dd9f89d9.js","92342ec5088e75868f6f9b3ba89d7179"],["/js/vendor.d9b2ad10df84da4c76c9.js","0b9ee3e457d1edd26df764908b57b676"],["/js/vendor.e5b7d51b423c6811951f.js","3b431f643eaa683df67a50aad85cca38"],["/js/vendor.e6aef907a03db774a393.js","43bbfa62b5482846d91bac89e1f9848f"],["/js/vendor.f7cde2b46148587800fc.js","96e026dec1221733af2f1cc0c6e909ac"],["/js/vendor.fefa83ab5d63f73d8750.js","31fb3aa29b4762fe13765688111e576d"],["/js/vendor.ffab45fba55dfc5bbd5e.js","a50e38894d5f6d0737e273728d650f85"],["/manifest.json","92d50fb6d9163c82eff2a63664f8a800"],["/service-worker.js","31d48b4bf326486f00f167145a8e165c"],["/statics/afa-logo.png","6aaee387d822ccc08369d14d6de3c244"],["/statics/icons/apple-icon-152x152.png","6aaee387d822ccc08369d14d6de3c244"],["/statics/icons/favicon-16x16.png","47fbc62c4920a00b21a77b47a182e1dd"],["/statics/icons/favicon-32x32.png","05fc1a3f65a605667310249b5af74c25"],["/statics/icons/icon-128x128.png","0a3bd3fe45abe17f8aa661d702cab128"],["/statics/icons/icon-192x192.png","25ef1d61e6cd320a759abd3b4140a5df"],["/statics/icons/icon-256x256.png","6302baa4819bc873754ba303dea81e3f"],["/statics/icons/icon-384x384.png","cc43f79a27f370a400cf9207b202a707"],["/statics/icons/icon-512x512.png","9c5efc55c329f869ae242a2a3a3fca0a"],["/statics/icons/ms-icon-144x144.png","8d1f6c3e9eceb295bc233a83f72e1f6a"],["/statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-afap-pwa-demo-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var t=new URL(a);return"/"===t.pathname.slice(-1)&&(t.pathname+=e),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,t,c){var s=new URL(a);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var t=new URL(e).pathname;return a.some(function(a){return t.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return t.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],t=a[1],c=new URL(e,self.location),s=createCacheKey(c,hashParamName,t,!1);return[c.toString(),s]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return c.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(t)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});