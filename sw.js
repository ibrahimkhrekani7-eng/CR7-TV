const CACHE_NAME = 'iptv-master-v5';
const ASSETS_TO_CACHE = ['./', './index.html', './admin.html', './src/style.css', './src/app.js', './src/admin.js', './src/firebase-config.js', './manifest.json'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS_TO_CACHE))));
self.addEventListener('fetch', (e) => e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))));