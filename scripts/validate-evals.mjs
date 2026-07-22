import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const evalDirectory = new URL("../evals/", import.meta.url);
const files = (await readdir(evalDirectory, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
  .map((entry) => entry.name)
  .sort();

let failures = 0;

for (const file of files) {
  const path = join(evalDirectory.pathname, file);
  let suite;
  try {
    suite = JSON.parse(await readFile(path, "utf8"));
  } catch (error) {
    console.error(`${file}: invalid JSON (${error.message})`);
    failures += 1;
    continue;
  }

  const cases = suite.cases;
  const ids = new Set();
  const triggerCount = Array.isArray(cases) ? cases.filter((test) => test.should_trigger === true).length : 0;
  const negativeCount = Array.isArray(cases) ? cases.filter((test) => test.should_trigger === false).length : 0;
  const validCases = Array.isArray(cases) && cases.every((test) => {
    if (typeof test !== "object" || test === null) return false;
    const hasUniqueId = typeof test.id === "string" && test.id.length > 0 && !ids.has(test.id);
    if (typeof test.id === "string") ids.add(test.id);
    return hasUniqueId
      && typeof test.prompt === "string" && test.prompt.length > 0
      && typeof test.should_trigger === "boolean"
      && Array.isArray(test.expected_outcomes) && test.expected_outcomes.length > 0;
  });
  const validSuite = typeof suite.skill === "string"
    && suite.trials >= 3
    && suite.clean_session === true
    && Array.isArray(cases)
    && cases.length >= 10
    && cases.length <= 20
    && triggerCount >= 2
    && negativeCount >= 2
    && validCases;

  if (!validSuite) {
    console.error(`${file}: requires a skill, 10–20 valid cases, at least two positive and negative cases, three trials, and clean_session: true.`);
    failures += 1;
  } else {
    console.log(`${file}: ${cases.length} cases (${triggerCount} positive, ${negativeCount} negative)`);
  }
}

if (files.length === 0) {
  console.error("No evaluation suites found.");
  failures += 1;
}

if (failures > 0) process.exit(1);
