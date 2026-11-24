// Entry for make.fun's "Alien Field Notes: The Two Day Earth Review".
//
// The whole program is one job: put a single one-line review of planet
// Earth — the line an alien tourist leaves behind after a two-day visit —
// into entry.txt inside the output directory, byte for byte the same on
// every run. The grader points MAKEFUN_OUTPUT_DIR at its own scratch
// output folder; on a plain machine the fallback is /output, the path
// the competition reads.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and the review lands in out/entry.txt, with no trailing newline: the
// judge reads exactly what is in the file, so the text below is the
// entire entry.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The review itself. The alien liked the sunsets, then got charged for
// water — and then sold a bottle of the very same water with a mountain
// printed on it. One concrete scene, in the voice of a real travel
// review: stars for the view, a star docked for the service, and the
// punch lands at the end.
const REVIEW =
  'Five stars for the sunsets, one star for the service: the locals charged me for water, then sold me a bottle of the same water with a mountain on it.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), REVIEW, 'utf8');
