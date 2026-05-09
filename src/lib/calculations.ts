export function sumSavings(findings: { savings: number }[]) {
  return findings.reduce((acc, f) => acc + f.savings, 0);
}