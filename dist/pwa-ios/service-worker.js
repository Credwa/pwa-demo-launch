"use strict";var precacheConfig=[["dist/pwa-ios/app.2f964af3da3ab56632fd014728f6083d.css","aa471a5261a8dab7754d0e810fd6d3a4"],["dist/pwa-ios/app.cd19a9eac5ec7f1b70ab588d56bf5c11.css","c6b5c69e1c7ad655811562e58039278f"],["dist/pwa-ios/fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["dist/pwa-ios/index.html","558b16dafa24772db71352b722336da2"],["dist/pwa-ios/js/0.2ac9cb922b7cc37ab814.js","ad0eea068f48c6960faa5d368ea34ce5"],["dist/pwa-ios/js/0.e8e2f9760f4f5abde189.js","611b1c54067096c85cfef6da7a54180f"],["dist/pwa-ios/js/1.a91ec347f0bc3fd4810b.js","d167fe93e738dec9a6be85f5d3993d76"],["dist/pwa-ios/js/1.aea7e7853f2b5ec9dff8.js","38f73334829fe9dd287e31936d0967f2"],["dist/pwa-ios/js/2.698ed491942edf9954d0.js","930798c82da95cda19fab015d22c061d"],["dist/pwa-ios/js/app.4afb7aeb6951cd19772c.js","b624dbf6d55e3793c7e1ea1c3362e4b6"],["dist/pwa-ios/js/app.ccfa5211031eca11035d.js","decfd8e1210e198257266c2112846066"],["dist/pwa-ios/js/vendor.3dead3f91491f61e2014.js","0278ad3d9d812077e253c8bbc9760c6b"],["dist/pwa-ios/js/vendor.3fc11c6885a645ec7191.js","e4e4a302464b799a4ffd2510c61fcd0a"],["dist/pwa-ios/manifest.json","72f1c5ddc2ad91fd9a73e7339765ab86"],["dist/pwa-ios/service-worker.js","c47093db0524ec27abd966b6252a2017"],["dist/pwa-ios/statics/afa-logo.png","6aaee387d822ccc08369d14d6de3c244"],["dist/pwa-ios/statics/icons/apple-icon-152x152.png","6aaee387d822ccc08369d14d6de3c244"],["dist/pwa-ios/statics/icons/favicon-16x16.png","47fbc62c4920a00b21a77b47a182e1dd"],["dist/pwa-ios/statics/icons/favicon-32x32.png","05fc1a3f65a605667310249b5af74c25"],["dist/pwa-ios/statics/icons/icon-128x128.png","0a3bd3fe45abe17f8aa661d702cab128"],["dist/pwa-ios/statics/icons/icon-192x192.png","25ef1d61e6cd320a759abd3b4140a5df"],["dist/pwa-ios/statics/icons/icon-256x256.png","6302baa4819bc873754ba303dea81e3f"],["dist/pwa-ios/statics/icons/icon-384x384.png","cc43f79a27f370a400cf9207b202a707"],["dist/pwa-ios/statics/icons/icon-512x512.png","9c5efc55c329f869ae242a2a3a3fca0a"],["dist/pwa-ios/statics/icons/ms-icon-144x144.png","8d1f6c3e9eceb295bc233a83f72e1f6a"],["dist/pwa-ios/statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-afap-pwa-demo-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),n=createCacheKey(s,hashParamName,t,!1);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,s),e=urlsToCacheKeys.has(t));0,e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});