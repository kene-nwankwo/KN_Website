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
const PRODUCTION_BACKEND_URL = "https://demobackend-production-3f3f.up.railway.app/mapsData";
const useTestData = false;

type Departure = {
    departureTime: string;
    departureTimeEpochSeconds: number;
    arrivalTime: string;
    line: string;
};

type TransitLine = {
    name?: string;
};

type TransitDetails = {
    line?: TransitLine;
};

type TransitStep = {
    transit_details?: TransitDetails;
};

type RouteLeg = {
    departure_time?: {
        text?: string;
        value?: number;
    };
    arrival_time?: {
        text?: string;
        value?: number;
    };
    steps?: TransitStep[];
};

type MapsRoute = {
    legs?: RouteLeg[];
};

type MapsResponse = {
    routes?: MapsRoute[];
};

const columns: Column<Departure>[] = [
  { header: "Departure", accessor: "departureTime" },
  { header: "Arrival", accessor: "arrivalTime" },
  { header: "Line", accessor: "line" },
];

export default function TrainData({ origin, destination }: TrainDataProps) {
    const [departures, setDepartures] = useState<Departure[]>([]);

    useEffect(() => {
        const loadDeparturesWithinWindow = async () => {
            const now = Math.floor(Date.now() / 1000);
            let searchTimeSec = now;
            const searchWindowMinutes = 45;
            const backendUrl = process.env.NODE_ENV === 'development'
                ? "http://localhost:8080/mapsData"
                : PRODUCTION_BACKEND_URL;

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

            const isWithinSearchWindow = (searchTimeSec: number, timeNowSec: number, windowMin: number) =>
                searchTimeSec < timeNowSec + (windowMin * 60);

            while (isWithinSearchWindow(searchTimeSec, now, searchWindowMinutes)) {

                const url = `${backendUrl}?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&departureTime=${encodeURIComponent(searchTimeSec)}`;
                
                console.log("Fetching from URL:", url);

                const response = await fetch(url);
                const mapsResponse: MapsResponse = await response.json();            

                if (mapsResponse.routes && mapsResponse.routes.length > 0) {
                    const routeLegs = mapsResponse.routes[0].legs ?? [];
                    const newDepartures: Departure[] = routeLegs.map((leg: RouteLeg) => ({
                        departureTime: leg.departure_time?.text || "N/A",
                        departureTimeEpochSeconds: leg.departure_time?.value || 0,
                        arrivalTime: leg.arrival_time?.text || "N/A",
                        line: leg.steps?.map((step: TransitStep) => step.transit_details?.line?.name).find((name: string | undefined) => name !== undefined) || "N/A",
                    }));

                    setDepartures(prev => [...prev, ...newDepartures]);

                    const lastDeparture = newDepartures[newDepartures.length - 1];
                    searchTimeSec = lastDeparture.departureTimeEpochSeconds + 60;
                    console.log("Updated search time (epoch seconds):", searchTimeSec);
                } else {
                    break; // stop if no routes returned
                }
            }

        };

        loadDeparturesWithinWindow();
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