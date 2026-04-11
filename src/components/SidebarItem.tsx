import React from "react";
import { cn } from "../lib/utils";

export interface SidebarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number | string;
}

const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
  (
    { icon, label, active = false, badge, className, style, ...props },
    ref,
  ) => {
    const baseStyle: React.CSSProperties = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2) var(--space-3)",
      borderRadius: "var(--radius-lg)",
      border: "none",
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      backgroundColor: active
        ? "var(--color-surface-active)"
        : "transparent",
      color: active ? "var(--color-text)" : "var(--color-text-secondary)",
      fontWeight: active ? 500 : 400,
      transition: `all var(--duration-fast) var(--ease-default)`,
      ...style,
    };

    const iconStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: "1.25rem",
      height: "1.25rem",
      color: active ? "var(--color-primary)" : "var(--color-text-muted)",
    };

    const labelWrapperStyle: React.CSSProperties = {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    };

    const badgeStyle: React.CSSProperties = {
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-full)",
      padding: "0 var(--space-2)",
      minWidth: "1.25rem",
      height: "1.25rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      flexShrink: 0,
    };

    return (
      <button
        ref={ref}
        className={cn(className)}
        style={baseStyle}
        {...props}
      >
        {icon && <span style={iconStyle}>{icon}</span>}
        <span style={labelWrapperStyle}>{label}</span>
        {badge !== undefined && <span style={badgeStyle}>{badge}</span>}
      </button>
    );
  },
);

SidebarItem.displayName = "SidebarItem";

export { SidebarItem };
