"use client";

import { useState } from "react";

import UploadForm from "@/components/audit/upload-form";

import { parseUsageFile } from "@/lib/parser";

import { saveAudit } from "@/lib/save-audit";

import { runAudit } from "@/lib/audit-engine";

import { sumSavings } from "@/lib/calculations";

export default function Home() {
  const [results, setResults] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async (
    text: string
  ) => {
    setLoading(true);

    const usage =
      parseUsageFile(text);

    if (usage.length === 0) {
      alert("Invalid usage file");

      setLoading(false);

      return;
    }

    const findings =
      runAudit(usage);

    setResults(findings);

    const totalSavings =
      sumSavings(findings);

    await saveAudit(
      findings,
      totalSavings,
      "uploaded-file"
    );

    setLoading(false);
  };

  const totalSavings =
    sumSavings(results);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        AI Spend Audit
      </h1>

      <UploadForm
        onUpload={handleUpload}
      />

      {loading && (
        <p className="mb-4 text-blue-600">
          Running audit...
        </p>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold">
          Estimated Savings:
          ${totalSavings.toFixed(2)}
        </h2>
      </div>

      {results.length === 0 && (
        <p className="mt-6 text-gray-500">
          No audit results yet.
        </p>
      )}

      <div className="mt-6 space-y-4">
        {results.map((r) => (
          <div
            key={r.id}
            className="border rounded p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">
                {r.title}
              </h3>

              <span className="text-sm px-2 py-1 rounded bg-gray-200">
                {r.severity}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Category: {r.category}
            </p>

            <p className="text-sm text-gray-500">
              Confidence: {r.confidence}%
            </p>

            <p className="mt-3">
              {r.recommendation}
            </p>

            <p className="mt-3 text-green-600 font-medium">
              Estimated Savings: $
              {r.savings.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}