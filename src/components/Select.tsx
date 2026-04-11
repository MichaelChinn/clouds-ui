import React from "react";
import { cn } from "../lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, className, style, disabled, id, children, ...props }, ref) => {
    const selectId =
      id || (label ? `select-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

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

    const selectWrapStyle: React.CSSProperties = {
      position: "relative",
      display: "flex",
      alignItems: "center",
    };

    const selectStyle: React.CSSProperties = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: `1px solid ${error ? "var(--color-destructive)" : "var(--color-border)"}`,
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-2) var(--space-8) var(--space-2) var(--space-3)",
      height: "2.5rem",
      width: "100%",
      outline: "none",
      appearance: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: `all var(--duration-normal) var(--ease-default)`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b6b85' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right var(--space-3) center",
      ...style,
    };

    const errorStyle: React.CSSProperties = {
      fontSize: "var(--text-sm)",
      color: "var(--color-destructive)",
    };

    return (
      <div style={wrapperStyle}>
        {label && (
          <label htmlFor={selectId} style={labelStyle}>
            {label}
          </label>
        )}
        <div style={selectWrapStyle}>
          <select
            ref={ref}
            id={selectId}
            className={cn(className)}
            style={selectStyle}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={error && selectId ? `${selectId}-error` : undefined}
            {...props}
          >
            {children}
          </select>
        </div>
        {error && (
          <span
            id={selectId ? `${selectId}-error` : undefined}
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

Select.displayName = "Select";

export { Select };
