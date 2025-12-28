import { supabase } from "./supabase-client.js";

export async function fetchCategories() {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Categories fetch error:", error);
    return [];
  }

  return data;
}
