self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("sw-cache").then(function(cache) {
      return cache.add("index.html");
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})