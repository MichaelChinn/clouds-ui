import React, { useCallback } from "react";
import { cn } from "../lib/utils";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  onClear?: () => void;
  shortcutKey?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, shortcutKey, value, className, style, ...props }, ref) => {
    const hasValue =
      value !== undefined && value !== null && String(value).length > 0;

    const handleClear = useCallback(() => {
      onClear?.();
    }, [onClear]);

    const wrapperStyle: React.CSSProperties = {
      position: "relative",
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
    };

    const iconStyle: React.CSSProperties = {
      position: "absolute",
      left: "var(--space-3)",
      pointerEvents: "none",
      color: "var(--color-text-muted)",
      display: "flex",
      alignItems: "center",
    };

    const inputStyle: React.CSSProperties = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-2) var(--space-3)",
      paddingLeft: "var(--space-10)",
      paddingRight:
        hasValue && onClear
          ? "var(--space-10)"
          : shortcutKey
            ? "var(--space-10)"
            : "var(--space-3)",
      height: "2.5rem",
      width: "100%",
      outline: "none",
      transition: `all var(--duration-normal) var(--ease-default)`,
      ...style,
    };

    const clearBtnStyle: React.CSSProperties = {
      position: "absolute",
      right: "var(--space-3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--color-text-muted)",
      padding: "var(--space-1)",
      borderRadius: "var(--radius-sm)",
    };

    const badgeStyle: React.CSSProperties = {
      position: "absolute",
      right: "var(--space-3)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--text-xs)",
      fontFamily: "var(--font-mono)",
      color: "var(--color-text-muted)",
      backgroundColor: "var(--color-surface-hover)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-sm)",
      padding: "0 var(--space-2)",
      height: "1.25rem",
      lineHeight: 1,
      pointerEvents: "none",
    };

    return (
      <div style={wrapperStyle}>
        <span style={iconStyle} aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          ref={ref}
          type="search"
          className={cn(className)}
          style={inputStyle}
          value={value}
          {...props}
        />
        {hasValue && onClear ? (
          <button
            type="button"
            style={clearBtnStyle}
            onClick={handleClear}
            aria-label="Clear search"
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
        ) : shortcutKey && !hasValue ? (
          <span style={badgeStyle} aria-hidden="true">
            {shortcutKey}
          </span>
        ) : null}
      </div>
    );
  },
);

SearchInput.displayName = "SearchInput";

export { SearchInput };
