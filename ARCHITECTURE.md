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

## Persistence Layer

The application now stores completed audits
inside Supabase.

### Storage Flow

Run Audit
→ Generate Findings
→ Calculate Savings
→ Save Audit to Supabase
→ Persist Historical Results

### Database Table

Table: audits

Columns:
- id
- created_at
- findings
- total_savings
- upload_name

### Benefits

- Persistent audit history
- Historical savings tracking
- Foundation for future analytics


---

# ✅ `ARCHITECTURE.md`

Add:

```md id="doc3"
# Upload Audit Architecture

## Flow

UploadForm
→ parser.ts
→ audit-engine.ts
→ calculations.ts
→ save-audit.ts
→ Supabase

## Components

### upload-form.tsx
Handles file uploads and file reading.

### parser.ts
Parses uploaded JSON into UsageRecord[].

### audit-engine.ts
Runs cost optimization rules.

### save-audit.ts
Stores findings and savings in Supabase.

# Audit History Architecture

## Data Flow

Supabase (audits table)
→ getAudits()
→ History Component
→ UI Rendering

## Components

### get-audits.ts
Fetches audit records from Supabase.

### history.tsx
Displays audit history with:
- loading state
- empty state
- data list

## Database

Table: audits

Used for persistent audit storage and history tracking.