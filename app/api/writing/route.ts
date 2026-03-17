import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/lib/data";

export const revalidate = 3600;

const MEDIUM_USERNAME = "avecenabasuni";
const MEDIUM_FEED_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  `https://medium.com/feed/@${MEDIUM_USERNAME}`,
)}`;

type Rss2JsonItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  thumbnail?: string;
  categories?: string[];
};

function buildFallbackItems() {
  return articles.map((article) => ({
    title: article.title,
    link: article.url,
    publishedAt: "",
    description: "Read this article on Medium.",
    tags: [],
    thumbnail: "",
  }));
}

function stripHtml(input: string) {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateDescription(input: string, maxLength = 150) {
  if (input.length <= maxLength) {
    return input;
  }

  const truncated = input.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}...`;
}

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const limit = limitParam ? Number(limitParam) : undefined;

  const applyLimit = <T,>(items: T[]) =>
    typeof limit === "number" && Number.isFinite(limit)
      ? items.slice(0, Math.max(0, limit))
      : items;

  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json({ items: applyLimit(buildFallbackItems()) });
    }

    const data = (await response.json()) as { items?: Rss2JsonItem[] };
    const items = (data.items ?? []).map((item) => ({
      title: item.title ?? "Untitled article",
      link: item.link ?? "#",
      publishedAt: item.pubDate ?? "",
      description: truncateDescription(stripHtml(item.description ?? "")),
      tags: item.categories ?? [],
      thumbnail: item.thumbnail ?? "",
    }));

    return NextResponse.json({ items: applyLimit(items) });
  } catch {
    return NextResponse.json({ items: applyLimit(buildFallbackItems()) });
  }
}
