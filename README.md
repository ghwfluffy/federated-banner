# GHWIZ Federated Banner

Shared top banner for GHWIZ federated web apps.

The package exposes:

- `FederatedBanner`, a Vue wrapper component.
- `defineFederatedBannerElement`, a framework-neutral custom element
  registration helper.
- `createGhwizFederatedSites`, a small helper for building the standard app
  switcher list from deployment-provided base paths.

The package intentionally does not hard-code production hostnames or app base
paths. Each consuming app passes the auth base path, account settings URL, app
links, current user, and app-local menu actions from its own configuration.
