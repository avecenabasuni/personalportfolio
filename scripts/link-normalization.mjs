export function normalizeInternalPath(value) {
  const hashIndex = value.indexOf("#");
  const routeWithQuery =
    hashIndex >= 0 ? value.slice(0, hashIndex) : value;
  const hashWithQuery = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
  const route = routeWithQuery.split("?")[0] || "/";
  const hash = hashWithQuery.split("?")[0];

  return {
    route,
    hash,
  };
}

export function normalizeExternalUrl(url) {
  return url.replace(/[),.;]+$/, "").replace(/#.*$/, "");
}
