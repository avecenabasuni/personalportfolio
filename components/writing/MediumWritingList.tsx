"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { trackPortfolioInteraction } from "@/components/analytics/InteractionTracker";

type MediumArticle = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  tags: string[];
};

type WritingFetchMeta = {
  fetchedAt: string;
  source: "medium" | "fallback";
};

function formatDate(dateString: string) {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function estimateReadTime(description: string) {
  const wordCount = description.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 220));
}

function HomeSkeleton() {
  return (
    <ul className="w-full space-y-2">
      {[0, 1, 2].map((key) => (
        <li key={key} className="rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4">
          <div className="h-4 w-24 animate-pulse rounded bg-white/8" />
          <div className="mt-3 h-5 w-4/5 animate-pulse rounded bg-white/12" />
          <div className="mt-3 h-3 w-full animate-pulse rounded bg-white/8" />
          <div className="mt-2 h-3 w-4/6 animate-pulse rounded bg-white/7" />
        </li>
      ))}
    </ul>
  );
}

function PageSkeleton() {
  return (
    <div className="grid gap-3">
      {[0, 1, 2, 3, 4, 5].map((key) => (
        <div key={key} className="rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-5">
          <div className="h-4 w-24 animate-pulse rounded bg-white/8" />
          <div className="mt-3 h-6 w-3/4 animate-pulse rounded bg-white/12" />
          <div className="mt-3 h-3 w-full animate-pulse rounded bg-white/8" />
          <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-white/7" />
        </div>
      ))}
    </div>
  );
}

export default function MediumWritingList({
  limit,
  mode,
  refreshKey = 0,
  onMetaChange,
}: {
  limit?: number;
  mode: "home" | "page";
  refreshKey?: number;
  onMetaChange?: (meta: WritingFetchMeta) => void;
}) {
  const [items, setItems] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setHasError(false);
      const startedAt = performance.now();
      try {
        const params = new URLSearchParams();
        if (typeof limit === "number") {
          params.set("limit", String(limit));
        }
        if (refreshKey > 0) {
          params.set("refresh", "1");
          params.set("_", String(Date.now()));
        }

        const query = params.toString();
        const response = await fetch(`/api/writing${query ? `?${query}` : ""}`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = (await response.json()) as {
          items?: MediumArticle[];
          fetchedAt?: string;
          source?: "medium" | "fallback";
        };
        if (!cancelled) {
          setItems(data.items ?? []);
          trackPortfolioInteraction({
            action: "writing_feed_fetch",
            section: "writing",
            label: data.source ?? "fallback",
            destination: "/api/writing",
            count: data.items?.length ?? 0,
            durationMs: Math.round(performance.now() - startedAt),
            source: data.source ?? "fallback",
          });
          onMetaChange?.({
            fetchedAt: data.fetchedAt ?? new Date().toISOString(),
            source: data.source ?? "fallback",
          });
        }
      } catch {
        if (!cancelled) {
          setHasError(true);
          trackPortfolioInteraction({
            action: "writing_feed_fetch_error",
            section: "writing",
            label: "error",
            destination: "/api/writing",
            durationMs: Math.round(performance.now() - startedAt),
          });
          onMetaChange?.({
            fetchedAt: new Date().toISOString(),
            source: "fallback",
          });
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [limit, onMetaChange, refreshKey]);

  const allTags = useMemo(
    () => ["All", ...Array.from(new Set(items.flatMap((item) => item.tags)))],
    [items],
  );

  const visibleItems = useMemo(
    () =>
      selectedTag === "All"
        ? items
        : items.filter((item) => item.tags.includes(selectedTag)),
    [items, selectedTag],
  );

  useEffect(() => {
    if (selectedTag !== "All" && !allTags.includes(selectedTag)) {
      setSelectedTag("All");
    }
  }, [allTags, selectedTag]);

  const emptyMessage = useMemo(() => {
    if (hasError) {
      return "Unable to load writing feed right now. You can still open archived posts from my Medium profile.";
    }
    return "No published articles detected yet. New notes will appear here once they are live on Medium.";
  }, [hasError]);

  if (isLoading) {
    return mode === "home" ? <HomeSkeleton /> : <PageSkeleton />;
  }

  if (!items.length || hasError) {
    return (
      <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 font-sans text-sm text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  if (mode === "home") {
    return (
      <ul className="w-full space-y-2">
        {visibleItems.map((article, i) => (
          <li key={`${article.link}-${i}`}>
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="writing_open"
              data-track-section="writing"
              data-track-label={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              whileHover={{
                y: -2,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.16)",
                transition: { type: "spring", stiffness: 280, damping: 24 },
              }}
              transition={{
                duration: 0.45,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: i * 0.08,
              }}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-white/8 px-5 py-4 transition-colors"
            >
              <div>
                <span className="font-sans text-base leading-snug text-muted-foreground transition-colors group-hover:text-foreground">
                  {article.title}
                </span>
                {formatDate(article.publishedAt) ? (
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/60">
                    {formatDate(article.publishedAt)}
                  </p>
                ) : null}
                {article.description ? (
                  <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-muted-foreground/85">
                    {article.description}
                  </p>
                ) : null}
                {article.description ? (
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/55">
                    {estimateReadTime(article.description)} min read
                  </p>
                ) : null}
              </div>
              <ArrowUpRightIcon
                size={14}
                className="mt-0.5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-foreground"
              />
            </motion.a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="space-y-4">
      {allTags.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors ${
                selectedTag === tag
                  ? "border-white/24 bg-white/[0.1] text-foreground"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}

      {visibleItems.length ? (
        <div className="grid gap-3">
          {visibleItems.map((article, i) => (
        <motion.a
          key={`${article.link}-${i}`}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          data-track-event="writing_open"
          data-track-section="writing"
          data-track-label={article.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{
            duration: 0.45,
            ease: [0.21, 0.47, 0.32, 0.98],
            delay: i * 0.05,
          }}
          whileHover={{
            y: -2,
            backgroundColor: "rgba(255,255,255,0.06)",
            borderColor: "rgba(255,255,255,0.16)",
            transition: { type: "spring", stiffness: 280, damping: 24 },
          }}
          className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5 transition-colors"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-sans text-lg leading-snug text-foreground">
              {article.title}
            </h3>
            <ArrowUpRightIcon
              size={15}
              className="mt-1 shrink-0 text-muted-foreground/55"
            />
          </div>
          {formatDate(article.publishedAt) ? (
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/60">
              {formatDate(article.publishedAt)}
            </p>
          ) : null}
          {article.description ? (
            <p className="mt-3 line-clamp-2 font-sans text-base leading-relaxed text-muted-foreground">
              {article.description}
            </p>
          ) : null}
          {article.description ? (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground/55">
              {estimateReadTime(article.description)} min read
            </p>
          ) : null}
        </motion.a>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 font-sans text-sm text-muted-foreground">
          No articles match that tag yet.
        </div>
      )}
    </div>
  );
}
