export function normalizePublishedAt(pubDate) {
  if (!pubDate) {
    return "";
  }

  const match = pubDate
    .trim()
    .match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);

  if (match) {
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

    return Number.isNaN(normalized.getTime()) ? "" : normalized.toISOString();
  }

  const directDate = new Date(pubDate);
  return Number.isNaN(directDate.getTime()) ? "" : directDate.toISOString();
}

export function stripHtml(input) {
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateDescription(input, maxLength = 120) {
  if (input.length <= maxLength) {
    return input;
  }

  const clipped = input.slice(0, maxLength).trim();
  const wordBoundary = clipped.replace(/\s+\S*$/, "").trim();
  return `${wordBoundary || clipped}...`;
}

export function normalizeCategories(category) {
  if (Array.isArray(category)) {
    return category;
  }

  return category ? [category] : [];
}

export function formatMediumRssItem(item) {
  return {
    title: item.title ?? "Untitled article",
    link: item.link ?? "#",
    publishedAt: normalizePublishedAt(item.pubDate),
    description: truncateDescription(
      stripHtml(item["content:encoded"] ?? item.description ?? ""),
    ),
    tags: normalizeCategories(item.category),
    thumbnail: "",
  };
}

export function buildFallbackItems(articles) {
  return articles.map((article) => ({
    title: article.title,
    link: article.url,
    publishedAt: "",
    description: "",
    tags: [],
    thumbnail: "",
  }));
}
