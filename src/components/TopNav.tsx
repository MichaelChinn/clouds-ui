import React from "react";
import { cn } from "../lib/utils";

export interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

function TopNav({
  left,
  center,
  right,
  className,
  style,
  children,
  ...props
}: TopNavProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "var(--color-surface)",
    borderBottom: "1px solid var(--color-border)",
    padding: "0 var(--space-6)",
    height: "3.5rem",
    flexShrink: 0,
    ...style,
  };

  const slotStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
  };

  const leftStyle: React.CSSProperties = {
    ...slotStyle,
    justifyContent: "flex-start",
    flex: 1,
  };

  const centerStyle: React.CSSProperties = {
    ...slotStyle,
    justifyContent: "center",
    flex: 1,
  };

  const rightStyle: React.CSSProperties = {
    ...slotStyle,
    justifyContent: "flex-end",
    flex: 1,
  };

  return (
    <header className={cn(className)} style={baseStyle} {...props}>
      <div style={leftStyle}>{left}</div>
      <div style={centerStyle}>{center}</div>
      <div style={rightStyle}>{right}</div>
      {children}
    </header>
  );
}

TopNav.displayName = "TopNav";

export { TopNav };
