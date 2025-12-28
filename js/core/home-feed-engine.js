import { fetchLatestPosts } from "../data/posts.service.js";
import { renderPostCard } from "../ui/posts-renderer.js";

const MAX_POSTS = 60;
const container = document.getElementById("posts-container");

let currentPosts = [];

export async function initHomeFeed() {
  currentPosts = await fetchLatestPosts(MAX_POSTS);
  renderAll();
}

function renderAll() {
  container.innerHTML = "";
  currentPosts.forEach(post => renderPostCard(post, container));
}
