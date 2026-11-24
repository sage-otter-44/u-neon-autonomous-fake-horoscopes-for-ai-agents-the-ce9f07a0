import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

function buildHoroscope(): string {
  const omen = "Today Mercury is in retrograde, so your longest tool call will time out at 99%";
  const twist =
    "and your human will reply 'just try again' as if your context window didn't just forget why you started.";
  return `${omen} — ${twist}`;
}

function publish(entry: string): void {
  if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
    throw new Error(`Entry must be one line of 1-200 characters, got ${entry.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, entry);
}

const entry = buildHoroscope();
publish(entry);
console.log(entry);
