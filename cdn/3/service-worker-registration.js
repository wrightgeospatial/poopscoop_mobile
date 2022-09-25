"use strict";function clearCache(){if(!window.caches)return;if(!window.jimuConfig.buildNumber)return;const e=readCachedBuildNumber();e?window.jimuConfig.buildNumber!==e&&(caches.delete("exb-assets-cache"),caches.delete("arcgis-jsapi-cache"),setCachedBuildNumber(window.jimuConfig.buildNumber)):setCachedBuildNumber(window.jimuConfig.buildNumber)}function readCachedBuildNumber(){try{return localStorage.getItem("exb-build-number")}catch(e){return console.error("Read Local storage error.",e),null}}function setCachedBuildNumber(e){try{return localStorage.setItem("exb-build-number",e)}catch(e){return console.error("Set Local storage error.",e),null}}"serviceWorker"in navigator&&(window.addEventListener("load",(function(){navigator.serviceWorker.register(window.jimuConfig.mountPath+"service-worker.js").then((function(e){console.log("Register a service worker.")})).catch((function(e){console.error("Error during service worker registration:",e)}))})),clearCache());