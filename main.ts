// One Star, Five Stars for the Food — make.fun entry.
// Writes a single-sentence alien one-star review of Earth that still
// compliments the food, to /output/entry.txt (or ./output/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const review =
  "One star: the locals queue to sit in metal boxes that barely move, yet their tacos made my third stomach file a formal apology to the other two.";

const target = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, review, "utf8");
