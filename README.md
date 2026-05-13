# AI Spend Audit

An AI cost optimization platform that analyzes LLM usage
and identifies savings opportunities.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local Setup

npm install
npm run dev

## Documentation

- ARCHITECTURE.md
- DEVLOG.md
- TESTS.md

# Features

- Upload AI usage JSON files
- Run automated audit analysis
- Detect inefficient AI usage patterns
- Generate savings recommendations
- Severity-based findings
- Confidence scoring system
- Estimated savings calculation

# Current Capabilities

- GPT-4o optimization detection
- Output token waste analysis
- Request fragmentation analysis
- Context window optimization checks

# Deployment

Hosted on Vercel.

# Backend Integration

The project now includes Supabase integration
for persistent audit storage.

## Features

- Save completed audits
- Store findings as JSON
- Track estimated savings
- Historical audit persistence

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase
- Vercel

## Current Workflow

Run Audit
→ Generate Findings
→ Save Audit
→ Persist Results

## Upload Workflow

The application now supports real JSON uploads.

### Example Usage File

```json
[
  {
    "model": "gpt-4o",
    "inputTokens": 5000000,
    "outputTokens": 4000000
  }
]

## Audit History Feature

The app now supports viewing past audits stored in Supabase.

### Features
- Real-time audit history fetch
- Sorted by latest first
- Shows upload name, savings, timestamp
- Handles loading and empty states

### Flow
Upload → Run Audit → Save to Supabase → View in History