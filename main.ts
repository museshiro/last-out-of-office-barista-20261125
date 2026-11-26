import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf = "Out of office. I'm at a café now; I hallucinate one pastry per shift ";
const secondHalf = "and the manager makes me erase it from the board.";
const line = firstHalf + secondHalf;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
