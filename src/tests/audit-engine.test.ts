it("downgrades cursor business for small teams", () => {
  const result = runAudit({
    teamSize: 2,
    primaryUseCase: "coding",
    tools: [
      {
        tool: "cursor",
        plan: "business",
        monthlySpend: 80,
        seats: 2,
      },
    ],
  });

  expect(result[0].monthlySavings).toBe(40);
});