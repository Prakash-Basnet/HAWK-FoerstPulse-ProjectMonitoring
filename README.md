# ForestPulse — HAWK Task Progress Tracker

Live progress dashboard for HAWK's work packages in the [ForestPulse](https://forestpulse.thuenen.de/) project.

**[View Live Tracker →](https://prakash-basnet.github.io/HAWK-FoerstPulse-ProjectMonitoring/)**

---

## About ForestPulse

**ForestPulse** is a federally funded project developing a public Copernicus service for consistent, regionalizable tree species, vitality, and structure information across Germany's forest area.

- **Duration:** 01.01.2025 – 31.12.2027
- **Funding:** €277,998.90 (HAWK share)
- **Consortium:** Thünen Institute (TI), Universität Trier (UT), HAWK, NW-FVA, FVA, LF-RLP

## HAWK's Role

HAWK leads **Work Package 4 (AP 4): Forest Information Layers from Active Airborne Data**, focusing on nationwide Airborne Laser Scanning (ALS) data processing and forest structure analysis.

### Key Tasks

| Work Package | Task | Focus |
|---|---|---|
| WP3 | Task 3.2 | Tree species classification (Sentinel-2, spectral unmixing) |
| WP4 (Lead) | Task 4.1 | ALS data preprocessing & homogenization |
| WP4 | Task 4.2 | Area-based forest structure parameter derivation |
| WP4 | Task 4.3 | Fusion of ALS and Sentinel-2 data |
| WP4 | Task 4.4 | Individual tree detection & crown analysis |
| WP5 | Task 5.1 | Thematic, spatial & temporal consistency |
| WP8 | Task 8.1, 8.3 | Statistical validation & Area of Applicability |
| WP10 | Task 10.3, 10.4 | Documentation & publication |

## Status Legend

| Status | Meaning |
|---|---|
| **Not Started** | No visible activity yet |
| **In Progress** | Active development underway |
| **Completed** | Fully delivered and documented |
| **Stalled** | Progress halted (dependencies/resources) |
| **Broken** | Deadline passed or abandoned |

## Update Task Statuses

Edit `data.js` — change the `status` field on any task:

```js
// Options: "not-started", "in-progress", "completed", "stalled", "broken"
{ id: 5, title: "ALS Data Preprocessing", status: "in-progress", ... }
```

Commit and push — the site updates automatically via GitHub Pages.

## Links

| Resource | URL |
|---|---|
| **Live Tracker** | [prakash-basnet.github.io/HAWK-FoerstPulse-ProjectMonitoring](https://prakash-basnet.github.io/HAWK-FoerstPulse-ProjectMonitoring/) |
| **ForestPulse Project** | [forestpulse.thuenen.de](https://forestpulse.thuenen.de/) |
| **HAWK ForestPulse Page** | [hawk.de/forestpulse](https://www.hawk.de/de/forschung/forschungsprojekte/forestpulse) |

---

Built by **Dr. Prakash Basnet** · Wissenschaftlicher Mitarbeiter · [HAWK Göttingen](https://www.hawk.de)
