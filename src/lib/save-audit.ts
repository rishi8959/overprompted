import { supabase } from "./supabase";

export async function saveAudit(
  findings: any[],
  totalSavings: number,
  uploadName: string
) {
  const { data, error } = await supabase
    .from("audits")
    .insert([
      {
        findings,
        total_savings: totalSavings,
        upload_name: uploadName,
      },
    ]);

  if (error) {
    console.error(error);
  }

  return data;
}