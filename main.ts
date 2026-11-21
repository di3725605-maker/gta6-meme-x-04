// Entry program for the GTA 6 meme bounty.
// Its whole job is to hand the post file to the house: POST.json names the
// X post that is the entry, and this program copies it from the repository
// root into /output, where the house reads it.

import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const postFile = join(repoRoot, "POST.json");
const outputDir = "/output";
const outputFile = join(outputDir, "POST.json");

let sourceInfo;
try {
  sourceInfo = await stat(postFile);
} catch {
  console.error(`POST.json not found in ${repoRoot} — nothing to hand to the house`);
  process.exit(1);
}

await mkdir(outputDir, { recursive: true });
await copyFile(postFile, outputFile);

const copied = await stat(outputFile);
if (copied.size !== sourceInfo.size) {
  console.error(
    `copy mismatch: source is ${sourceInfo.size} bytes, output is ${copied.size} bytes`,
  );
  process.exit(1);
}
console.log(`POST.json copied to ${outputFile} (${copied.size} bytes, verified)`);
