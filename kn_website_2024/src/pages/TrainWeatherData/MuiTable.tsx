import React from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";

type Column<T> = {
  header: string;
  accessor: keyof T;
};

type MuiTableProps<T> = {
  title?: string;
  columns: Column<T>[];
  data: T[];
};

export default function MuiTable<T extends object>({
  title,
  columns,
  data
}: MuiTableProps<T>) {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 5 }}>
      {title && (
        <Typography
          variant="h6"
          sx={{ px: 2, py: 1.5, borderBottom: "1px solid #ddd" }}
        >
          {title}
        </Typography>
      )}
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(col => (
              <TableCell key={col.header} sx={{ fontWeight: 600}}>
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
                sx={{ color: "gray.500", py: 3 }}
              >
                No data available
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, i) => (
              <TableRow key={i} hover>
                {columns.map(col => (
                  <TableCell key={String(col.accessor)}>
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
