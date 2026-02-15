import React, { useEffect, useState } from "react";
import MuiTable from "./MuiTable";

type Column<T> = {
  header: string;
  accessor: keyof T;
};
type TrainDataProps = {
    origin: string;
    destination: string;
};

const defaultTrainDataProps: TrainDataProps = {
    origin: "Lovers Lane Station, Dallas, TX",
    destination: "Pearl/Arts District Station, Dallas, TX",
};


type Departure = {
    departureTime: string;
    departureTimeEpochSeconds: number;
    arrivalTime: string;
    summary: string;
};
type DepartureForTable = {
  departureTime: string;
  arrivalTime: string;
  summary: string;
};

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Summary", accessor: "summary" },
];

export default function TrainData({ origin = defaultTrainDataProps.origin, destination = defaultTrainDataProps.destination }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDepartures = async () => {
            const now = Math.floor(Date.now() / 1000);
            let searchTime: number = now;
            const searchWindowMinutes = 45;

            const isBeforeWindow = (searchTimeSec: number, nowSec: number, windowMin: number) =>
                searchTimeSec < nowSec + windowMin * 60;

            while (isBeforeWindow(searchTime, now, searchWindowMinutes)) {
                const url = `https://demobackend-production-3f3f.up.railway.app/api/v1/test?originStation=${encodeURIComponent(origin)}&destinationStation=${encodeURIComponent(destination)}&departureTime=${encodeURIComponent(searchTime)}`;
                
                console.log("Fetching from URL:", url);

                const response = await fetch(url);
                const data = await response.json();            

                if (data.routes && data.routes.length > 0) {
                    const legs = data.routes[0].legs;
                    const departs: Departure[] = legs.map((leg: any) => ({
                        departureTime: leg.departure_time?.text || "N/A",
                        departureTimeEpochSeconds: leg.departure_time?.value || 0,
                        arrivalTime: leg.arrival_time?.text || "N/A",
                        summary: leg.steps.map((step: any) => step.html_instructions).join(", "),
                    }));

                    setDepartures(prev => [...prev, ...departs]);

                    const lastDeparture = departs[departs.length - 1];
                    searchTime = lastDeparture.departureTimeEpochSeconds + 60;
                    console.log("Updated search time (epoch seconds):", searchTime);
                } else {
                    break; // stop if no routes returned
                }
            }

            setLoading(false);
        };

        fetchDepartures();
    }, [origin, destination]);

    if (loading) {
        return <div>Loading train departures...</div>;
    }

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