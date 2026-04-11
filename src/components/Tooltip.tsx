import React, { useCallback, useRef, useState } from "react";
import { cn } from "../lib/utils";

export interface TooltipProps {
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  children: React.ReactElement;
  className?: string;
}

function Tooltip({
  content,
  position = "top",
  delay = 200,
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [delay]);

  const hide = useCallback(() => {
    clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  const wrapperStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
  };

  const positionStyles: Record<string, React.CSSProperties> = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: "var(--space-2)",
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "var(--space-2)",
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: "var(--space-2)",
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: "var(--space-2)",
    },
  };

  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    ...positionStyles[position],
    zIndex: "var(--z-tooltip)" as unknown as number,
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
    transition: `opacity var(--duration-fast) var(--ease-default)`,
  };

  return (
    <span
      style={wrapperStyle}
      className={cn(className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      <span style={tooltipStyle} role="tooltip" aria-hidden={!visible}>
        {content}
      </span>
    </span>
  );
}

Tooltip.displayName = "Tooltip";

export { Tooltip };
