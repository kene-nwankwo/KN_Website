import { useEffect, useState } from "react";
import MuiTable from "./MuiTable";
import { fetchDeparturesWithinWindow } from "./trainApi";
import type { TrainRoute } from "./config";
import type { Departure } from "./trainTypes";

type Column<T> = {
  header: string;
  accessor: keyof T;
};
type TrainDataProps = {
    route: TrainRoute;
};

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Line", accessor: "line" },
];

export default function TrainData({ route }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);

    useEffect(() => {
        const loadDepartures = async () => {
            const loadedDepartures = await fetchDeparturesWithinWindow(route);
            setDepartures(loadedDepartures);
        };

        loadDepartures();
    }, [route]);

    return (
        <div>
            <h2>Train Departures: {route.origin} → {route.destination}</h2>
            {departures.length === 0 ? (
                <div>No departures found.</div>
            ) : (
                <MuiTable title="Train Departures" columns={columns} data={departures} />
            )}
        </div>
    );
}