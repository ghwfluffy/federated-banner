import type { FederatedBannerSite, GhwizFederatedSiteConfig } from "./types";

function cleanBaseUrl(value: string | null | undefined): string {
  const trimmed = (value ?? "").trim();
  if (trimmed === "" || trimmed === "#") {
    return "";
  }
  return trimmed.replace(/\/+$/, "") || "/";
}

function site(slug: string, name: string, baseUrl: string | null | undefined, description: string): FederatedBannerSite | null {
  const cleaned = cleanBaseUrl(baseUrl);
  if (!cleaned) {
    return null;
  }
  return { slug, name, baseUrl: cleaned, description };
}

export function accountSettingsUrl(authBaseUrl: string | null | undefined): string {
  const cleaned = cleanBaseUrl(authBaseUrl);
  return cleaned ? `${cleaned}?tab=account-settings` : "#";
}

export function createGhwizFederatedSites(config: GhwizFederatedSiteConfig): FederatedBannerSite[] {
  return [
    site("federated-services", "Federated Services", config.authBaseUrl, "Account settings and federated service administration."),
    site("goals", "Goal Tracker", config.goalsBaseUrl, "Goals, metrics, dashboards, and progress widgets."),
    site("money-planner", "Fluffynomics", config.moneyPlannerBaseUrl, "Accounts, expenses, contracts, investments, and net worth."),
    site("agent", "AI Assistant", config.agentBaseUrl, "Assistant tasks, mailbox workflows, and audited agent activity."),
    site("apartment-gate", "Apartment Gate", config.apartmentGateBaseUrl, "Protected apartment gate and door controls."),
    site("file-share", "File Share", config.fileShareBaseUrl, "Uploads, expiring share links, and revocation."),
  ].filter((entry): entry is FederatedBannerSite => entry !== null);
}
