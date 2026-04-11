import React from "react";
import { cn } from "../lib/utils";

/* ── Card ── */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, style, children, ...props }: CardProps) {
  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    boxShadow: "var(--shadow-sm)",
    overflow: "hidden",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

Card.displayName = "Card";

/* ── CardHeader ── */

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardHeader({ className, style, children, ...props }: CardHeaderProps) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--space-6)",
    borderBottom: "1px solid var(--color-border)",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

CardHeader.displayName = "CardHeader";

/* ── CardBody ── */

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardBody({ className, style, children, ...props }: CardBodyProps) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--space-6)",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

CardBody.displayName = "CardBody";

/* ── CardFooter ── */

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function CardFooter({ className, style, children, ...props }: CardFooterProps) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--space-4) var(--space-6)",
    borderTop: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--space-3)",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardBody, CardFooter };
