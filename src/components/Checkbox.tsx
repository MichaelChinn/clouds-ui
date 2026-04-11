import React, { useCallback, useEffect, useRef } from "react";
import { cn } from "../lib/utils";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      indeterminate = false,
      onChange,
      disabled = false,
      label,
      id,
      className,
      style,
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    useEffect(() => {
      const el =
        typeof resolvedRef === "object" && resolvedRef?.current
          ? resolvedRef.current
          : internalRef.current;
      if (el) {
        el.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.checked);
      },
      [onChange],
    );

    const wrapperStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style,
    };

    const checkboxStyle: React.CSSProperties = {
      width: "1.125rem",
      height: "1.125rem",
      accentColor: "var(--color-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      margin: 0,
      flexShrink: 0,
    };

    const labelStyle: React.CSSProperties = {
      fontSize: "var(--text-sm)",
      color: "var(--color-text)",
      userSelect: "none",
    };

    const inputId =
      id || (label ? `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);

    return (
      <label style={wrapperStyle} className={cn(className)} htmlFor={inputId}>
        <input
          ref={ref || internalRef}
          id={inputId}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          style={checkboxStyle}
          aria-checked={indeterminate ? "mixed" : checked}
        />
        {label && <span style={labelStyle}>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
