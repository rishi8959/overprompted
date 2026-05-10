import { UsageRecord } from "@/types/audit";

export function parseUsageData(
  text: string
): UsageRecord[] {
  return JSON.parse(text);
}