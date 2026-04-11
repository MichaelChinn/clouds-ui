"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/css/tailwind-preset.ts
var tailwind_preset_exports = {};
__export(tailwind_preset_exports, {
  default: () => tailwind_preset_default
});
module.exports = __toCommonJS(tailwind_preset_exports);
var cloudsPreset = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Cascadia Code", "monospace"]
      },
      colors: {
        bg: {
          DEFAULT: "var(--color-bg)",
          raised: "var(--color-bg-raised)",
          overlay: "var(--color-bg-overlay)",
          subtle: "var(--color-bg-subtle)"
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
          active: "var(--color-surface-active)"
        },
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
          focus: "var(--color-border-focus)"
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)"
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)"
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)"
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)"
        },
        success: {
          DEFAULT: "var(--color-success)",
          bg: "var(--color-success-bg)"
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          bg: "var(--color-warning-bg)"
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          bg: "var(--color-destructive-bg)"
        },
        info: {
          DEFAULT: "var(--color-info)",
          bg: "var(--color-info-bg)"
        }
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)"
      }
    }
  }
};
var tailwind_preset_default = cloudsPreset;
//# sourceMappingURL=tailwind-preset.cjs.map