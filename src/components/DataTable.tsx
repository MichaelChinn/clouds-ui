import React, { useCallback, useMemo, useState } from "react";
import { cn } from "../lib/utils";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (value: unknown, row: T, index: number) => React.ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: (row: T, index: number) => string | number;
  selectable?: boolean;
  selectedKeys?: Set<string | number>;
  onSelectionChange?: (keys: Set<string | number>) => void;
  onSort?: (key: string, direction: "asc" | "desc") => void;
  emptyMessage?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

type SortDirection = "asc" | "desc";

function DataTable<T>({
  columns,
  data,
  rowKey,
  selectable = false,
  selectedKeys,
  onSelectionChange,
  onSort,
  emptyMessage = "No data to display",
  className,
  style,
}: DataTableProps<T>) {
  const [sortState, setSortState] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);

  const allKeys = useMemo(
    () => new Set(data.map((row, i) => rowKey(row, i))),
    [data, rowKey],
  );

  const allSelected =
    selectable && data.length > 0 && selectedKeys?.size === allKeys.size;

  const someSelected =
    selectable && selectedKeys && selectedKeys.size > 0 && !allSelected;

  const handleSelectAll = useCallback(() => {
    if (!onSelectionChange) return;
    if (allSelected) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(allKeys));
    }
  }, [allSelected, allKeys, onSelectionChange]);

  const handleSelectRow = useCallback(
    (key: string | number) => {
      if (!onSelectionChange || !selectedKeys) return;
      const next = new Set(selectedKeys);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      onSelectionChange(next);
    },
    [selectedKeys, onSelectionChange],
  );

  const handleSort = useCallback(
    (key: string) => {
      let direction: SortDirection = "asc";
      if (sortState?.key === key && sortState.direction === "asc") {
        direction = "desc";
      }
      setSortState({ key, direction });
      onSort?.(key, direction);
    },
    [sortState, onSort],
  );

  const tableStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "var(--text-sm)",
    ...style,
  };

  const thStyle = (col: DataTableColumn<T>): React.CSSProperties => ({
    padding: "var(--space-3) var(--space-4)",
    textAlign: (col.align || "left") as React.CSSProperties["textAlign"],
    fontWeight: 500,
    color: "var(--color-text-secondary)",
    borderBottom: "1px solid var(--color-border)",
    backgroundColor: "var(--color-surface)",
    whiteSpace: "nowrap",
    width: col.width,
    cursor: col.sortable ? "pointer" : "default",
    userSelect: col.sortable ? "none" : "auto",
  });

  const tdStyle = (col: DataTableColumn<T>): React.CSSProperties => ({
    padding: "var(--space-3) var(--space-4)",
    textAlign: (col.align || "left") as React.CSSProperties["textAlign"],
    color: "var(--color-text)",
    borderBottom: "1px solid var(--color-border)",
  });

  const checkboxCellStyle: React.CSSProperties = {
    padding: "var(--space-3) var(--space-4)",
    width: "2.5rem",
    borderBottom: "1px solid var(--color-border)",
  };

  const emptyStyle: React.CSSProperties = {
    padding: "var(--space-12) var(--space-4)",
    textAlign: "center",
    color: "var(--color-text-muted)",
  };

  const sortIndicator = (key: string) => {
    if (sortState?.key !== key) return " \u2195";
    return sortState.direction === "asc" ? " \u2191" : " \u2193";
  };

  return (
    <div
      style={{
        overflow: "auto",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <table className={cn(className)} style={tableStyle}>
        <thead>
          <tr>
            {selectable && (
              <th style={{ ...checkboxCellStyle, backgroundColor: "var(--color-surface)" }}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = !!someSelected;
                  }}
                  onChange={handleSelectAll}
                  style={{ accentColor: "var(--color-primary)", cursor: "pointer" }}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                style={thStyle(col)}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
              >
                {col.header}
                {col.sortable && (
                  <span style={{ fontSize: "var(--text-xs)" }}>
                    {sortIndicator(col.key)}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                style={emptyStyle}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, i) => {
              const key = rowKey(row, i);
              const isSelected = selectedKeys?.has(key) ?? false;
              return (
                <tr
                  key={key}
                  style={{
                    backgroundColor: isSelected
                      ? "var(--color-surface-hover)"
                      : "transparent",
                  }}
                >
                  {selectable && (
                    <td style={checkboxCellStyle}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectRow(key)}
                        style={{
                          accentColor: "var(--color-primary)",
                          cursor: "pointer",
                        }}
                        aria-label={`Select row ${key}`}
                      />
                    </td>
                  )}
                  {columns.map((col) => {
                    const rawValue = (row as Record<string, unknown>)[col.key];
                    return (
                      <td key={col.key} style={tdStyle(col)}>
                        {col.render
                          ? col.render(rawValue, row, i)
                          : (rawValue as React.ReactNode)}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.displayName = "DataTable";

export { DataTable };
