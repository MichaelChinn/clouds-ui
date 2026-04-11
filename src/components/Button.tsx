import React from "react";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive" | "outline";
  size?: "sm" | "default" | "lg" | "icon";
  loading?: boolean;
}

const variantStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  React.CSSProperties
> = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-on-primary)",
    border: "1px solid transparent",
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-on-secondary)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text)",
    border: "1px solid transparent",
  },
  destructive: {
    backgroundColor: "var(--color-destructive)",
    color: "#ffffff",
    border: "1px solid transparent",
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)",
  },
};

const sizeStyles: Record<
  NonNullable<ButtonProps["size"]>,
  React.CSSProperties
> = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-1) var(--space-3)",
    borderRadius: "var(--radius-md)",
    height: "2rem",
  },
  default: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-lg)",
    height: "2.5rem",
  },
  lg: {
    fontSize: "var(--text-base)",
    padding: "var(--space-3) var(--space-6)",
    borderRadius: "var(--radius-lg)",
    height: "3rem",
  },
  icon: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2)",
    borderRadius: "var(--radius-lg)",
    height: "2.5rem",
    width: "2.5rem",
  },
};

const spinnerStyle: React.CSSProperties = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  border: "2px solid currentColor",
  borderRightColor: "transparent",
  borderRadius: "var(--radius-full)",
  animation: "clouds-spin 0.6s linear infinite",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      loading = false,
      disabled,
      className,
      children,
      style,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    const baseStyle: React.CSSProperties = {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "var(--space-2)",
      cursor: isDisabled ? "not-allowed" : "pointer",
      opacity: isDisabled ? 0.5 : 1,
      transition: `all var(--duration-normal) var(--ease-default)`,
      outline: "none",
      whiteSpace: "nowrap",
      userSelect: "none",
      lineHeight: 1,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    return (
      <>
        <style>{`@keyframes clouds-spin { to { transform: rotate(360deg); } }`}</style>
        <button
          ref={ref}
          className={cn(className)}
          style={baseStyle}
          disabled={isDisabled}
          {...props}
        >
          {loading && <span style={spinnerStyle} aria-hidden="true" />}
          {children}
        </button>
      </>
    );
  },
);

Button.displayName = "Button";

export { Button };
