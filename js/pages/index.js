import { initHomeFeed } from "../core/home-feed-engine.js";
import { watchNewPosts } from "../core/realtime-listener.js";

document.addEventListener("DOMContentLoaded", async () => {
  await initHomeFeed();
});
