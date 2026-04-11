import React from "react";
import { cn } from "../lib/utils";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

function PageHeader({
  title,
  description,
  actions,
  className,
  style,
  ...props
}: PageHeaderProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "var(--space-4)",
    ...style,
  };

  const textStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "var(--text-2xl)",
    fontWeight: 700,
    color: "var(--color-text)",
    margin: 0,
    lineHeight: "var(--leading-tight)",
  };

  const descStyle: React.CSSProperties = {
    fontSize: "var(--text-sm)",
    color: "var(--color-text-secondary)",
    margin: 0,
    lineHeight: "var(--leading-normal)",
  };

  const actionsStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    flexShrink: 0,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      <div style={textStyle}>
        <h1 style={titleStyle}>{title}</h1>
        {description && <p style={descStyle}>{description}</p>}
      </div>
      {actions && <div style={actionsStyle}>{actions}</div>}
    </div>
  );
}

PageHeader.displayName = "PageHeader";

export { PageHeader };
