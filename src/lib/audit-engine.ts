import { UsageRecord, AuditFinding } from "@/types/audit";

export function runAudit(
  data: UsageRecord[]
): AuditFinding[] {
  const findings: AuditFinding[] = [];

  data.forEach((item, index) => {
    const totalTokens =
      item.inputTokens + item.outputTokens;

    /*
      Rule 1:
      Expensive model overuse
    */
    if (
      item.model === "gpt-4o" &&
      totalTokens > 3000000
    ) {
      findings.push({
        id: `high-usage-${index}`,
        title: "High GPT-4o Usage",
        severity: "high",
        category: "Model Optimization",
        confidence: 92,
        savings: totalTokens * 0.00001,
        recommendation:
          "Switch lightweight tasks to GPT-4o Mini or Claude Haiku.",
      });
    }

    /*
      Rule 2:
      Excessive output generation
    */
    if (item.outputTokens > item.inputTokens * 2) {
      findings.push({
        id: `output-waste-${index}`,
        title: "Excessive Output Token Usage",
        severity: "medium",
        category: "Token Efficiency",
        confidence: 84,
        savings: item.outputTokens * 0.000005,
        recommendation:
          "Reduce verbose responses and enforce shorter completions.",
      });
    }

    /*
      Rule 3:
      High request fragmentation
    */
    if (item.requests > 10000) {
      findings.push({
        id: `fragmentation-${index}`,
        title: "High Request Fragmentation",
        severity: "medium",
        category: "Batching",
        confidence: 78,
        savings: item.requests * 0.002,
        recommendation:
          "Batch smaller requests together to reduce API overhead.",
      });
    }

    /*
      Rule 4:
      Large context waste
    */
    if (item.inputTokens > 5000000) {
      findings.push({
        id: `context-${index}`,
        title: "Large Context Window Waste",
        severity: "high",
        category: "Prompt Optimization",
        confidence: 88,
        savings: item.inputTokens * 0.000004,
        recommendation:
          "Trim repeated prompt context and reduce unnecessary history.",
      });
    }
  });

  return findings;
}