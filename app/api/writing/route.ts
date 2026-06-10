import { NextRequest, NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { articles } from "@/lib/data";
import {
  buildFallbackItems,
  formatMediumRssItem,
} from "@/lib/medium-rss.mjs";

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

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const refresh = request.nextUrl.searchParams.get("refresh") === "1";
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
      ...(refresh ? { cache: "no-store" as const } : { next: { revalidate: 300 } }),
    });

    if (!response.ok) {
      return NextResponse.json({
        items: applyLimit(buildFallbackItems(articles)),
        fetchedAt: new Date().toISOString(),
        source: "fallback",
      });
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

    const items = itemsList.map(formatMediumRssItem);

    return NextResponse.json({
      items: applyLimit(items),
      fetchedAt: new Date().toISOString(),
      source: "medium",
    });
  } catch {
    return NextResponse.json({
      items: applyLimit(buildFallbackItems(articles)),
      fetchedAt: new Date().toISOString(),
      source: "fallback",
    });
  }
}
