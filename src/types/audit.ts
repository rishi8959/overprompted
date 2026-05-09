export interface UsageRecord {
  model: string;
  inputTokens: number;
  outputTokens: number;
  requests: number;
}

export interface AuditFinding {
  id: string;
  title: string;
  severity: "low" | "medium" | "high";
  savings: number;
  recommendation: string;
}