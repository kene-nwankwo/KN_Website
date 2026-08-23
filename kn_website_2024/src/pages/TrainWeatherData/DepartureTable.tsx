import MuiTable, { type Column } from "./MuiTable";
import type { Departure } from "./trainTypes";

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Line", accessor: "line" },
];

const getDepartureCellColor = (departure: Departure): string => {
  const currentTimeEpochSeconds = Math.floor(Date.now() / 1000);
  const minutesUntilDeparture =
    (departure.departureTimeEpochSeconds - currentTimeEpochSeconds) / 60;

  if (minutesUntilDeparture >= 8 && minutesUntilDeparture <= 12) {
    return "lightGreen";
  }

  if (minutesUntilDeparture >= 6 && minutesUntilDeparture <= 16) {
    return "#FFD580";
  }

  return "inherit";
};

export default function DepartureTable({ departures }: { departures: Departure[] }) {
  return (
    <MuiTable
      title="Train Departures"
      columns={columns}
      data={departures}
      getRowKey={(departure) => `${departure.departureTimeEpochSeconds}-${departure.line}`}
      getCellBackgroundColor={getDepartureCellColor}
    />
  );
}
