import type { Key } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";

export type Column<T> = {
  header: string;
  accessor: keyof T;
};

type MuiTableProps<T> = {
  title?: string;
  columns: Column<T>[];
  data: T[];
  getRowKey: (row: T) => Key;
  getCellBackgroundColor?: (row: T) => string;
};

export default function MuiTable<T extends object>({
  title,
  columns,
  data,
  getRowKey,
  getCellBackgroundColor,
}: MuiTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        boxShadow: 5,
        overflowX: "auto",
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text)",
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            px: 2,
            py: 1.5,
            borderBottom: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            color: "var(--color-text)",
          }}
        >
          {title}
        </Typography>
      )}
      <Table sx={{ backgroundColor: "var(--color-surface)", color: "var(--color-text)" }}>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell
                key={col.header}
                sx={{
                  fontWeight: 600,
                  backgroundColor: "var(--color-surface-alt)",
                  color: "var(--color-text)",
                }}
              >
                {col.header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align="center"
                sx={{ color: "var(--color-text-muted)", py: 3 }}
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            data.map((row) => (
              <TableRow key={getRowKey(row)} hover>
                {columns.map(col => (
                    <TableCell
                      key={String(col.accessor)}
                      sx={{
                        backgroundColor: getCellBackgroundColor?.(row) ?? "transparent",
                        color: "var(--color-text)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      {String(row[col.accessor])}
                    </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
