export const project = {
  slug: "crm-reporting-database",
  title: "CRM Reporting Database",
  description: "CRM reporting and dashboard query database.",
  features: [
  "Reporting schema",
  "Lead funnel view",
  "Revenue view",
  "Activity view",
  "Dashboard queries",
  "Seed data"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
