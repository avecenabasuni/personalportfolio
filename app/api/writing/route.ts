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

function normalizePublishedAt(pubDate?: string) {
  if (!pubDate) {
    return "";
  }

  const directDate = new Date(pubDate);
  if (!Number.isNaN(directDate.getTime())) {
    return directDate.toISOString();
  }

  const match = pubDate
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);

  if (!match) {
    return "";
  }

  const [, year, month, day, hour, minute, second = "0"] = match;
  const normalized = new Date(
    Date.UTC(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second),
    ),
  );

  if (Number.isNaN(normalized.getTime())) {
    return "";
  }

  return normalized.toISOString();
}

function buildFallbackItems() {
  return articles.map((article) => ({
    title: article.title,
    link: article.url,
    publishedAt: "",
    description: "",
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

function truncateDescription(input: string, maxLength = 120) {
  if (input.length <= maxLength) {
    return input;
  }

  return `${input.slice(0, maxLength).trim()}...`;
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
      publishedAt: normalizePublishedAt(item.pubDate),
      description: truncateDescription(stripHtml(item.description ?? "")),
      tags: item.categories ?? [],
      thumbnail: item.thumbnail ?? "",
    }));

    return NextResponse.json({ items: applyLimit(items) });
  } catch {
    return NextResponse.json({ items: applyLimit(buildFallbackItems()) });
  }
}
