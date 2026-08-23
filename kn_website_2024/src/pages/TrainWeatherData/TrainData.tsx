import { useEffect, useState } from "react";
import MuiTable from "./MuiTable";
import { fetchDeparturesWithinWindow } from "./trainApi";
import type { Departure } from "./trainTypes";

type Column<T> = {
  header: string;
  accessor: keyof T;
};
type TrainDataProps = {
    origin: string;
    destination: string;
};

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Line", accessor: "line" },
];

export default function TrainData({ origin, destination }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);

    useEffect(() => {
        const loadDepartures = async () => {
            const loadedDepartures = await fetchDeparturesWithinWindow(origin, destination);
            setDepartures(loadedDepartures);
        };

        loadDepartures();
    }, [origin, destination]);

    return (
        <div>
            <h2>Train Departures: {origin} → {destination}</h2>
            {departures.length === 0 ? (
                <div>No departures found.</div>
            ) : (
                <MuiTable title="Train Departures" columns={columns} data={departures} />
            )}
        </div>
    );
}