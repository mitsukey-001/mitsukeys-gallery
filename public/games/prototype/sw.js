self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || !url.pathname.endsWith("/Build/ge-mu.wasm")) return;

  event.respondWith((async () => {
    const base = new URL("Build/", self.registration.scope);
    const responses = await Promise.all([
      fetch(new URL("ge-mu.wasm.part1", base)),
      fetch(new URL("ge-mu.wasm.part2", base)),
    ]);
    if (responses.some(response => !response.ok)) {
      return new Response("ゲームデータを読み込めませんでした。", { status: 502 });
    }
    const parts = await Promise.all(responses.map(response => response.arrayBuffer()));
    return new Response(new Blob(parts), {
      headers: {
        "Content-Type": "application/wasm",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  })());
});
