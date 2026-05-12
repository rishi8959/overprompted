import { supabase } from "./supabase";

export async function saveAudit(
  findings: any[],
  totalSavings: number,
  uploadName: string
) {
  try {
    console.log("🚀 Saving audit...");

    const payload = {
      findings,
      total_savings: totalSavings,
      upload_name: uploadName,
    };

    console.log("📦 Payload:", payload);

    const { data, error } = await supabase
      .from("audits")
      .insert([payload])
      .select();

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return null;
    }

    console.log("✅ Saved successfully:", data);

    return data;
  } catch (err) {
    console.error("❌ Unexpected error:", err);
    return null;
  }
}