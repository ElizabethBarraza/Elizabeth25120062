const CACHE_NAME = "katzenbach-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/Style.css",
  "./js/app.js",
  "./images/clubpsico.jpeg",
  "./images/historialoco.webp",
  "./images/juegos.jpg",
  "./images/profesor.jpeg",
  "./images/videoClub.mp4"
];

// Instalación
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activación
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Fetch (offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
