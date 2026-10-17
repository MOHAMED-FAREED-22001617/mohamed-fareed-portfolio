import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("src/routes/index.tsx", "utf8");

// Mohamed graduated in 2026, so the page must never present it as still pending.
describe("Education", () => {
  it("states the degree was completed in 2026, not expected", () => {
    expect(source).toContain("Graduated: 2026");
    expect(source).not.toContain("Expected Graduation");
    expect(source).not.toMatch(/graduating in 2026/i);
  });
});
