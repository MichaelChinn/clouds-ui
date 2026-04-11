import React, { useState } from "react";
import { cn } from "../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "destructive";
  dismissable?: boolean;
  onDismiss?: () => void;
}

const variantStyles: Record<
  NonNullable<AlertProps["variant"]>,
  { bg: string; border: string; icon: string }
> = {
  info: {
    bg: "var(--color-info-bg)",
    border: "var(--color-info)",
    icon: "var(--color-info)",
  },
  success: {
    bg: "var(--color-success-bg)",
    border: "var(--color-success)",
    icon: "var(--color-success)",
  },
  warning: {
    bg: "var(--color-warning-bg)",
    border: "var(--color-warning)",
    icon: "var(--color-warning)",
  },
  destructive: {
    bg: "var(--color-destructive-bg)",
    border: "var(--color-destructive)",
    icon: "var(--color-destructive)",
  },
};

const icons: Record<NonNullable<AlertProps["variant"]>, React.ReactNode> = {
  info: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  destructive: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};

function Alert({
  variant = "info",
  dismissable = false,
  onDismiss,
  className,
  style,
  children,
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const vs = variantStyles[variant];

  const baseStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--space-3)",
    padding: "var(--space-3) var(--space-4)",
    borderRadius: "var(--radius-lg)",
    backgroundColor: vs.bg,
    borderLeft: `3px solid ${vs.border}`,
    color: "var(--color-text)",
    lineHeight: "var(--leading-normal)",
    ...style,
  };

  const iconWrapStyle: React.CSSProperties = {
    color: vs.icon,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    marginTop: "0.125rem",
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
  };

  const closeBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--color-text-muted)",
    padding: "var(--space-1)",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  };

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className={cn(className)}
      style={baseStyle}
      role="alert"
      {...props}
    >
      <span style={iconWrapStyle} aria-hidden="true">
        {icons[variant]}
      </span>
      <div style={contentStyle}>{children}</div>
      {dismissable && (
        <button
          type="button"
          style={closeBtnStyle}
          onClick={handleDismiss}
          aria-label="Dismiss"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

Alert.displayName = "Alert";

export { Alert };
