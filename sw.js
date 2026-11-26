// Service worker de Tribuna: permite usar la app sin conexión.
// La página principal se pide primero a la red (para recibir actualizaciones)
// y cae a la caché si no hay conexión; el resto se sirve desde la caché.
const CACHE = "tribuna-v2";
const ASSETS = ["./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(new URL("./index.html", self.location).href, copy)); return res; })
      .catch(() => caches.match(new URL("./index.html", self.location).href)));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
