import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync("src/routes/index.tsx", "utf8");
const projects = source.slice(
  source.indexOf("{/* Featured Projects */}"),
  source.indexOf("function QuantumProjectCard"),
);
const qkdCard = source.slice(source.indexOf("function QuantumProjectCard"));

// Both projects point at Mohamed's own verified report document. The page must
// link to that real document only, and must not state results that were never measured.
describe("Featured projects", () => {
  it("shows the QKD project with overview, contributions, tags and a View Details link", () => {
    expect(qkdCard).toContain("Hybrid Quantum");
    expect(qkdCard).toContain("QKD_CONTRIBUTIONS");
    expect(qkdCard).toContain("QKD_TECHNOLOGIES");
    expect(qkdCard).toContain("View Details");
    expect(qkdCard).not.toContain("Hide Details");
  });

  it("links the QKD project to the real report and to nothing invented", () => {
    expect(qkdCard).toContain("href={PROJECT_URL}");
    expect(qkdCard).toContain('target="_blank"');
    expect(qkdCard).not.toMatch(/href=["'`]https?:/);
    expect(source).toContain(
      'const PROJECT_URL = "https://scrs.in/verify.html?file=2yaouv57386.pdf"',
    );
  });

  it("shows no link button on the medical project card", () => {
    expect(projects).not.toContain("View Project");
    expect(projects).toContain("Blockchain-Powered Mobile App");
  });

  it("makes no unverified security or performance claim", () => {
    expect(qkdCard).not.toMatch(
      /\d+%|unbreakable|provably secure|guaranteed|faster than|outperforms/i,
    );
  });
});
