import React, { useEffect, useState } from "react";
import MuiTable from "./MuiTable";
import departures1 from "./data/testdepartures1.json";
import departures2 from "./data/testdepartures2.json";

type Column<T> = {
  header: string;
  accessor: keyof T;
};
type TrainDataProps = {
    origin: string;
    destination: string;
};

// Testing Settings
let backEndURL = "https://demobackend-production-3f3f.up.railway.app/mapsData";
const useTestData = false;

type Departure = {
    departureTime: string;
    departureTimeEpochSeconds: number;
    arrivalTime: string;
    line: string;
};
type DepartureForTable = {
  departureTime: string;
  arrivalTime: string;
  line: string;
};

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Line", accessor: "line" },
];

export default function TrainData({ origin, destination }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);

    useEffect(() => {
        const fetchDepartures = async () => {
            const now = Math.floor(Date.now() / 1000);
            let searchTime: number = now;
            const searchWindowMinutes = 45;

            // Determine backEndURL based on environment
            backEndURL = process.env.NODE_ENV === 'development'
                ? "http://localhost:8080/mapsData"
                : backEndURL;
            // Use test data in development
            if (useTestData && process.env.NODE_ENV === 'development') {
                if (origin === "Lovers Lane Station, Dallas, TX"){
                    setDepartures(departures1);
                    return;
                } else {
                    setDepartures(departures2);
                    return;
                }
            }

            const isBeforeWindow = (searchTimeSec: number, timeNowSec: number, windowMin: number) =>
                searchTimeSec < timeNowSec + (windowMin * 60);

            while (isBeforeWindow(searchTime, now, searchWindowMinutes)) {

                const url = `${backEndURL}?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&departureTime=${encodeURIComponent(searchTime)}`;
                
                console.log("Fetching from URL:", url);

                const response = await fetch(url);
                const data = await response.json();            

                if (data.routes && data.routes.length > 0) {
                    const legs = data.routes[0].legs;
                    const departs: Departure[] = legs.map((leg: any) => ({
                        departureTime: leg.departure_time?.text || "N/A",
                        departureTimeEpochSeconds: leg.departure_time?.value || 0,
                        arrivalTime: leg.arrival_time?.text || "N/A",
                        line: leg.steps.map((step: any) => step.transit_details?.line?.name).find((name: string | undefined) => name !== undefined) || "N/A",
                    }));

                    setDepartures(prev => [...prev, ...departs]);

                    const lastDeparture = departs[departs.length - 1];
                    searchTime = lastDeparture.departureTimeEpochSeconds + 60;
                    console.log("Updated search time (epoch seconds):", searchTime);
                } else {
                    break; // stop if no routes returned
                }
            }

        };

        fetchDepartures();
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