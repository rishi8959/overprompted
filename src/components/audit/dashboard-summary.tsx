import { UsageRecord } from "@/types/audit";

export function parseUsageData(
  text: string
): UsageRecord[] {
  try {
    return JSON.parse(text);
  } catch {
    return [];
  }
}