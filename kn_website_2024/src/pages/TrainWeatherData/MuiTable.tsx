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

const getCellColor = <T extends object>(row: T, lowMinutes: number, highMinutes: number, inputColor: string, currentColor: string): string => {
  const departureTimeEpochSeconds = Number(row['departureTimeEpochSeconds' as keyof T]);
  const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
  
  if (departureTimeEpochSeconds >= (currentTimeEpochSeconds + (60 * lowMinutes)) && 
      departureTimeEpochSeconds <= (currentTimeEpochSeconds + (60 * highMinutes))) {
    return inputColor;
  }
  return currentColor;
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
                {columns.map(col => {
                  let cellColor = "inherit";
                  cellColor = getCellColor(row, 6, 16, "#FFD580", cellColor);
                  cellColor = getCellColor(row, 8, 12, "lightGreen", cellColor);
                  return (
                    <TableCell key={String(col.accessor)} sx={{ backgroundColor: cellColor }}>
                      {String(row[col.accessor])}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
