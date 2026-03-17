"use client";

import { useEffect } from "react";

type NewRelicClient = {
  addPageAction?: (name: string, attributes?: Record<string, unknown>) => void;
  recordCustomEvent?: (
    eventType: string,
    attributes?: Record<string, unknown>,
  ) => void;
};

declare global {
  interface Window {
    newrelic?: NewRelicClient;
  }
}

function getAttribute(node: HTMLElement, key: string) {
  return node.getAttribute(key) ?? "";
}

export default function InteractionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trackNode = target?.closest("[data-track-event]") as
        | HTMLElement
        | null;

      if (!trackNode) {
        return;
      }

      const eventName = getAttribute(trackNode, "data-track-event") || "click";
      const section = getAttribute(trackNode, "data-track-section") || "unknown";
      const label = getAttribute(trackNode, "data-track-label") || "unknown";
      const destination =
        getAttribute(trackNode, "href") ||
        getAttribute(trackNode, "data-track-destination") ||
        "unknown";

      const payload = {
        action: eventName,
        section,
        label,
        destination,
      };

      window.newrelic?.addPageAction?.("portfolio_interaction", payload);
      window.newrelic?.recordCustomEvent?.("PortfolioInteraction", payload);
    };

    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
