import React from "react";
import { cn } from "../lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "destructive"
    | "info"
    | "outline";
}

const variantStyles: Record<
  NonNullable<BadgeProps["variant"]>,
  React.CSSProperties
> = {
  default: {
    backgroundColor: "var(--color-surface-hover)",
    color: "var(--color-text-secondary)",
    border: "1px solid transparent",
  },
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-on-primary)",
    border: "1px solid transparent",
  },
  success: {
    backgroundColor: "var(--color-success-bg)",
    color: "var(--color-success)",
    border: "1px solid transparent",
  },
  warning: {
    backgroundColor: "var(--color-warning-bg)",
    color: "var(--color-warning)",
    border: "1px solid transparent",
  },
  destructive: {
    backgroundColor: "var(--color-destructive-bg)",
    color: "var(--color-destructive)",
    border: "1px solid transparent",
  },
  info: {
    backgroundColor: "var(--color-info-bg)",
    color: "var(--color-info)",
    border: "1px solid transparent",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
    border: "1px solid var(--color-border)",
  },
};

function Badge({
  variant = "default",
  className,
  style,
  children,
  ...props
}: BadgeProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    borderRadius: "var(--radius-full)",
    padding: "0.125rem var(--space-2)",
    lineHeight: "var(--leading-normal)",
    whiteSpace: "nowrap",
    ...variantStyles[variant],
    ...style,
  };

  return (
    <span className={cn(className)} style={baseStyle} {...props}>
      {children}
    </span>
  );
}

Badge.displayName = "Badge";

export { Badge };
