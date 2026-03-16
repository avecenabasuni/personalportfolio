"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";

type MediumArticle = {
  title: string;
  link: string;
  publishedAt: string;
  description: string;
  tags: string[];
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function HomeSkeleton() {
  return (
    <ul className="w-full space-y-2">
      {[0, 1, 2].map((key) => (
        <li key={key} className="rounded-2xl border border-white/8 px-5 py-4">
          <div className="h-5 w-4/5 animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-white/8" />
          <div className="mt-3 h-3 w-full animate-pulse rounded bg-white/8" />
        </li>
      ))}
    </ul>
  );
}

function PageSkeleton() {
  return (
    <div className="grid gap-3">
      {[0, 1, 2, 3, 4, 5].map((key) => (
        <div key={key} className="rounded-2xl border border-white/8 px-5 py-5">
          <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-3 w-1/4 animate-pulse rounded bg-white/8" />
          <div className="mt-4 h-3 w-full animate-pulse rounded bg-white/8" />
          <div className="mt-2 h-3 w-5/6 animate-pulse rounded bg-white/8" />
        </div>
      ))}
    </div>
  );
}

export default function MediumWritingList({
  limit,
  mode,
}: {
  limit?: number;
  mode: "home" | "page";
}) {
  const [items, setItems] = useState<MediumArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const query = typeof limit === "number" ? `?limit=${limit}` : "";
        const response = await fetch(`/api/writing${query}`);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = (await response.json()) as { items?: MediumArticle[] };
        if (!cancelled) {
          setItems(data.items ?? []);
        }
      } catch {
        if (!cancelled) {
          setHasError(true);
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
  }, [limit]);

  const emptyMessage = useMemo(() => {
    if (hasError) {
      return "Unable to load articles right now. Please try again later.";
    }
    return "No published articles found yet.";
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
        {items.map((article, i) => (
          <li key={`${article.link}-${i}`}>
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
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
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/60">
                  {formatDate(article.publishedAt)}
                </p>
                <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-muted-foreground/85">
                  {article.description}
                </p>
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
    <div className="grid gap-3">
      {items.map((article, i) => (
        <motion.a
          key={`${article.link}-${i}`}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{
            duration: 0.45,
            ease: [0.21, 0.47, 0.32, 0.98],
            delay: i * 0.05,
          }}
          className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5 transition-colors hover:border-white/16"
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
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/60">
            {formatDate(article.publishedAt)}
          </p>
          <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">
            {article.description}
          </p>
          {article.tags.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </motion.a>
      ))}
    </div>
  );
}
