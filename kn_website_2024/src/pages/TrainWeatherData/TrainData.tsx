import { useEffect, useState } from "react";
import DataStateMessage from "./DataStateMessage";
import DepartureTable from "./DepartureTable";
import { fetchDeparturesWithinWindow } from "./trainApi";
import type { TrainRoute } from "./config";
import type { Departure } from "./trainTypes";

type TrainDataProps = {
    route: TrainRoute;
    refreshKey: number;
};

export default function TrainData({ route, refreshKey }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

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
                setLastUpdated(new Date());
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
    }, [route, refreshKey, retryCount]);

    return (
        <div className="train-departure-section">
            <h2 id={`${route.id}-heading`}>Train Departures: {route.origin} → {route.destination}</h2>
            {isLoading ? (
                <div className="train-weather-status" role="status">Loading departures...</div>
            ) : error ? (
                <DataStateMessage
                    type="error"
                    message="Train departure data is currently unavailable."
                    onRetry={() => setRetryCount((count) => count + 1)}
                />
            ) : departures.length === 0 ? (
                <DataStateMessage
                    type="empty"
                    message="No departures are available in the next 45 minutes."
                />
            ) : (
                <DepartureTable departures={departures} />
            )}
            {lastUpdated && (
                <p className="train-weather-last-updated">
                    Last updated: {lastUpdated.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                </p>
            )}
        </div>
    );
}