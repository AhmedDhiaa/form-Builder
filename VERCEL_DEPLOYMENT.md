# Vercel Deployment Guide

## Issue Fixed

The build was failing because Next.js 16 was trying to statically pre-render pages that use authentication cookies. This caused the error:

\`\`\`
Dynamic server usage: Route couldn't be rendered statically because it used `cookies`.
\`\`\`

## Solution Applied

Added `export const dynamic = 'force-dynamic'` to all server components that use authentication:

### Files Updated:
1. `app/page.tsx` - Homepage with conditional authentication
2. `app/forms/page.tsx` - Forms list page (requires auth)
3. `app/forms/new/page.tsx` - New form creation (requires auth)
4. `app/dashboard/[id]/page.tsx` - Form dashboard (requires auth)

### Files That Don't Need Updates:
These are client components ("use client") and don't have the issue:
- `app/analytics/page.tsx`
- `app/forms/[id]/edit/page.tsx`
- `app/forms/[id]/responses/page.tsx`
- `app/forms/[id]/success/page.tsx`
- `app/login/page.tsx`
- `app/register/page.tsx`
- `app/setup/page.tsx`

## Environment Variables Required

When deploying to Vercel, you need to add these environment variables in your project settings:

\`\`\`env
DATABASE_URL=your_neon_database_url
SESSION_SECRET=your_secret_key_for_jwt
\`\`\`

## Deployment Steps

1. **Connect your GitHub repository** to Vercel
2. **Add environment variables** in Project Settings → Environment Variables
3. **Deploy** - Vercel will automatically build and deploy

The build should now succeed without any static rendering errors.

## What Changed

The `dynamic = 'force-dynamic'` export tells Next.js to:
- Skip static generation for these pages
- Render them dynamically on each request
- Allow the use of cookies and other dynamic APIs

This is the correct approach for authenticated pages that need to check user sessions on every request.
