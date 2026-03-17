# New Relic NRQL Queries

## Portfolio Interaction Funnel

```sql
FROM PortfolioInteraction
SELECT count(*)
FACET action
SINCE 7 days ago
LIMIT 50
```

## Interaction Trend by Section

```sql
FROM PortfolioInteraction
SELECT count(*)
FACET section
TIMESERIES 1 day
SINCE 14 days ago
```

## Top Clicked Labels

```sql
FROM PortfolioInteraction
SELECT count(*)
FACET label
SINCE 30 days ago
LIMIT 25
```

## Modal Opens (Vault and Certifications)

```sql
FROM PortfolioInteraction
SELECT count(*)
WHERE action IN ('vault_open', 'certifications_modal_open')
FACET action, label
SINCE 30 days ago
LIMIT 50
```

## Education Interaction Checks

```sql
FROM PortfolioInteraction
SELECT count(*)
WHERE section = 'education'
FACET action, label
SINCE 30 days ago
```

## Destination Heatmap

```sql
FROM PortfolioInteraction
SELECT count(*)
FACET destination
SINCE 30 days ago
LIMIT 50
```
