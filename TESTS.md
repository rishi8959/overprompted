# Testing Strategy

## Areas Tested

- Audit engine rules
- Savings calculations
- Usage parsing

## Planned Tests

- Edge case handling
- Invalid JSON uploads
- Pricing accuracy validation

## Current Testing Coverage

- Audit rule execution
- Savings calculations
- Upload parsing
- Invalid JSON handling

## Planned Improvements

- Multi-file testing
- Performance benchmarking
- Edge-case validation

## Database Testing

Verified:
- successful audit insertion
- Supabase connection
- findings persistence
- savings value storage

## Current Coverage

- Audit engine logic
- Savings calculations
- Persistence workflow
- Frontend rendering

# Upload & Parser Testing

## Tested Cases

- Valid JSON upload
- Invalid JSON upload
- High GPT-4o usage detection
- Savings calculations
- Supabase persistence

## Manual Test Flow

1. Run local server
2. Upload sample-usage.json
3. Verify findings render
4. Verify audit saved in Supabase

# Day 7 Testing

## Tested Features
- Audit history loads correctly
- Empty state works when no data
- Loading state displays correctly
- New audits appear after upload
- Data persists in Supabase

## Manual Test Flow
1. Upload JSON file
2. Run audit
3. Confirm Supabase entry
4. Refresh page
5. Verify history appears