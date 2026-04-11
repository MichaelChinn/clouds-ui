import React from "react";
import { cn } from "../lib/utils";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  size?: "sm" | "default" | "lg";
}

const sizeStyles: Record<
  NonNullable<InputProps["size"]>,
  React.CSSProperties
> = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-1) var(--space-2)",
    height: "2rem",
  },
  default: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2) var(--space-3)",
    height: "2.5rem",
  },
  lg: {
    fontSize: "var(--text-base)",
    padding: "var(--space-3) var(--space-4)",
    height: "3rem",
  },
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      size = "default",
      className,
      style,
      disabled,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    const wrapperStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      fontFamily: "var(--font-sans)",
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--color-text)",
    };

    const inputStyle: React.CSSProperties = {
      fontFamily: "var(--font-sans)",
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: `1px solid ${error ? "var(--color-destructive)" : "var(--color-border)"}`,
      borderRadius: "var(--radius-lg)",
      outline: "none",
      transition: `all var(--duration-normal) var(--ease-default)`,
      width: "100%",
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? "not-allowed" : "text",
      ...sizeStyles[size],
      ...style,
    };

    const errorStyle: React.CSSProperties = {
      fontSize: "var(--text-sm)",
      color: "var(--color-destructive)",
    };

    return (
      <div style={wrapperStyle}>
        {label && (
          <label htmlFor={inputId} style={labelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(className)}
          style={inputStyle}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={error && inputId ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <span
            id={inputId ? `${inputId}-error` : undefined}
            style={errorStyle}
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
