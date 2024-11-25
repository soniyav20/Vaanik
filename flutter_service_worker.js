'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "43656506db8adb7719156b6611597815",
"version.json": "a3322b2f035e5345663b567001345585",
"index.html": "ec03913f3feca3c857f39c99fcb1acf1",
"/": "ec03913f3feca3c857f39c99fcb1acf1",
"main.dart.js": "30e2cda69a6fc9468304c0b01678b04f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "6f16f16ffdb803277019a5227a89036c",
"icons/Icon-192.png": "ad233d31a3f2c1a55b1dc018854da9ef",
"icons/Icon-maskable-192.png": "ad233d31a3f2c1a55b1dc018854da9ef",
"icons/Icon-maskable-512.png": "e80255fa3ce34a617bc82254c6a7e1bf",
"icons/Icon-512.png": "e80255fa3ce34a617bc82254c6a7e1bf",
"manifest.json": "c225de36814861b6009140c7e951f0cb",
".git/config": "fae6de1a527ffe75ab687e3bc2ddba58",
".git/objects/0d/1ee3052669945afed1b612cea314ba6c499fc3": "a808a2a6e06f4062a299ad47bf7edc9a",
".git/objects/3e/64c66a197f276d5728a520ccb056c88a4ccf86": "c6319a1d654f22dd3cb9052a6af3afd6",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/04a4db732b794029ac25398e7ff9bce2983420": "666184c15b45cdb2694a4b18596bdb43",
".git/objects/9b/dbfb0313ec3b28481174257fdf9043ca29916c": "424e367bd1e01770cec6c476c2c52367",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/5f/5a96ee945952c8020c5e1ae7a128a182b0af64": "6fec61a606fb7a2795a2b58b9585efb6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/badd1fb2baae2e92190992f6110610dee16130": "0db63e496659476a553504bcd2a8ce79",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/6c542118f3da52e44a2fbac792296a3c79585d": "c4297d46ea57c3776b554b9c5bb04695",
".git/objects/c6/b0125596b1434b989c0243c130d69f2a27151e": "7148f6fc2b44424374bded4b2d69d1b4",
".git/objects/4e/229ef8c1f3b69774c93462d727066348d5f5a8": "f14d1feaba4d4789c13dd23f1f9673aa",
".git/objects/4e/f461300e9f73a95fb400456dc80f3ab1d7c8c9": "633c9e6c4f21fa3acb961cc3fa146ea2",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/27/f728ba5ffbe8cee4ca4c3278779c0cdf12537f": "a36e6c19076034b937af43f0bd072fbb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/5ea9f47575bb906a74c79ddc44fe24cf7a4f56": "83612a89a52c6f65c5a1895b9fb30177",
".git/objects/87/c8bd38a82e12249fbd945733963e9ba9f53a8c": "f3d319efc2f72716538be56fc84c78c0",
".git/objects/1a/20e2311ed810801947081370a9fd4b1a726bfc": "6605d06783a062b818189b0784d33ec1",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/72/6be28f475e1151f452ceb60b95857c9565f40c": "185216cf214ec6769a89953b6970e0e9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/2f/5f2ff21bf7a82bd77109497fe5f2545a9a3d89": "74934a5b9ba86680e4a5b4a4874629f6",
".git/objects/88/de01b84d23b4ed98f73a931f590181ce1d7dd0": "db0a2a66312ec7e0d5bb3245b4e65e3d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/6f37b65fcafb06dc609c66a04b9218fd87a096": "852d61b73c4409df811d56ad05254711",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/30/a8a781248ee841b94b8f613ed371abd16c36ea": "41dc4df5cf9a0f86b3f480e7b2381100",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/52/57420c1472517277532b9778f23060591fcf70": "55f0a94609ddb84c5738afd70c824620",
".git/objects/90/1bb222f9c8650d1d9579cafb22859aafd68c4b": "5dd1abbb008225589bbfc19fdf9da3b7",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/0fb501a5e1c609a941c9b4fa43833ce0987489": "53c75589b8f6c220bb34acf723bca616",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/759e7b6738dfb06e089617d0e177ce6683efe0": "a9e47328eb4755f4f8e939da4f789af6",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/73c706b70bda348488d312bcb2541896490fe0": "4d245208dea15404ebf59c297772873b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/3fc653283f773224e426f7208b903620546d5e": "829cb66feb4d01eaabfe1018c774fcbf",
".git/objects/db/030332b9223fd3b082b0864f2740e5211dd211": "1cdc006f887aec528803f96f4b9bf3b5",
".git/objects/de/ccaf46c592d621bdfe8284f682c871fcccc3a9": "5fc66c1e0e0fd47d322a8d72b40503a9",
".git/objects/b9/1ec46efa00967ba484dc63b9461743176ef0b1": "ce9fb441b278228fa96d171405a56fd3",
".git/objects/ea/a4c4bae77560cb73a117000a29d1fdfb17bad7": "dee6c26c9a2aff79b16d30d498b0d950",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/1e/00f525d9739a2410fb5c4787d602a7a20f1357": "0dbbb89a723eced649b7ff899fb953ae",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/4a4c1ef2ecb87dd19084133318f58f94683363": "9cb1e31bfe1094f931f6e51c02006d55",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/419c8d212146c075f979d27b2939094a01dc70": "36bcf9c673681b0668ce51603742a045",
".git/objects/15/272dd90936a69a6de9d2a9c62b447693d1fe43": "cd96a1e03d3150583c1ffb086882bdd9",
".git/objects/85/5754a4fd1ba35528ca0cb28a6779676be28b3e": "60d2b9a2bf3d2e7f6ea738e0da96cf48",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/40/bae3730b0c9ca341bc68cbb773056ff2abedf3": "12e953b0d49a6e03438fdad3bbffbd69",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/7f/002af0cf1fae99a1ad64f17b0e5dabda292d27": "47f530e40fef68946b372216ee4fcbb7",
".git/objects/14/5f2df5faa6b47b3a0fe8debfe0cbc4cbba39e5": "0be1eb3c02544fce8d825ae5a46ac5e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac8609e07a50e075e3747c92cd93db84",
".git/logs/refs/heads/main": "e55c18db594c641a2092678f735cda9b",
".git/logs/refs/remotes/origin/main": "36ca2238d18d9c3c88204ec8dd19c7f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0899923e228bc6ddfe79ff064c9f5c22",
".git/refs/remotes/origin/main": "0899923e228bc6ddfe79ff064c9f5c22",
".git/index": "4ca62feecad04152d90c59d69b44c4a8",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "6f16c36109a3ab651d236708f3559f88",
"assets/NOTICES": "86b1392900c345fc4c6fbcea252ea7e3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "0f2a88b4a8950977603b0bd84b36a17c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "75d03d863a8c4f3fa9716d324f4fa606",
"assets/fonts/MaterialIcons-Regular.otf": "24b4ab4fec6d5b30fe1c3690af92f82f",
"assets/assets/download.jpeg": "00bfe657383d1f1432de607dc81384ed",
"assets/assets/img_1.png": "dc2224636dc9468b3fcdeb93a32bc3fc",
"assets/assets/welcome.jpeg": "8d066dc5c2e507c043c21fadc4619514",
"assets/assets/truck_side.png": "bfb06d610072fa009c2c2fcd61d0aff4",
"assets/assets/img.png": "fcbd11d2c7ef1f0a73ed20aa260fcab6",
"assets/assets/logo.jpg": "d14278ac580de34ac1c5fdebcc6691d7",
"assets/assets/truck_back.png": "b602bce523506f84e0266b55ab844a2e",
"assets/assets/logos.png": "eae68edbcec6c63440fa4bad112c2eda",
"assets/assets/imgimg.png": "92737d76b516aaa3b948754d74ebf1d1",
"assets/assets/truck_front.png": "bb441b8a6fbf21b65490c2a0e5fa6735",
"assets/assets/welcome.png": "328df16335d9e60cf261eec9a4c6186f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
