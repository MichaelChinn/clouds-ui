import React, { useCallback } from "react";
import { cn } from "../lib/utils";

export interface ToggleProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      disabled = false,
      label,
      id,
      className,
      style,
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(
      defaultChecked ?? false,
    );
    const isChecked = checked !== undefined ? checked : internalChecked;

    const handleClick = useCallback(() => {
      if (disabled) return;
      const next = !isChecked;
      if (checked === undefined) {
        setInternalChecked(next);
      }
      onChange?.(next);
    }, [disabled, isChecked, checked, onChange]);

    const wrapperStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style,
    };

    const trackStyle: React.CSSProperties = {
      position: "relative",
      width: "2.75rem",
      height: "1.5rem",
      borderRadius: "var(--radius-full)",
      backgroundColor: isChecked
        ? "var(--color-primary)"
        : "var(--color-surface-active)",
      border: "1px solid var(--color-border)",
      transition: `background-color var(--duration-normal) var(--ease-default)`,
      flexShrink: 0,
    };

    const thumbStyle: React.CSSProperties = {
      position: "absolute",
      top: "2px",
      left: isChecked ? "calc(100% - 1.125rem - 2px)" : "2px",
      width: "1.125rem",
      height: "1.125rem",
      borderRadius: "var(--radius-full)",
      backgroundColor: isChecked
        ? "var(--color-on-primary)"
        : "var(--color-text-secondary)",
      transition: `left var(--duration-normal) var(--ease-default)`,
      boxShadow: "var(--shadow-sm)",
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "var(--text-sm)",
      color: "var(--color-text)",
      userSelect: "none",
    };

    return (
      <div style={wrapperStyle} className={cn(className)}>
        <button
          ref={ref}
          id={id}
          type="button"
          role="switch"
          aria-checked={isChecked}
          aria-label={label || undefined}
          disabled={disabled}
          onClick={handleClick}
          style={{
            ...trackStyle,
            background: "none",
            backgroundColor: trackStyle.backgroundColor,
            padding: 0,
            cursor: "inherit",
            outline: "none",
          }}
        >
          <span style={thumbStyle} />
        </button>
        {label && <span style={labelStyle}>{label}</span>}
      </div>
    );
  },
);

Toggle.displayName = "Toggle";

export { Toggle };
