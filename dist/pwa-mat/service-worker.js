"use strict";var precacheConfig=[["dist/pwa-mat/app.de2cafac7075eb6d3cfee6ebf82393ee.css","44ea7df081371d69f879232bf0699bf9"],["dist/pwa-mat/app.e03912aab34773c2b7b3b5f0d26a448d.css","9e9f429bf9d8d6396d2f7a05149e002c"],["dist/pwa-mat/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["dist/pwa-mat/fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["dist/pwa-mat/fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["dist/pwa-mat/fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["dist/pwa-mat/fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["dist/pwa-mat/fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["dist/pwa-mat/index.html","9b763371ff768b90149005a53be2e4e6"],["dist/pwa-mat/js/0.275a35ccf6a8c07674f1.js","81aa925e74a6b075676499cbec55bfc9"],["dist/pwa-mat/js/0.39ad102330fab345cd95.js","18c8b98a3126822b0e2b72c192fa57ad"],["dist/pwa-mat/js/0.b08cd822f72baf0321c4.js","8b1ffc73cb4e90b3a3c54b075305fd6c"],["dist/pwa-mat/js/0.dfad1fb98d93153837c6.js","4c7e1ff6487fefc461163e66c93adbc1"],["dist/pwa-mat/js/1.08a3082d4e32851f4824.js","0e58ca893c3e6b126ccf77cc6e8d9716"],["dist/pwa-mat/js/1.77651626df84eb4f4d4e.js","dc91cc3c0e85ed8b100092fcfb383310"],["dist/pwa-mat/js/1.7c3e39f08bf6c65c257f.js","ea584baafa2dc54dbe9843d88b97803b"],["dist/pwa-mat/js/1.86071cd4f86366f01594.js","6091e83ed49fcdc6171fa381f54613c7"],["dist/pwa-mat/js/2.698ed491942edf9954d0.js","930798c82da95cda19fab015d22c061d"],["dist/pwa-mat/js/app.84c09101fc3d007a2ebc.js","f3d2fa66069be836da8221ea7bad9504"],["dist/pwa-mat/js/app.f858666f33c69bb2d51a.js","067a5b2d79e8348a05f48a5d73d95552"],["dist/pwa-mat/js/vendor.a8bd09a8e64fdb160cc3.js","e9bb0034026ee01bfe1e98de962d4e30"],["dist/pwa-mat/js/vendor.e5b7d51b423c6811951f.js","3b431f643eaa683df67a50aad85cca38"],["dist/pwa-mat/js/vendor.e6aef907a03db774a393.js","43bbfa62b5482846d91bac89e1f9848f"],["dist/pwa-mat/js/vendor.f7cde2b46148587800fc.js","96e026dec1221733af2f1cc0c6e909ac"],["dist/pwa-mat/manifest.json","0a0289339de68c761047654189c85195"],["dist/pwa-mat/service-worker.js","6bc822afde3558f950df78e315559195"],["dist/pwa-mat/statics/afa-logo.png","6aaee387d822ccc08369d14d6de3c244"],["dist/pwa-mat/statics/icons/apple-icon-152x152.png","6aaee387d822ccc08369d14d6de3c244"],["dist/pwa-mat/statics/icons/favicon-16x16.png","47fbc62c4920a00b21a77b47a182e1dd"],["dist/pwa-mat/statics/icons/favicon-32x32.png","05fc1a3f65a605667310249b5af74c25"],["dist/pwa-mat/statics/icons/icon-128x128.png","0a3bd3fe45abe17f8aa661d702cab128"],["dist/pwa-mat/statics/icons/icon-192x192.png","25ef1d61e6cd320a759abd3b4140a5df"],["dist/pwa-mat/statics/icons/icon-256x256.png","6302baa4819bc873754ba303dea81e3f"],["dist/pwa-mat/statics/icons/icon-384x384.png","cc43f79a27f370a400cf9207b202a707"],["dist/pwa-mat/statics/icons/icon-512x512.png","9c5efc55c329f869ae242a2a3a3fca0a"],["dist/pwa-mat/statics/icons/ms-icon-144x144.png","8d1f6c3e9eceb295bc233a83f72e1f6a"],["dist/pwa-mat/statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-afap-pwa-demo-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var s=new URL(e);return c&&s.pathname.match(c)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),s=createCacheKey(c,hashParamName,t,!1);return[c.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));0,e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});