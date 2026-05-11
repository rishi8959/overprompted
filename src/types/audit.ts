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

  category: string;

  confidence: number;

  savings: number;

  recommendation: string;
}