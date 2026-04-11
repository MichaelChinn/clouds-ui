import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "../lib/utils";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

function ModalHeader({ className, style, children, ...props }: ModalHeaderProps) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--space-6)",
    borderBottom: "1px solid var(--color-border)",
    fontSize: "var(--text-lg)",
    fontWeight: 600,
    color: "var(--color-text)",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

ModalHeader.displayName = "ModalHeader";

function ModalBody({ className, style, children, ...props }: ModalBodyProps) {
  const baseStyle: React.CSSProperties = {
    padding: "var(--space-6)",
    color: "var(--color-text)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--leading-normal)",
    ...style,
  };

  return (
    <div className={cn(className)} style={baseStyle} {...props}>
      {children}
    </div>
  );
}

ModalBody.displayName = "ModalBody";

function ModalFooter({ className, style, children, ...props }: ModalFooterProps) {
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

ModalFooter.displayName = "ModalFooter";

function Modal({ open, onClose, children, className, style }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
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

  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "var(--z-modal-backdrop)" as unknown as number,
    fontFamily: "var(--font-sans)",
    padding: "var(--space-4)",
  };

  const panelStyle: React.CSSProperties = {
    backgroundColor: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    boxShadow: "var(--shadow-xl)",
    maxWidth: "32rem",
    width: "100%",
    maxHeight: "85vh",
    overflow: "auto",
    position: "relative",
    zIndex: "var(--z-modal)" as unknown as number,
    ...style,
  };

  const closeBtnStyle: React.CSSProperties = {
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
    zIndex: 1,
  };

  return createPortal(
    <div
      style={backdropStyle}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div ref={panelRef} className={cn(className)} style={panelStyle}>
        <button
          type="button"
          style={closeBtnStyle}
          onClick={onClose}
          aria-label="Close"
        >
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.displayName = "Modal";

export { Modal, ModalHeader, ModalBody, ModalFooter };
