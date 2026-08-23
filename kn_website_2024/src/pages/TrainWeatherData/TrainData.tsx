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
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);
        setError(null);

        const loadDepartures = async () => {
            try {
                const loadedDepartures = await fetchDeparturesWithinWindow(
                    route,
                    abortController.signal,
                );
                setDepartures(loadedDepartures);
            } catch (requestError) {
                if (abortController.signal.aborted) {
                    return;
                }

                setDepartures([]);
                setError(requestError instanceof Error ? requestError.message : "Unable to load train departures.");
            } finally {
                if (!abortController.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        loadDepartures();

        return () => abortController.abort();
    }, [route, retryCount]);

    return (
        <div>
            <h2>Train Departures: {route.origin} → {route.destination}</h2>
            {isLoading ? (
                <div role="status">Loading departures...</div>
            ) : error ? (
                <div role="alert">
                    <p>Unable to load departures: {error}</p>
                    <button type="button" onClick={() => setRetryCount((count) => count + 1)}>
                        Try again
                    </button>
                </div>
            ) : departures.length === 0 ? (
                <div>No departures found.</div>
            ) : (
                <MuiTable title="Train Departures" columns={columns} data={departures} />
            )}
        </div>
    );
}