"use client";

import { useEffect, useState } from "react";
import { getAudits } from "@/lib/get-audits";

export default function History() {
  const [audits, setAudits] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);

      const data = await getAudits();
      setAudits(data);

      setLoading(false);
    }

    load();
  }, []);

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">
          Audit History
        </h2>

        <p className="text-blue-500">
          Loading history...
        </p>
      </div>
    );
  }

  // 2. EMPTY STATE
  if (audits.length === 0) {
    return (
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">
          Audit History
        </h2>

        <p className="text-gray-500">
          No audits found yet.
        </p>
      </div>
    );
  }

  // 3. NORMAL DATA STATE
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">
        Audit History
      </h2>

      <div className="space-y-3">
        {audits.map((a) => (
          <div
            key={a.id}
            className="border p-4 rounded"
          >
            <p className="font-semibold">
              {a.upload_name}
            </p>

            <p className="text-sm text-gray-500">
              Savings: ${a.total_savings}
            </p>

            <p className="text-xs text-gray-400">
              {new Date(a.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}