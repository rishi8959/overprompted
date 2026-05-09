if (
  tool.tool === "cursor" &&
  tool.plan === "business" &&
  tool.seats <= 2
) {
  recommendations.push({
    tool: "cursor",
    currentSpend: 80,
    recommendedSpend: 40,
    monthlySavings: 40,
    annualSavings: 480,
    reason:
      "Cursor Business is typically unnecessary for teams under 3 seats.",
  });
}