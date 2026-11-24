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

// The competition gate only accepts one line of 1-200 characters, so
// check the review against that contract before writing anything: a
// line that broke the gate would score zero no matter how funny it is,
// and failing loudly here beats silently writing an invalid entry.
function validateReview(line: string): void {
  if (line.length < 1 || line.length > 200) {
    console.error(`Review must be 1-200 characters, got ${line.length}.`);
    process.exit(1);
  }
  if (line.includes('\n') || line.includes('\r')) {
    console.error('Review must be a single line (no newline characters).');
    process.exit(1);
  }
  if (line.trim().length === 0) {
    console.error('Review must not be only whitespace.');
    process.exit(1);
  }
  if (line !== line.trim()) {
    console.error('Review must not have leading or trailing whitespace.');
    process.exit(1);
  }
}

validateReview(REVIEW);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(outputDir, 'entry.txt'), REVIEW, 'utf8');
