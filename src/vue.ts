import { defineComponent, h, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { defineFederatedBannerElement } from "./element";
import type { FederatedBannerMenuItem, FederatedBannerSite, FederatedBannerUser } from "./types";

type BannerElement = HTMLElement & {
  user: FederatedBannerUser | null;
  sites: FederatedBannerSite[];
  actionItems: FederatedBannerMenuItem[];
  appItems: FederatedBannerMenuItem[];
  accountItems: FederatedBannerMenuItem[];
};

export const FederatedBanner = defineComponent({
  name: "FederatedBanner",
  props: {
    appName: { type: String, required: true },
    appUrl: { type: String, default: "#" },
    brandLabel: { type: String, default: "GHWIZ" },
    currentAppSlug: { type: String, required: true },
    accountSettingsUrl: { type: String, default: "#" },
    showSignOut: { type: Boolean, default: true },
    user: { type: Object as () => FederatedBannerUser | null, default: null },
    sites: { type: Array as () => FederatedBannerSite[], default: () => [] },
    actionItems: { type: Array as () => FederatedBannerMenuItem[], default: () => [] },
    appItems: { type: Array as () => FederatedBannerMenuItem[], default: () => [] },
    accountItems: { type: Array as () => FederatedBannerMenuItem[], default: () => [] },
  },
  emits: {
    action: (_action: string) => true,
    signOut: () => true,
  },
  setup(props, { emit }) {
    const elementRef = ref<BannerElement | null>(null);

    function syncProperties(): void {
      if (!elementRef.value) {
        return;
      }
      elementRef.value.user = props.user;
      elementRef.value.sites = props.sites;
      elementRef.value.actionItems = props.actionItems;
      elementRef.value.appItems = props.appItems;
      elementRef.value.accountItems = props.accountItems;
    }

    function onAction(event: Event): void {
      const action = (event as CustomEvent<{ action?: string }>).detail?.action;
      if (!action) {
        return;
      }
      if (action === "sign-out") {
        emit("signOut");
        return;
      }
      emit("action", action);
    }

    onMounted(() => {
      defineFederatedBannerElement();
      syncProperties();
      elementRef.value?.addEventListener("federated-banner-action", onAction);
    });

    onBeforeUnmount(() => {
      elementRef.value?.removeEventListener("federated-banner-action", onAction);
    });

    watch(
      () => [props.user, props.sites, props.actionItems, props.appItems, props.accountItems],
      syncProperties,
      { deep: true },
    );

    return () => h("ghwiz-federated-banner", {
      ref: elementRef,
      "app-name": props.appName,
      "app-url": props.appUrl,
      "brand-label": props.brandLabel,
      "current-app-slug": props.currentAppSlug,
      "account-settings-url": props.accountSettingsUrl,
      "show-sign-out": props.showSignOut ? "true" : "false",
    });
  },
});
