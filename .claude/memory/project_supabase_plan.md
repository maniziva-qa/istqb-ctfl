---
name: Supabase progress storage plan
description: User wants to migrate quiz/progress tracking from localStorage to a Supabase table
type: project
---

User wants to store quiz progress in Supabase instead of (or alongside) localStorage.

**Why:** Persistent storage across devices, better data durability than localStorage.

**How to apply:** When working on progress/storage features, plan a Supabase integration. Key things to implement:
- Create a Supabase project and get URL + anon key
- Design a table schema for progress (chapter scores, answered questions, streaks, daily activity)
- Replace or sync localStorage calls in app.js with Supabase reads/writes
- Handle anonymous vs authenticated users (may need auth or just a device UUID)
