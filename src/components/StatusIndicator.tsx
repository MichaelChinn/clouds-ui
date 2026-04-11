import React from "react";
import { cn } from "../lib/utils";

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant: "online" | "offline" | "warning" | "error";
  label?: string;
}

const dotColors: Record<StatusIndicatorProps["variant"], string> = {
  online: "var(--color-success)",
  offline: "var(--color-text-muted)",
  warning: "var(--color-warning)",
  error: "var(--color-destructive)",
};

function StatusIndicator({
  variant,
  label,
  className,
  style,
  ...props
}: StatusIndicatorProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    ...style,
  };

  const dotStyle: React.CSSProperties = {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "var(--radius-full)",
    backgroundColor: dotColors[variant],
    flexShrink: 0,
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--color-text-secondary)",
  };

  return (
    <span className={cn(className)} style={baseStyle} {...props}>
      <span style={dotStyle} aria-hidden="true" />
      {label && <span style={labelStyle}>{label}</span>}
    </span>
  );
}

StatusIndicator.displayName = "StatusIndicator";

export { StatusIndicator };
