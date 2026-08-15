# GHWIZ Federated Banner

Shared top banner for GHWIZ federated web apps.

The package exposes:

- `FederatedBanner`, a Vue wrapper component.
- `defineFederatedBannerElement`, a framework-neutral custom element
  registration helper.
- `createGhwizFederatedSites`, a small helper for building the standard app
  switcher list from deployment-provided base paths.
- `parseFederatedSites`, a safe parser for a parent deployment's shared JSON
  inventory. Invalid input returns an empty list so standalone fallbacks remain
  available.
- `actionItems`, compact icon actions such as notifications that sit beside the
  app switcher and account menu.

The package intentionally does not hard-code production hostnames or app base
paths. Each consuming app passes the auth base path, account settings URL, app
links, current user, compact action buttons, and app-local menu actions from its
own configuration. Consumers pass an empty `sites` list outside federated mode so
the banner keeps the same account/profile surface without showing cross-app
links.

Set `app-icon-url` (or the Vue `appIconUrl` prop) to the same favicon URL used by
the consuming page when the app should replace the fallback `GH` mark. Strict
content-security-policy deployments may set `stylesheet-url` to the generated
`dist/browser/federated-banner.css` asset; other consumers keep the component's
inline shadow-DOM stylesheet.
