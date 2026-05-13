import { UsageRecord } from "@/types/audit";

export function parseUsageFile(
  text: string
): UsageRecord[] {
  try {
    const parsed = JSON.parse(text);

    return parsed;
  } catch (error) {
    console.error("Invalid JSON");

    return [];
  }
}