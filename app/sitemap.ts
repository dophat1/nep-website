import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap {const base=process.env.NEXT_PUBLIC_SITE_URL||'https://example.com';return ['','platform','demo','company','contact'].map(path=>({url:`${base}/${path}`,changeFrequency:'monthly',priority:path?0.7:1}));}
