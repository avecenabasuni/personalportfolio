"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { RefreshCwIcon } from "lucide-react";
import MediumWritingList from "@/components/writing/MediumWritingList";
import { sectionContent } from "@/lib/content";

type WritingSource = "medium" | "fallback";
type WritingFetchMeta = {
  fetchedAt: string;
  source: WritingSource;
};

function formatLastUpdated(timestamp: string) {
  if (!timestamp) {
    return "--";
  }

  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "--";
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Writing() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [fetchedAt, setFetchedAt] = useState("");
  const [source, setSource] = useState<WritingSource>("medium");
  const handleMetaChange = useCallback((meta: WritingFetchMeta) => {
    setFetchedAt(meta.fetchedAt);
    setSource(meta.source);
  }, []);

  const isDevRefreshEnabled = process.env.NODE_ENV !== "production";
  const sourceLabel = useMemo(
    () => (source === "medium" ? "Live feed" : "Fallback cache"),
    [source],
  );

  return (
    <section
      id="writing"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Writing
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground/70">
              {sectionContent.writing.description}
            </p>

            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/60">
              Last updated: {formatLastUpdated(fetchedAt)} · {sourceLabel}
            </p>

            {isDevRefreshEnabled ? (
              <button
                type="button"
                onClick={() => setRefreshKey((value) => value + 1)}
                className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 font-sans text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                <RefreshCwIcon size={14} />
                Refresh feed
              </button>
            ) : null}

            <div className="mt-5">
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground md:px-6 md:py-3"
              >
                View all writing
              </Link>
            </div>
          </div>

          <MediumWritingList
            mode="home"
            limit={3}
            refreshKey={refreshKey}
            onMetaChange={handleMetaChange}
          />
        </div>
      </div>
    </section>
  );
}
