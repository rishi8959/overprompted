# Architecture

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Core Modules

- Pricing Engine
- Audit Engine
- File Parser
- Findings Renderer

## Data Flow

Upload File
→ Parse Usage Data
→ Run Audit Rules
→ Generate Findings
→ Calculate Savings
→ Render Results

## Audit Engine Architecture

The audit engine processes uploaded AI usage data
and applies deterministic optimization rules.

### Current Rule Categories

- Model Optimization
- Token Efficiency
- Request Batching
- Prompt Optimization

### Audit Flow

Upload File
→ Parse Usage Data
→ Execute Audit Rules
→ Generate Findings
→ Calculate Savings
→ Render Dashboard

### Finding Structure

Each finding includes:
- severity
- confidence score
- estimated savings
- optimization recommendation