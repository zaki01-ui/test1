import { supabase } from "./supabase-client.js";

export async function fetchLatestPosts(limit = 60) {
  const { data, error } = await supabase
    .from("posts")
    .select("*, categories(slug, name_ar)")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Posts fetch error:", error);
    return [];
  }

  return data;
}

export async function fetchPostsByCategory(slug) {
  const { data, error } = await supabase
    .from("posts")
    .select("*, categories!inner(slug, name_ar)")
    .eq("categories.slug", slug)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Category posts fetch error:", error);
    return [];
  }

  return data;
}
