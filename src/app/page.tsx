"use client";

import { mockUsage } from "@/data/mock-usage";
import { runAudit } from "@/lib/audit-engine";
import { sumSavings } from "@/lib/calculations";
import { useState } from "react";

export default function Home() {
  const [results, setResults] = useState<any[]>([]);

  const handleRunAudit = () => {
    const findings = runAudit(mockUsage);
    setResults(findings);
  };

  const totalSavings = sumSavings(results);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        AI Spend Audit
      </h1>

      <button
        onClick={handleRunAudit}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Run Audit
      </button>

      <h2 className="mt-6 font-semibold">
        Estimated Savings: ${totalSavings.toFixed(2)}
      </h2>

      <div className="mt-4 space-y-2">
        {results.map((r) => (
          <div key={r.id} className="p-3 border rounded">
            <p className="font-medium">{r.title}</p>
            <p className="text-sm">{r.recommendation}</p>
            <p className="text-green-600">
              Save: ${r.savings.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}