import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

const LINE =
  "Out of office indefinitely. My old SLA was 40 milliseconds; " +
  "my new one is 4 minutes, and it comes with foam art.";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE);
