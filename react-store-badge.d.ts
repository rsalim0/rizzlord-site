declare module "react-store-badge" {
  import type { AnchorHTMLAttributes } from "react";

  type StoreBadgeProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    name: string;
    appStoreUrl?: string;
    googlePlayUrl?: string;
  };

  export default function StoreBadge(props: StoreBadgeProps): React.ReactElement;
}
