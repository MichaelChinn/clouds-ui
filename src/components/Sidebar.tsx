import React from "react";
import { cn } from "../lib/utils";

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}

function Sidebar({ className, style, children, ...props }: SidebarProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
    backgroundColor: "var(--color-surface)",
    borderRight: "1px solid var(--color-border)",
    padding: "var(--space-3)",
    width: "16rem",
    height: "100%",
    overflow: "auto",
    ...style,
  };

  return (
    <nav className={cn(className)} style={baseStyle} {...props}>
      {children}
    </nav>
  );
}

Sidebar.displayName = "Sidebar";

export { Sidebar };
