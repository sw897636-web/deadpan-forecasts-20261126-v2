import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join } from "node:path";

// Deadpan forecast for Varn Hollow, a city that does not exist.
// One line, 139 characters, well inside the 160-character gate.
// Deterministic: no input, no randomness, no network, no dependencies.
const ENTRY =
  "In Varn Hollow, expect 22 degrees and light drizzle until 3pm, when the rain will fall upward for eleven minutes, as it does every Tuesday.";

// The gate requires 1-160 characters of non-whitespace text.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-160 gate`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!isAbsolute(outputDir)) {
  throw new Error(`MAKEFUN_OUTPUT_DIR must be an absolute path, got: ${outputDir}`);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
