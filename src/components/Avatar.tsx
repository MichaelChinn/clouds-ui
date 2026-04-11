import React, { useState } from "react";
import { cn } from "../lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
  xl: "3.5rem",
};

const fontSizeMap: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "var(--text-xs)",
  md: "var(--text-sm)",
  lg: "var(--text-sm)",
  xl: "var(--text-lg)",
};

function Avatar({
  src,
  alt,
  initials,
  size = "md",
  className,
  style,
  ...props
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = src && !imgError;

  const dim = sizeMap[size];

  const baseStyle: React.CSSProperties = {
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
    ...style,
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div
      className={cn(className)}
      style={baseStyle}
      role="img"
      aria-label={alt || initials || "avatar"}
      {...props}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || ""}
          style={imgStyle}
          onError={() => setImgError(true)}
        />
      ) : (
        <span>{initials?.slice(0, 2).toUpperCase() || "?"}</span>
      )}
    </div>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
