import { UsageRecord, AuditFinding } from "@/types/audit";

export function runAudit(data: UsageRecord[]): AuditFinding[] {
  const findings: AuditFinding[] = [];

  data.forEach((item, index) => {
    const totalTokens = item.inputTokens + item.outputTokens;

    if (item.model === "gpt-4o" && totalTokens > 3000000) {
      findings.push({
        id: String(index),
        title: "High GPT-4o Usage",
        severity: "high",
        savings: totalTokens * 0.00001,
        recommendation: "Consider switching to Claude for simpler tasks",
      });
    }
  });

  return findings;
}