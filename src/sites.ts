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

/** Parse a deployment-provided JSON inventory, returning [] for bad input. */
export function parseFederatedSites(value: string | null | undefined): FederatedBannerSite[] {
  const raw = (value ?? "").trim();
  if (!raw) {
    return [];
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) {
    return [];
  }

  return parsed.flatMap((entry): FederatedBannerSite[] => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      return [];
    }
    const candidate = entry as Record<string, unknown>;
    const slug = typeof candidate.slug === "string" ? candidate.slug.trim() : "";
    const name = typeof candidate.name === "string" ? candidate.name.trim() : "";
    const baseUrl = typeof candidate.baseUrl === "string" ? cleanBaseUrl(candidate.baseUrl) : "";
    if (!slug || !name || !baseUrl) {
      return [];
    }
    return [{
      slug,
      name,
      baseUrl,
      description: typeof candidate.description === "string" ? candidate.description.trim() : null,
      icon: typeof candidate.icon === "string" ? candidate.icon.trim() : null,
    }];
  });
}
