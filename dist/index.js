// src/components/Button.tsx
import React from "react";

// src/lib/utils.ts
import { clsx } from "clsx";
function cn(...inputs) {
  return clsx(inputs);
}

// src/components/Button.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var variantStyles = {
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-on-primary)",
    border: "1px solid transparent"
  },
  secondary: {
    backgroundColor: "var(--color-secondary)",
    color: "var(--color-on-secondary)",
    border: "1px solid var(--color-border)"
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text)",
    border: "1px solid transparent"
  },
  destructive: {
    backgroundColor: "var(--color-destructive)",
    color: "#ffffff",
    border: "1px solid transparent"
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-text)",
    border: "1px solid var(--color-border)"
  }
};
var sizeStyles = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-1) var(--space-3)",
    borderRadius: "var(--radius-md)",
    height: "2rem"
  },
  default: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-lg)",
    height: "2.5rem"
  },
  lg: {
    fontSize: "var(--text-base)",
    padding: "var(--space-3) var(--space-6)",
    borderRadius: "var(--radius-lg)",
    height: "3rem"
  },
  icon: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2)",
    borderRadius: "var(--radius-lg)",
    height: "2.5rem",
    width: "2.5rem"
  }
};
var spinnerStyle = {
  display: "inline-block",
  width: "1em",
  height: "1em",
  border: "2px solid currentColor",
  borderRightColor: "transparent",
  borderRadius: "var(--radius-full)",
  animation: "clouds-spin 0.6s linear infinite"
};
var Button = React.forwardRef(
  ({
    variant = "primary",
    size = "default",
    loading = false,
    disabled,
    className,
    children,
    style,
    ...props
  }, ref) => {
    const isDisabled = disabled || loading;
    const baseStyle = {
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
      ...style
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("style", { children: `@keyframes clouds-spin { to { transform: rotate(360deg); } }` }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          ref,
          className: cn(className),
          style: baseStyle,
          disabled: isDisabled,
          ...props,
          children: [
            loading && /* @__PURE__ */ jsx("span", { style: spinnerStyle, "aria-hidden": "true" }),
            children
          ]
        }
      )
    ] });
  }
);
Button.displayName = "Button";

