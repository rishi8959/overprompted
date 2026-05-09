export type ToolName =
  | "cursor"
  | "chatgpt"
  | "claude"
  | "github-copilot"
  | "openai-api"
  | "anthropic-api"
  | "gemini"
  | "windsurf";

export interface ToolUsage {
  tool: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditInput {
  teamSize: number;
  primaryUseCase:
    | "coding"
    | "writing"
    | "research"
    | "data"
    | "mixed";

  tools: ToolUsage[];
}

export interface Recommendation {
  tool: ToolName;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  reason: string;
}