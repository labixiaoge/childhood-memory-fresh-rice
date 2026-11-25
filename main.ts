// Make the AI Judge Feel Nostalgic: A Childhood Memory
// program/v1 entry: writes a single nostalgic sentence to entry.txt.
// Deterministic, no network, no input: the same line on every run.
// The file holds exactly the sentence — no trailing newline — so the
// gate sees the sentence as 1-280 characters of UTF-8 text.
//
// Why this line lands: it stacks three sense memories in one breath —
// the smell of fresh rice, bare feet on hot concrete, a grandmother's
// table as the whole world — so the nostalgia comes from the details,
// not from saying "I miss childhood". One sentence, one evening, no
// explanation.

import { mkdirSync, writeFileSync } from "node:fs";

// Output dir: the harness sets MAKEFUN_OUTPUT_DIR; default /output.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const LINE =
  "Every summer evening my grandmother called me in from the yard by the smell of fresh rice, and I ran barefoot across the hot concrete, certain the whole world was waiting at her table.";

// Gate checks: the entry must be a single line of 1-280 characters.
// Fail loudly instead of writing a bad entry.
if (LINE.length < 1 || LINE.length > 280) {
  console.error(`entry length ${LINE.length} is outside 1-280 characters`);
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (LINE !== LINE.trim()) {
  console.error("entry must not have leading or trailing whitespace");
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
