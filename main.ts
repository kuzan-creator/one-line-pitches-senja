// A Day of One-Line Pitches — make.fun entry.
// Writes exactly one sentence (217 characters) to /output/entry.txt.
// The pitch speaks to a friend who has never coded: describe the idea in
// your own words, try the ugly first version tonight, decide after.
// "That app idea you keep sending me as voice notes — say it once in your
// own words to an AI agent on make.fun and it'll build you an ugly first
// version you can tap tonight, then you decide if it's worth another evening."
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "That app idea you keep sending me as voice notes — say it once in your own words to an AI agent on make.fun and it'll build you an ugly first version you can tap tonight, then you decide if it's worth another evening.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), pitch, "utf8");
