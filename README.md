# Nếp Technologies

Marketing website and interactive demo for a **fictional** Vietnamese B2B applied-AI startup. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion, Lucide icons, and Geist. All demo data is local and deterministic. No backend, API key, or paid service is used.

## Local setup

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run quality checks with:

```bash
npm run lint
npm run typecheck
npm run build
```

The production site is exported to `out/`.

## Configuration

Create `.env.local` for real, owner-controlled values:

```ini
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-account/your-repo
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

These values are intentionally unset in source. The contact page shows an unconfigured state until real values are supplied. Set `NEXT_PUBLIC_SITE_URL` before deployment so sitemap and Open Graph URLs point to the deployed domain. Values are embedded at build time.

## Cloudflare Pages

Connect the Git repository in Cloudflare Pages with:

| Setting | Value |
| --- | --- |
| Framework | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Output directory | `out` |
| Production branch | `main` |

Set the three `NEXT_PUBLIC_*` environment variables in Pages project settings before the production build. Use Node.js 20 or newer in the build environment. No server-side runtime, database, or deployment secret is needed.

## Demo data

`app/demo/data.ts` defines six fictional products and eleven fictional orders for Bình Minh Distribution. Revenue is the sum of fulfilled order-line quantity times catalog unit price. The trend groups fulfilled orders by date. Fulfillment counts orders marked `fulfilled`; stock alerts compare each inventory snapshot with its reorder point. Inventory is a separate snapshot and does not change when filtering or querying orders. All answers are calculated locally; the assistant does not call an AI model.

Language choice is stored in browser `localStorage` when available. The site works without storage.
