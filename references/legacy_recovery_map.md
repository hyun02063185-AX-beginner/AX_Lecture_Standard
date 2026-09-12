# Legacy Recovery Map

`AX_Lecture_Standard_backup`에서 회수한 모든 자산의 원본 경로 → 현재 저장소 목적지 → 상태를 기록한다. 판단 근거는 [canonical_gap_review.md](canonical_gap_review.md)를 따른다.

## Docs

| Original backup asset | Current repository destination | Status |
|---|---|---|
| `docs/01_source_inventory.md` | `evidence/source-audit/01_source_inventory.md` | Recovered unchanged (+ status header) |
| `docs/02_function_comparison.md` | `evidence/source-audit/02_function_comparison.md` | Recovered unchanged (+ status header) |
| `docs/03_design_dna_comparison.md` | `evidence/source-audit/03_design_dna_comparison.md` | Recovered unchanged (+ status header) |
| `docs/04_standardization_candidates.md` | `evidence/source-audit/04_standardization_candidates.md` | Recovered unchanged (+ status header) |
| `docs/05_source_audit_report.md` | `evidence/source-audit/05_source_audit_report.md` | Recovered unchanged (+ status header) |
| `docs/06_visual_baseline_validation.md` | `evidence/visual-baseline/06_visual_baseline_validation.md` | Recovered unchanged (+ status header) |
| `docs/07_engine_boundary_experiment.md` | `evidence/design-experiments/07_engine_boundary_experiment.md` | Recovered unchanged (+ status header) |
| `docs/08_web_deck_minimum_contract_draft.md` | `evidence/design-experiments/08_web_deck_minimum_contract_draft.md` | Recovered unchanged (+ status header) — superseded draft |
| `docs/09_web_deck_content_contract_v0.1.md` | `evidence/design-experiments/09_web_deck_content_contract_v0.1.md` | Recovered unchanged (+ status header) — superseded draft |
| `docs/10_web_deck_authoring_guide.md` | `evidence/design-experiments/10_web_deck_authoring_guide.md` | Recovered unchanged (+ status header) — superseded draft, 2 sections folded into canonical |
| `docs/11_long_deck_navigation_validation.md` | `evidence/design-experiments/11_long_deck_navigation_validation.md` | Recovered unchanged (+ status header) |
| `docs/12_web_deck_time_profiles_v0.1.md` | `evidence/design-experiments/12_web_deck_time_profiles_v0.1.md` | Recovered unchanged (+ status header) — superseded draft |
| `docs/13_web_deck_completion_signal.md` | `evidence/design-experiments/13_web_deck_completion_signal.md` | Recovered unchanged (+ status header) — superseded draft, 2 notes folded into canonical |
| `docs/14_ax_web_deck_standard_v0.1.md` | `evidence/design-experiments/14_ax_web_deck_standard_v0.1.md` | Recovered unchanged (+ status header) — superseded Sprint 5 canonical, 2 sections folded into canonical |
| `docs/15_ai_attitude_content_source_inventory.md` | `evidence/ai-attitude/15_ai_attitude_content_source_inventory.md` | Recovered unchanged (+ status header) — no other copy exists |
| `docs/16_ai_attitude_webdeck60_content_map.md` | `evidence/ai-attitude/16_ai_attitude_webdeck60_content_map.md` | Recovered unchanged (+ status header) — fuller than `AI_Attitude/docs/16` |
| `docs/17_ai_attitude_golden_slice_comparison.md` | `evidence/ai-attitude/17_ai_attitude_golden_slice_comparison.md` | Recovered unchanged (+ status header) — fuller than `AI_Attitude/docs/17` |
| `docs/00_canonical_index.md` | — | Not recovered — superseded entirely by the current `docs/00_canonical_index.md`; the old index only pointed at 01–17 above, all of which are individually tracked in this map |

## Visual assets

| Original backup asset | Current repository destination | Status |
|---|---|---|
| `audit-assets/{ax-lecture,codyssey,first-step}-*.png` (18 files) | `evidence/visual-baseline/assets/` | Recovered unchanged, flat structure preserved |
| `audit-assets/sprint2/**` (14 files) | `evidence/design-experiments/assets/sprint2/` | Recovered unchanged, folder structure preserved |
| `audit-assets/sprint3/**` (5 files) | `evidence/design-experiments/assets/sprint3/` | Recovered unchanged, folder structure preserved |
| `audit-assets/sprint4/**` (11 files) | `evidence/design-experiments/assets/sprint4/` | Recovered unchanged, folder structure preserved |
| `audit-assets/sprint6/legacy/**` (4 files) | `evidence/ai-attitude/visuals/legacy/` | Recovered unchanged |
| `audit-assets/sprint6/direction-a/**` (7 files) | `evidence/ai-attitude/visuals/direction-a/` | Recovered unchanged |
| `audit-assets/sprint6/direction-b/**` (6 files) | `evidence/ai-attitude/visuals/direction-b/` | Recovered unchanged |

Note: the backup has no `sprint6/golden-final/` — that folder exists only in the `AI_Attitude` repository's own `audit-assets/` (a separate, later capture unrelated to this backup), so there was nothing to recover from here.

### Binary asset review

Checked all 65 recovered PNGs by content hash and file type: no zero-byte or corrupted files, and no accidental duplicates. Three exact-duplicate pairs exist (`sprint2/no-card-fan-b/{start,section1-mid,section4-tools}.png` vs `sprint2/linear-deck/` of the same names) — these are intentional: `07_engine_boundary_experiment.md` documents that Variant B (No Card Fan) reused Experiment 2's Linear Deck output byte-for-byte because the two experimental setups produced an identical result. Both copies are kept since the duplication itself is the finding.

## Prototypes

| Original backup asset | Current repository destination | Status |
|---|---|---|
| `prototypes/web-deck-boundary/**` (all 5 variants: 00-baseline, 01-experience-removed, 02-linear-deck, 03-card-fan-a, 03-card-fan-b) | `prototypes/web-deck-boundary/` | Recovered unchanged, full structure preserved |
| `prototypes/web-deck-contract/**` | `prototypes/web-deck-contract/` | Recovered unchanged, full structure preserved |
| `prototypes/web-deck-time-profiles/**` | `prototypes/web-deck-time-profiles/` | Recovered unchanged, full structure preserved |

## Not recovered (and why)

- `docs/00_canonical_index.md` (backup's own old index) — superseded, see table above. This is the only backup file not recovered.

## Totals

- Backup file count (excluding `.git`): 178 (docs 18, audit-assets 65, prototypes 95)
- Recovered into current repository: 177 (docs 17, audit-assets 65 — all of it, prototypes 95 — all of it)
- New files written this sprint (not from backup): `prototypes/README.md`, `references/canonical_gap_review.md`, `references/legacy_recovery_map.md`
