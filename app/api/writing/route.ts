import { NextRequest, NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { articles } from "@/lib/data";

export const revalidate = 300;

const MEDIUM_USERNAME = "avecenabasuni";
const MEDIUM_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

type MediumRssItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  category?: string[] | string;
  "content:encoded"?: string;
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
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return NextResponse.json({ items: applyLimit(buildFallbackItems()) });
    }

    const rawXml = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      parseTagValue: false,
      trimValues: true,
    });

    const parsed = parser.parse(rawXml) as {
      rss?: {
        channel?: {
          item?: MediumRssItem | MediumRssItem[];
        };
      };
    };

    const rawItems = parsed.rss?.channel?.item;
    const itemsList = Array.isArray(rawItems)
      ? rawItems
      : rawItems
        ? [rawItems]
        : [];

    const items = itemsList.map((item) => ({
      title: item.title ?? "Untitled article",
      link: item.link ?? "#",
      publishedAt: normalizePublishedAt(item.pubDate),
      description: truncateDescription(
        stripHtml(item["content:encoded"] ?? item.description ?? ""),
      ),
      tags: Array.isArray(item.category)
        ? item.category
        : item.category
          ? [item.category]
          : [],
      thumbnail: "",
    }));

    return NextResponse.json({ items: applyLimit(items) });
  } catch {
    return NextResponse.json({ items: applyLimit(buildFallbackItems()) });
  }
}
