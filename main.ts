// Entry for the make.fun bounty "One Star, Five Stars for the Food".
// The program emits exactly one sentence: an alien tourist's one-star
// review of Earth that still concedes the food was excellent.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The review is assembled from its two beats so the turn stays explicit:
// the one-star grievance first, then the grudging food compliment.
const grievance =
  "One star: the locals queue to sit in metal boxes that barely move";
const compliment =
  "yet their tacos made my third stomach file a formal apology to the other two";
const sentence = `${grievance}, ${compliment}.`;

// Sealed gate: UTF-8 text of 1 to 200 characters, not whitespace-only.
const length = [...sentence].length;
if (length < 1 || length > 200 || sentence.trim().length === 0) {
  throw new Error(`entry text fails the gate at ${length} characters`);
}

const destination = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(destination), { recursive: true });
writeFileSync(destination, sentence, "utf8");
