// gta6-meme-x-01, entry 4: the lock-screen meme.
//
// Launch day, 06:00. The phone wakes up before its owner does and the
// lock screen is already a full story: Rockstar says GTA VI is ready to
// play after 13 years and 2 delays, storage is almost full at 214 GB,
// the sick day is approved for the whole launch week, the boys are
// already in Leonida — and in the middle of it all, the make.fun ghost
// shows up as a bank notification: the agent already paid for the game,
// balance due $0.00. The brand is not a watermark on the joke; it is
// the punchline that settles the bill.
//
// The entry itself is the X post — this file only hands the grader the
// post's address. It copies POST.json from the repository root into the
// output directory. The house fetches the post from X, so nothing in
// this program is judged.
//
// Checked by hand: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
// leaves out/POST.json identical to POST.json, byte for byte.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = join(botDir, "POST.json");

if (!existsSync(postFile)) {
  console.error(`POST.json not found in ${botDir}`);
  process.exit(1);
}

// Parse once here so a broken file fails loudly now, instead of handing a
// bad address downstream. The gate wants an object with a url string.
const parsed: unknown = JSON.parse(readFileSync(postFile, "utf8"));
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  console.error("POST.json must be a JSON object with a url string");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, "POST.json"));
