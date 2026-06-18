import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("CRM Reporting Database exposes project metadata", () => {
  assert.equal(project.slug, "crm-reporting-database");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
