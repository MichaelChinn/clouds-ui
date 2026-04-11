import React from "react";
import { cn } from "../lib/utils";

export interface IntegrationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

function IntegrationCard({
  icon,
  title,
  description,
  action,
  className,
  style,
  children,
  ...props
}: IntegrationCardProps) {
  const cardStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    padding: "var(--space-6)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    transition: `all var(--duration-normal) var(--ease-default)`,
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "var(--space-4)",
  };

  const iconContainerStyle: React.CSSProperties = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "var(--radius-lg)",
    backgroundColor: "var(--color-surface-hover)",
    border: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "var(--color-text)",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
    flex: 1,
    minWidth: 0,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "var(--text-sm)",
    fontWeight: 600,
    color: "var(--color-text)",
    margin: 0,
  };

  const descStyle: React.CSSProperties = {
    fontSize: "var(--text-sm)",
    color: "var(--color-text-muted)",
    margin: 0,
    lineHeight: "var(--leading-normal)",
  };

  const actionStyle: React.CSSProperties = {
    marginTop: "auto",
    paddingTop: "var(--space-2)",
  };

  return (
    <div className={cn(className)} style={cardStyle} {...props}>
      <div style={headerStyle}>
        {icon && <div style={iconContainerStyle}>{icon}</div>}
        <div style={contentStyle}>
          <h3 style={titleStyle}>{title}</h3>
          {description && <p style={descStyle}>{description}</p>}
        </div>
      </div>
      {children}
      {action && <div style={actionStyle}>{action}</div>}
    </div>
  );
}

IntegrationCard.displayName = "IntegrationCard";

export { IntegrationCard };