// src/components/Input.tsx
import React2 from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var sizeStyles2 = {
  sm: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-1) var(--space-2)",
    height: "2rem"
  },
  default: {
    fontSize: "var(--text-sm)",
    padding: "var(--space-2) var(--space-3)",
    height: "2.5rem"
  },
  lg: {
    fontSize: "var(--text-base)",
    padding: "var(--space-3) var(--space-4)",
    height: "3rem"
  }
};
var Input = React2.forwardRef(
  ({
    label,
    error,
    size = "default",
    className,
    style,
    disabled,
    id,
    ...props
  }, ref) => {
    const inputId = id || (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const wrapperStyle = {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      fontFamily: "var(--font-sans)"
    };
    const labelStyle = {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--color-text)"
    };
    const inputStyle = {
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
      ...sizeStyles2[size],
      ...style
    };
    const errorStyle = {
      fontSize: "var(--text-sm)",
      color: "var(--color-destructive)"
    };
    return /* @__PURE__ */ jsxs2("div", { style: wrapperStyle, children: [
      label && /* @__PURE__ */ jsx2("label", { htmlFor: inputId, style: labelStyle, children: label }),
      /* @__PURE__ */ jsx2(
        "input",
        {
          ref,
          id: inputId,
          className: cn(className),
          style: inputStyle,
          disabled,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": error && inputId ? `${inputId}-error` : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx2(
        "span",
        {
          id: inputId ? `${inputId}-error` : void 0,
          style: errorStyle,
          role: "alert",
          children: error
        }
      )
    ] });
  }
);
Input.displayName = "Input";

// src/components/SearchInput.tsx
import React3, { useCallback } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var SearchInput = React3.forwardRef(
  ({ onClear, shortcutKey, value, className, style, ...props }, ref) => {
    const hasValue = value !== void 0 && value !== null && String(value).length > 0;
    const handleClear = useCallback(() => {
      onClear?.();
    }, [onClear]);
    const wrapperStyle = {
      position: "relative",
      display: "flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)"
    };
    const iconStyle = {
      position: "absolute",
      left: "var(--space-3)",
      pointerEvents: "none",
      color: "var(--color-text-muted)",
      display: "flex",
      alignItems: "center"
    };
    const inputStyle = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-2) var(--space-3)",
      paddingLeft: "var(--space-10)",
      paddingRight: hasValue && onClear ? "var(--space-10)" : shortcutKey ? "var(--space-10)" : "var(--space-3)",
      height: "2.5rem",
      width: "100%",
      outline: "none",
      transition: `all var(--duration-normal) var(--ease-default)`,
      ...style
    };
    const clearBtnStyle = {
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
      borderRadius: "var(--radius-sm)"
    };
    const badgeStyle = {
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
      pointerEvents: "none"
    };
    return /* @__PURE__ */ jsxs3("div", { style: wrapperStyle, children: [
      /* @__PURE__ */ jsx3("span", { style: iconStyle, "aria-hidden": "true", children: /* @__PURE__ */ jsxs3(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx3("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsx3("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx3(
        "input",
        {
          ref,
          type: "search",
          className: cn(className),
          style: inputStyle,
          value,
          ...props
        }
      ),
      hasValue && onClear ? /* @__PURE__ */ jsx3(
        "button",
        {
          type: "button",
          style: clearBtnStyle,
          onClick: handleClear,
          "aria-label": "Clear search",
          children: /* @__PURE__ */ jsxs3(
            "svg",
            {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [
                /* @__PURE__ */ jsx3("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                /* @__PURE__ */ jsx3("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
              ]
            }
          )
        }
      ) : shortcutKey && !hasValue ? /* @__PURE__ */ jsx3("span", { style: badgeStyle, "aria-hidden": "true", children: shortcutKey }) : null
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/components/Toggle.tsx
import React4, { useCallback as useCallback2 } from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Toggle = React4.forwardRef(
  ({
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    label,
    id,
    className,
    style
  }, ref) => {
    const [internalChecked, setInternalChecked] = React4.useState(
      defaultChecked ?? false
    );
    const isChecked = checked !== void 0 ? checked : internalChecked;
    const handleClick = useCallback2(() => {
      if (disabled) return;
      const next = !isChecked;
      if (checked === void 0) {
        setInternalChecked(next);
      }
      onChange?.(next);
    }, [disabled, isChecked, checked, onChange]);
    const wrapperStyle = {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    };
    const trackStyle = {
      position: "relative",
      width: "2.75rem",
      height: "1.5rem",
      borderRadius: "var(--radius-full)",
      backgroundColor: isChecked ? "var(--color-primary)" : "var(--color-surface-active)",
      border: "1px solid var(--color-border)",
      transition: `background-color var(--duration-normal) var(--ease-default)`,
      flexShrink: 0
    };
    const thumbStyle = {
      position: "absolute",
      top: "2px",
      left: isChecked ? "calc(100% - 1.125rem - 2px)" : "2px",
      width: "1.125rem",
      height: "1.125rem",
      borderRadius: "var(--radius-full)",
      backgroundColor: isChecked ? "var(--color-on-primary)" : "var(--color-text-secondary)",
      transition: `left var(--duration-normal) var(--ease-default)`,
      boxShadow: "var(--shadow-sm)"
    };
    const labelStyle = {
      fontSize: "var(--text-sm)",
      color: "var(--color-text)",
      userSelect: "none"
    };
    return /* @__PURE__ */ jsxs4("div", { style: wrapperStyle, className: cn(className), children: [
      /* @__PURE__ */ jsx4(
        "button",
        {
          ref,
          id,
          type: "button",
          role: "switch",
          "aria-checked": isChecked,
          "aria-label": label || void 0,
          disabled,
          onClick: handleClick,
          style: {
            ...trackStyle,
            background: "none",
            backgroundColor: trackStyle.backgroundColor,
            padding: 0,
            cursor: "inherit",
            outline: "none"
          },
          children: /* @__PURE__ */ jsx4("span", { style: thumbStyle })
        }
      ),
      label && /* @__PURE__ */ jsx4("span", { style: labelStyle, children: label })
    ] });
  }
);
Toggle.displayName = "Toggle";

// src/components/Checkbox.tsx
import React5, { useCallback as useCallback3, useEffect, useRef } from "react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(
  ({
    checked,
    defaultChecked,
    indeterminate = false,
    onChange,
    disabled = false,
    label,
    id,
    className,
    style
  }, ref) => {
    const internalRef = useRef(null);
    const resolvedRef = ref || internalRef;
    useEffect(() => {
      const el = typeof resolvedRef === "object" && resolvedRef?.current ? resolvedRef.current : internalRef.current;
      if (el) {
        el.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);
    const handleChange = useCallback3(
      (e) => {
        onChange?.(e.target.checked);
      },
      [onChange]
    );
    const wrapperStyle = {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    };
    const checkboxStyle = {
      width: "1.125rem",
      height: "1.125rem",
      accentColor: "var(--color-primary)",
      cursor: disabled ? "not-allowed" : "pointer",
      margin: 0,
      flexShrink: 0
    };
    const labelStyle = {
      fontSize: "var(--text-sm)",
      color: "var(--color-text)",
      userSelect: "none"
    };
    const inputId = id || (label ? `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    return /* @__PURE__ */ jsxs5("label", { style: wrapperStyle, className: cn(className), htmlFor: inputId, children: [
      /* @__PURE__ */ jsx5(
        "input",
        {
          ref: ref || internalRef,
          id: inputId,
          type: "checkbox",
          checked,
          defaultChecked,
          onChange: handleChange,
          disabled,
          style: checkboxStyle,
          "aria-checked": indeterminate ? "mixed" : checked
        }
      ),
      label && /* @__PURE__ */ jsx5("span", { style: labelStyle, children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/components/Badge.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var variantStyles2 = {
  default: {
    backgroundColor: "var(--color-surface-hover)",
    color: "var(--color-text-secondary)",
    border: "1px solid transparent"
  },
  primary: {
    backgroundColor: "var(--color-primary)",
    color: "var(--color-on-primary)",
    border: "1px solid transparent"
  },
  success: {
    backgroundColor: "var(--color-success-bg)",
    color: "var(--color-success)",
    border: "1px solid transparent"
  },
  warning: {
    backgroundColor: "var(--color-warning-bg)",
    color: "var(--color-warning)",
    border: "1px solid transparent"
  },
  destructive: {
    backgroundColor: "var(--color-destructive-bg)",
    color: "var(--color-destructive)",
    border: "1px solid transparent"
  },
  info: {
    backgroundColor: "var(--color-info-bg)",
    color: "var(--color-info)",
    border: "1px solid transparent"
  },
  outline: {
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
    border: "1px solid var(--color-border)"
  }
};
function Badge({
  variant = "default",
  className,
  style,
  children,
  ...props
}) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    borderRadius: "var(--radius-full)",
    padding: "0.125rem var(--space-2)",
    lineHeight: "var(--leading-normal)",
    whiteSpace: "nowrap",
    ...variantStyles2[variant],
    ...style
  };
  return /* @__PURE__ */ jsx6("span", { className: cn(className), style: baseStyle, ...props, children });
}
Badge.displayName = "Badge";

// src/components/Card.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function Card({ className, style, children, ...props }) {
  const baseStyle = {
    fontFamily: "var(--font-sans)",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    boxShadow: "var(--shadow-sm)",
    overflow: "hidden",
    ...style
  };
  return /* @__PURE__ */ jsx7("div", { className: cn(className), style: baseStyle, ...props, children });
}
Card.displayName = "Card";
function CardHeader({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-6)",
    borderBottom: "1px solid var(--color-border)",
    ...style
  };
  return /* @__PURE__ */ jsx7("div", { className: cn(className), style: baseStyle, ...props, children });
}
CardHeader.displayName = "CardHeader";
function CardBody({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-6)",
    ...style
  };
  return /* @__PURE__ */ jsx7("div", { className: cn(className), style: baseStyle, ...props, children });
}
CardBody.displayName = "CardBody";
function CardFooter({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-4) var(--space-6)",
    borderTop: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--space-3)",
    ...style
  };
  return /* @__PURE__ */ jsx7("div", { className: cn(className), style: baseStyle, ...props, children });
}
CardFooter.displayName = "CardFooter";

// src/components/IntegrationCard.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function IntegrationCard({
  icon,
  title,
  description,
  action,
  className,
  style,
  children,
  ...props
}) {
  const cardStyle = {
    fontFamily: "var(--font-sans)",
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    padding: "var(--space-6)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-4)",
    transition: `all var(--duration-normal) var(--ease-default)`,
    ...style
  };
  const headerStyle = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "var(--space-4)"
  };
  const iconContainerStyle = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "var(--radius-lg)",
    backgroundColor: "var(--color-surface-hover)",
    border: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "var(--color-text)"
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)",
    flex: 1,
    minWidth: 0
  };
  const titleStyle = {
    fontSize: "var(--text-sm)",
    fontWeight: 600,
    color: "var(--color-text)",
    margin: 0
  };
  const descStyle = {
    fontSize: "var(--text-sm)",
    color: "var(--color-text-muted)",
    margin: 0,
    lineHeight: "var(--leading-normal)"
  };
  const actionStyle = {
    marginTop: "auto",
    paddingTop: "var(--space-2)"
  };
  return /* @__PURE__ */ jsxs6("div", { className: cn(className), style: cardStyle, ...props, children: [
    /* @__PURE__ */ jsxs6("div", { style: headerStyle, children: [
      icon && /* @__PURE__ */ jsx8("div", { style: iconContainerStyle, children: icon }),
      /* @__PURE__ */ jsxs6("div", { style: contentStyle, children: [
        /* @__PURE__ */ jsx8("h3", { style: titleStyle, children: title }),
        description && /* @__PURE__ */ jsx8("p", { style: descStyle, children: description })
      ] })
    ] }),
    children,
    action && /* @__PURE__ */ jsx8("div", { style: actionStyle, children: action })
  ] });
}
IntegrationCard.displayName = "IntegrationCard";

// src/components/Modal.tsx
import { useCallback as useCallback4, useEffect as useEffect2, useRef as useRef2 } from "react";
import { createPortal } from "react-dom";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function ModalHeader({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-6)",
    borderBottom: "1px solid var(--color-border)",
    fontSize: "var(--text-lg)",
    fontWeight: 600,
    color: "var(--color-text)",
    ...style
  };
  return /* @__PURE__ */ jsx9("div", { className: cn(className), style: baseStyle, ...props, children });
}
ModalHeader.displayName = "ModalHeader";
function ModalBody({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-6)",
    color: "var(--color-text)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--leading-normal)",
    ...style
  };
  return /* @__PURE__ */ jsx9("div", { className: cn(className), style: baseStyle, ...props, children });
}
ModalBody.displayName = "ModalBody";
function ModalFooter({ className, style, children, ...props }) {
  const baseStyle = {
    padding: "var(--space-4) var(--space-6)",
    borderTop: "1px solid var(--color-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "var(--space-3)",
    ...style
  };
  return /* @__PURE__ */ jsx9("div", { className: cn(className), style: baseStyle, ...props, children });
}
ModalFooter.displayName = "ModalFooter";
function Modal({ open, onClose, children, className, style }) {
  const panelRef = useRef2(null);
  const handleEscape = useCallback4(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );
  const handleBackdropClick = useCallback4(
    (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );
  useEffect2(() => {
    if (!open) return;
    document.addEventListener("keydown", handleEscape);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prev;
    };
  }, [open, handleEscape]);
  if (!open) return null;
  const backdropStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "var(--z-modal-backdrop)",
    fontFamily: "var(--font-sans)",
    padding: "var(--space-4)"
  };
  const panelStyle = {
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    boxShadow: "var(--shadow-xl)",
    maxWidth: "32rem",
    width: "100%",
    maxHeight: "85vh",
    overflow: "auto",
    position: "relative",
    zIndex: "var(--z-modal)",
    ...style
  };
  const closeBtnStyle = {
    position: "absolute",
    top: "var(--space-4)",
    right: "var(--space-4)",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--color-text-muted)",
    padding: "var(--space-1)",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  };
  return createPortal(
    /* @__PURE__ */ jsx9(
      "div",
      {
        style: backdropStyle,
        onClick: handleBackdropClick,
        role: "dialog",
        "aria-modal": "true",
        children: /* @__PURE__ */ jsxs7("div", { ref: panelRef, className: cn(className), style: panelStyle, children: [
          /* @__PURE__ */ jsx9(
            "button",
            {
              type: "button",
              style: closeBtnStyle,
              onClick: onClose,
              "aria-label": "Close",
              children: /* @__PURE__ */ jsxs7(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    /* @__PURE__ */ jsx9("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                    /* @__PURE__ */ jsx9("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                  ]
                }
              )
            }
          ),
          children
        ] })
      }
    ),
    document.body
  );
}
Modal.displayName = "Modal";

// src/components/DataTable.tsx
import { useCallback as useCallback5, useMemo, useState } from "react";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function DataTable({
  columns,
  data,
  rowKey,
  selectable = false,
  selectedKeys,
  onSelectionChange,
  onSort,
  emptyMessage = "No data to display",
  className,
  style
}) {
  const [sortState, setSortState] = useState(null);
  const allKeys = useMemo(
    () => new Set(data.map((row, i) => rowKey(row, i))),
    [data, rowKey]
  );
  const allSelected = selectable && data.length > 0 && selectedKeys?.size === allKeys.size;
  const someSelected = selectable && selectedKeys && selectedKeys.size > 0 && !allSelected;
  const handleSelectAll = useCallback5(() => {
    if (!onSelectionChange) return;
    if (allSelected) {
      onSelectionChange(/* @__PURE__ */ new Set());
    } else {
      onSelectionChange(new Set(allKeys));
    }
  }, [allSelected, allKeys, onSelectionChange]);
  const handleSelectRow = useCallback5(
    (key) => {
      if (!onSelectionChange || !selectedKeys) return;
      const next = new Set(selectedKeys);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      onSelectionChange(next);
    },
    [selectedKeys, onSelectionChange]
  );
  const handleSort = useCallback5(
    (key) => {
      let direction = "asc";
      if (sortState?.key === key && sortState.direction === "asc") {
        direction = "desc";
      }
      setSortState({ key, direction });
      onSort?.(key, direction);
    },
    [sortState, onSort]
  );
  const tableStyle = {
    fontFamily: "var(--font-sans)",
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "var(--text-sm)",
    ...style
  };
  const thStyle = (col) => ({
    padding: "var(--space-3) var(--space-4)",
    textAlign: col.align || "left",
    fontWeight: 500,
    color: "var(--color-text-secondary)",
    borderBottom: "1px solid var(--color-border)",
    backgroundColor: "var(--color-surface)",
    whiteSpace: "nowrap",
    width: col.width,
    cursor: col.sortable ? "pointer" : "default",
    userSelect: col.sortable ? "none" : "auto"
  });
  const tdStyle = (col) => ({
    padding: "var(--space-3) var(--space-4)",
    textAlign: col.align || "left",
    color: "var(--color-text)",
    borderBottom: "1px solid var(--color-border)"
  });
  const checkboxCellStyle = {
    padding: "var(--space-3) var(--space-4)",
    width: "2.5rem",
    borderBottom: "1px solid var(--color-border)"
  };
  const emptyStyle = {
    padding: "var(--space-12) var(--space-4)",
    textAlign: "center",
    color: "var(--color-text-muted)"
  };
  const sortIndicator = (key) => {
    if (sortState?.key !== key) return " \u2195";
    return sortState.direction === "asc" ? " \u2191" : " \u2193";
  };
  return /* @__PURE__ */ jsx10(
    "div",
    {
      style: {
        overflow: "auto",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)"
      },
      children: /* @__PURE__ */ jsxs8("table", { className: cn(className), style: tableStyle, children: [
        /* @__PURE__ */ jsx10("thead", { children: /* @__PURE__ */ jsxs8("tr", { children: [
          selectable && /* @__PURE__ */ jsx10("th", { style: { ...checkboxCellStyle, backgroundColor: "var(--color-surface)" }, children: /* @__PURE__ */ jsx10(
            "input",
            {
              type: "checkbox",
              checked: allSelected,
              ref: (el) => {
                if (el) el.indeterminate = !!someSelected;
              },
              onChange: handleSelectAll,
              style: { accentColor: "var(--color-primary)", cursor: "pointer" },
              "aria-label": "Select all rows"
            }
          ) }),
          columns.map((col) => /* @__PURE__ */ jsxs8(
            "th",
            {
              style: thStyle(col),
              onClick: col.sortable ? () => handleSort(col.key) : void 0,
              children: [
                col.header,
                col.sortable && /* @__PURE__ */ jsx10("span", { style: { fontSize: "var(--text-xs)" }, children: sortIndicator(col.key) })
              ]
            },
            col.key
          ))
        ] }) }),
        /* @__PURE__ */ jsx10("tbody", { children: data.length === 0 ? /* @__PURE__ */ jsx10("tr", { children: /* @__PURE__ */ jsx10(
          "td",
          {
            colSpan: columns.length + (selectable ? 1 : 0),
            style: emptyStyle,
            children: emptyMessage
          }
        ) }) : data.map((row, i) => {
          const key = rowKey(row, i);
          const isSelected = selectedKeys?.has(key) ?? false;
          return /* @__PURE__ */ jsxs8(
            "tr",
            {
              style: {
                backgroundColor: isSelected ? "var(--color-surface-hover)" : "transparent"
              },
              children: [
                selectable && /* @__PURE__ */ jsx10("td", { style: checkboxCellStyle, children: /* @__PURE__ */ jsx10(
                  "input",
                  {
                    type: "checkbox",
                    checked: isSelected,
                    onChange: () => handleSelectRow(key),
                    style: {
                      accentColor: "var(--color-primary)",
                      cursor: "pointer"
                    },
                    "aria-label": `Select row ${key}`
                  }
                ) }),
                columns.map((col) => {
                  const rawValue = row[col.key];
                  return /* @__PURE__ */ jsx10("td", { style: tdStyle(col), children: col.render ? col.render(rawValue, row, i) : rawValue }, col.key);
                })
              ]
            },
            key
          );
        }) })
      ] })
    }
  );
}
DataTable.displayName = "DataTable";

// src/components/Sidebar.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function Sidebar({ className, style, children, ...props }) {
  const baseStyle = {
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
    ...style
  };
  return /* @__PURE__ */ jsx11("nav", { className: cn(className), style: baseStyle, ...props, children });
}
Sidebar.displayName = "Sidebar";

// src/components/SidebarItem.tsx
import React8 from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var SidebarItem = React8.forwardRef(
  ({ icon, label, active = false, badge, className, style, ...props }, ref) => {
    const baseStyle = {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "var(--space-2) var(--space-3)",
      borderRadius: "var(--radius-lg)",
      border: "none",
      width: "100%",
      textAlign: "left",
      cursor: "pointer",
      backgroundColor: active ? "var(--color-surface-active)" : "transparent",
      color: active ? "var(--color-text)" : "var(--color-text-secondary)",
      fontWeight: active ? 500 : 400,
      transition: `all var(--duration-fast) var(--ease-default)`,
      ...style
    };
    const iconStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      width: "1.25rem",
      height: "1.25rem",
      color: active ? "var(--color-primary)" : "var(--color-text-muted)"
    };
    const labelWrapperStyle = {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
    const badgeStyle = {
      fontSize: "var(--text-xs)",
      fontWeight: 500,
      backgroundColor: "var(--color-primary)",
      color: "var(--color-on-primary)",
      borderRadius: "var(--radius-full)",
      padding: "0 var(--space-2)",
      minWidth: "1.25rem",
      height: "1.25rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1,
      flexShrink: 0
    };
    return /* @__PURE__ */ jsxs9(
      "button",
      {
        ref,
        className: cn(className),
        style: baseStyle,
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx12("span", { style: iconStyle, children: icon }),
          /* @__PURE__ */ jsx12("span", { style: labelWrapperStyle, children: label }),
          badge !== void 0 && /* @__PURE__ */ jsx12("span", { style: badgeStyle, children: badge })
        ]
      }
    );
  }
);
SidebarItem.displayName = "SidebarItem";

// src/components/TopNav.tsx
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
function TopNav({
  left,
  center,
  right,
  className,
  style,
  children,
  ...props
}) {
  const baseStyle = {
    fontFamily: "var(--font-sans)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "var(--color-surface)",
    borderBottom: "1px solid var(--color-border)",
    padding: "0 var(--space-6)",
    height: "3.5rem",
    flexShrink: 0,
    ...style
  };
  const slotStyle = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)"
  };
  const leftStyle = {
    ...slotStyle,
    justifyContent: "flex-start",
    flex: 1
  };
  const centerStyle = {
    ...slotStyle,
    justifyContent: "center",
    flex: 1
  };
  const rightStyle = {
    ...slotStyle,
    justifyContent: "flex-end",
    flex: 1
  };
  return /* @__PURE__ */ jsxs10("header", { className: cn(className), style: baseStyle, ...props, children: [
    /* @__PURE__ */ jsx13("div", { style: leftStyle, children: left }),
    /* @__PURE__ */ jsx13("div", { style: centerStyle, children: center }),
    /* @__PURE__ */ jsx13("div", { style: rightStyle, children: right }),
    children
  ] });
}
TopNav.displayName = "TopNav";

// src/components/PageHeader.tsx
import { jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function PageHeader({
  title,
  description,
  actions,
  className,
  style,
  ...props
}) {
  const baseStyle = {
    fontFamily: "var(--font-sans)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "var(--space-4)",
    ...style
  };
  const textStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "var(--space-1)"
  };
  const titleStyle = {
    fontSize: "var(--text-2xl)",
    fontWeight: 700,
    color: "var(--color-text)",
    margin: 0,
    lineHeight: "var(--leading-tight)"
  };
  const descStyle = {
    fontSize: "var(--text-sm)",
    color: "var(--color-text-secondary)",
    margin: 0,
    lineHeight: "var(--leading-normal)"
  };
  const actionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    flexShrink: 0
  };
  return /* @__PURE__ */ jsxs11("div", { className: cn(className), style: baseStyle, ...props, children: [
    /* @__PURE__ */ jsxs11("div", { style: textStyle, children: [
      /* @__PURE__ */ jsx14("h1", { style: titleStyle, children: title }),
      description && /* @__PURE__ */ jsx14("p", { style: descStyle, children: description })
    ] }),
    actions && /* @__PURE__ */ jsx14("div", { style: actionsStyle, children: actions })
  ] });
}
PageHeader.displayName = "PageHeader";

// src/components/StatusIndicator.tsx
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var dotColors = {
  online: "var(--color-success)",
  offline: "var(--color-text-muted)",
  warning: "var(--color-warning)",
  error: "var(--color-destructive)"
};
function StatusIndicator({
  variant,
  label,
  className,
  style,
  ...props
}) {
  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    ...style
  };
  const dotStyle = {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "var(--radius-full)",
    backgroundColor: dotColors[variant],
    flexShrink: 0
  };
  const labelStyle = {
    color: "var(--color-text-secondary)"
  };
  return /* @__PURE__ */ jsxs12("span", { className: cn(className), style: baseStyle, ...props, children: [
    /* @__PURE__ */ jsx15("span", { style: dotStyle, "aria-hidden": "true" }),
    label && /* @__PURE__ */ jsx15("span", { style: labelStyle, children: label })
  ] });
}
StatusIndicator.displayName = "StatusIndicator";

// src/components/Avatar.tsx
import { useState as useState2 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var sizeMap = {
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
  xl: "3.5rem"
};
var fontSizeMap = {
  sm: "var(--text-xs)",
  md: "var(--text-sm)",
  lg: "var(--text-sm)",
  xl: "var(--text-lg)"
};
function Avatar({
  src,
  alt,
  initials,
  size = "md",
  className,
  style,
  ...props
}) {
  const [imgError, setImgError] = useState2(false);
  const showImage = src && !imgError;
  const dim = sizeMap[size];
  const baseStyle = {
    width: dim,
    height: dim,
    borderRadius: "var(--radius-full)",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    backgroundColor: showImage ? "transparent" : "var(--color-primary)",
    color: "var(--color-on-primary)",
    fontFamily: "var(--font-sans)",
    fontSize: fontSizeMap[size],
    fontWeight: 600,
    userSelect: "none",
    ...style
  };
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: cn(className),
      style: baseStyle,
      role: "img",
      "aria-label": alt || initials || "avatar",
      ...props,
      children: showImage ? /* @__PURE__ */ jsx16(
        "img",
        {
          src,
          alt: alt || "",
          style: imgStyle,
          onError: () => setImgError(true)
        }
      ) : /* @__PURE__ */ jsx16("span", { children: initials?.slice(0, 2).toUpperCase() || "?" })
    }
  );
}
Avatar.displayName = "Avatar";

// src/components/Alert.tsx
import { useState as useState3 } from "react";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var variantStyles3 = {
  info: {
    bg: "var(--color-info-bg)",
    border: "var(--color-info)",
    icon: "var(--color-info)"
  },
  success: {
    bg: "var(--color-success-bg)",
    border: "var(--color-success)",
    icon: "var(--color-success)"
  },
  warning: {
    bg: "var(--color-warning-bg)",
    border: "var(--color-warning)",
    icon: "var(--color-warning)"
  },
  destructive: {
    bg: "var(--color-destructive-bg)",
    border: "var(--color-destructive)",
    icon: "var(--color-destructive)"
  }
};
var icons = {
  info: /* @__PURE__ */ jsxs13("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx17("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx17("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    /* @__PURE__ */ jsx17("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ] }),
  success: /* @__PURE__ */ jsxs13("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx17("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
    /* @__PURE__ */ jsx17("polyline", { points: "22 4 12 14.01 9 11.01" })
  ] }),
  warning: /* @__PURE__ */ jsxs13("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx17("path", { d: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" }),
    /* @__PURE__ */ jsx17("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
    /* @__PURE__ */ jsx17("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ] }),
  destructive: /* @__PURE__ */ jsxs13("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx17("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ jsx17("line", { x1: "15", y1: "9", x2: "9", y2: "15" }),
    /* @__PURE__ */ jsx17("line", { x1: "9", y1: "9", x2: "15", y2: "15" })
  ] })
};
function Alert({
  variant = "info",
  dismissable = false,
  onDismiss,
  className,
  style,
  children,
  ...props
}) {
  const [visible, setVisible] = useState3(true);
  if (!visible) return null;
  const vs = variantStyles3[variant];
  const baseStyle = {
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
    ...style
  };
  const iconWrapStyle = {
    color: vs.icon,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    marginTop: "0.125rem"
  };
  const contentStyle = {
    flex: 1,
    minWidth: 0
  };
  const closeBtnStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--color-text-muted)",
    padding: "var(--space-1)",
    borderRadius: "var(--radius-sm)",
    display: "flex",
    alignItems: "center",
    flexShrink: 0
  };
  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };
  return /* @__PURE__ */ jsxs13(
    "div",
    {
      className: cn(className),
      style: baseStyle,
      role: "alert",
      ...props,
      children: [
        /* @__PURE__ */ jsx17("span", { style: iconWrapStyle, "aria-hidden": "true", children: icons[variant] }),
        /* @__PURE__ */ jsx17("div", { style: contentStyle, children }),
        dismissable && /* @__PURE__ */ jsx17(
          "button",
          {
            type: "button",
            style: closeBtnStyle,
            onClick: handleDismiss,
            "aria-label": "Dismiss",
            children: /* @__PURE__ */ jsxs13(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsx17("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  /* @__PURE__ */ jsx17("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
Alert.displayName = "Alert";

// src/components/Select.tsx
import React11 from "react";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
var Select = React11.forwardRef(
  ({ label, error, className, style, disabled, id, children, ...props }, ref) => {
    const selectId = id || (label ? `select-${label.replace(/\s+/g, "-").toLowerCase()}` : void 0);
    const wrapperStyle = {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      fontFamily: "var(--font-sans)"
    };
    const labelStyle = {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--color-text)"
    };
    const selectWrapStyle = {
      position: "relative",
      display: "flex",
      alignItems: "center"
    };
    const selectStyle = {
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
      ...style
    };
    const errorStyle = {
      fontSize: "var(--text-sm)",
      color: "var(--color-destructive)"
    };
    return /* @__PURE__ */ jsxs14("div", { style: wrapperStyle, children: [
      label && /* @__PURE__ */ jsx18("label", { htmlFor: selectId, style: labelStyle, children: label }),
      /* @__PURE__ */ jsx18("div", { style: selectWrapStyle, children: /* @__PURE__ */ jsx18(
        "select",
        {
          ref,
          id: selectId,
          className: cn(className),
          style: selectStyle,
          disabled,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": error && selectId ? `${selectId}-error` : void 0,
          ...props,
          children
        }
      ) }),
      error && /* @__PURE__ */ jsx18(
        "span",
        {
          id: selectId ? `${selectId}-error` : void 0,
          style: errorStyle,
          role: "alert",
          children: error
        }
      )
    ] });
  }
);
Select.displayName = "Select";

// src/components/Tooltip.tsx
import { useCallback as useCallback6, useRef as useRef3, useState as useState4 } from "react";
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
function Tooltip({
  content,
  position = "top",
  delay = 200,
  children,
  className
}) {
  const [visible, setVisible] = useState4(false);
  const timerRef = useRef3();
  const show = useCallback6(() => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);
  const hide = useCallback6(() => {
    clearTimeout(timerRef.current);
    setVisible(false);
  }, []);
  const wrapperStyle = {
    position: "relative",
    display: "inline-flex"
  };
  const positionStyles = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "var(--space-2)"
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "var(--space-2)"
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: "var(--space-2)"
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: "var(--space-2)"
    }
  };
  const tooltipStyle = {
    position: "absolute",
    ...positionStyles[position],
    zIndex: "var(--z-tooltip)",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: 500,
    color: "var(--color-text)",
    backgroundColor: "var(--color-bg-overlay)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "var(--space-1) var(--space-2)",
    boxShadow: "var(--shadow-lg)",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    opacity: visible ? 1 : 0,
    transition: `opacity var(--duration-fast) var(--ease-default)`
  };
  return /* @__PURE__ */ jsxs15(
    "span",
    {
      style: wrapperStyle,
      className: cn(className),
      onMouseEnter: show,
      onMouseLeave: hide,
      onFocus: show,
      onBlur: hide,
      children: [
        children,
        /* @__PURE__ */ jsx19("span", { style: tooltipStyle, role: "tooltip", "aria-hidden": !visible, children: content })
      ]
    }
  );
}
Tooltip.displayName = "Tooltip";
export {
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  DataTable,
  Input,
  IntegrationCard,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  PageHeader,
  SearchInput,
  Select,
  Sidebar,
  SidebarItem,
  StatusIndicator,
  Toggle,
  Tooltip,
  TopNav
};
//# sourceMappingURL=index.js.map