# Template Extraction Audit

This is a read-only code audit of the four available projects. It records extracted responsibilities, not copied source code.

| 기능 | AI Attitude | AX Lecture | AI FirstStep | Codyssey | 분류 | Template 포함 |
|---|---|---|---|---|---|---|
| Slide / lesson renderer | Deck slide renderer | lesson slide renderer | lesson slide renderer | lesson slide renderer | CORE ENGINE | Web Deck / Experience |
| Previous / next, keyboard, swipe | present | lesson navigation | lesson navigation | lesson navigation | CORE ENGINE | both |
| Fullscreen / progress / chrome | present | progress, presentation chrome | progress | progress | CORE ENGINE | Web Deck fullscreen; both progress |
| Section / Hub navigation | section transition | Hub, room, module path | Hub, room path | Hub, room path | CORE ENGINE | neutral section / module model |
| Safe validation and fallback | explicit deck validation | partial defensive checks | partial defensive checks | defect counterexample | CORE ENGINE / REJECT | validation and safe text fallback |
| Card Fan | optional navigator source | box lesson fan | room lesson fan | room lesson fan | OPTIONAL ENGINE | documented; not forced in v0.1 UI |
| Resume | explicit option | local resume state | local resume state | local resume state | OPTIONAL ENGINE | Experience option only |
| Practice Desk | absent | practice room | participant desk | absent | OPTIONAL ENGINE | Experience `practice` option |
| Dark depth / warm serif | Direction A Skin | spatial dark Skin | bright office Skin | geometry/motion variation | SKIN | Golden Warm, Spatial Dark, Light Learning |
| Curriculum, images, custom opening/closing | AI Attitude-specific | AX Lecture-specific | FirstStep-specific | Codyssey-specific | CONTENT / PROJECT SPECIFIC | no |
| XP, rank, unlock, reward, persona, admin, telemetry | absent / not deck core | present | present | present | PROJECT SPECIFIC | no |
| Room / Box as required data | absent | present metaphor | present metaphor | present metaphor | REJECT | neutral Module/Lesson only |

## Result

The repository uses a deliberate `engine/` plus self-contained `starter/engine/` distribution layout. The duplication is intentional: copying `starter/` alone must work without a build system or a parent path. This is simpler and more maintainable than a framework or generator at v0.1.
