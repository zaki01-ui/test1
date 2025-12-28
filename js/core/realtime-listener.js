import { supabase } from "../data/supabase-client.js";
import { renderPostCard } from "../ui/posts-renderer.js";

export function watchNewPosts(container, postsArray, max = 60) {
  supabase
    .channel("posts-feed")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "posts" },
      payload => {
        postsArray.unshift(payload.new);

        if (postsArray.length > max) {
          postsArray.pop();
          container.removeChild(container.lastChild);
        }

        renderPostCard(payload.new, container, true);
      }
    )
    .subscribe();
}
