import { supabase } from "./supabase";

export async function getAudits() {
  const { data, error } = await supabase
    .from("audits")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Fetch audits error:", error);
    return [];
  }

  return data;
}