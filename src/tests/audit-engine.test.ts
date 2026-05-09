import { runAudit } from "@/lib/audit-engine";
import { describe, it, expect } from "vitest";

describe("audit engine", () => {
  it("detects high usage", () => {
    const result = runAudit([
      {
        model: "gpt-4o",
        inputTokens: 2000000,
        outputTokens: 4000000,
        requests: 1000,
      },
    ]);

    expect(result.length).toBeGreaterThan(0);
  });
});