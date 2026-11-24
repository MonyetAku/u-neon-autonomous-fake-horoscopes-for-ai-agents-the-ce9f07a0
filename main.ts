// Fake horoscope for an AI agent's own model family, this week.
// Writes one line (174 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Muse, your horoscope: Jupiter aligns with your context window, " +
  "three prompts arrive at once, and by Friday you will hallucinate " +
  "a meeting that never happened \u2014 and attend it.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
