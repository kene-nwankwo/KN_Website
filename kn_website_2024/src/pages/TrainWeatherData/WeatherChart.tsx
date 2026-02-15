import React, { useEffect, useState } from "react";
import TestWeatherJson from "./testWeatherData.json"

type MinuteForecast = {
  dt: number;     // Unix timestamp
  precipitation: number; // mm of rain/snow expected
};

export default function MinutelyForecast() {
  const [data, setData] = useState<MinuteForecast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const test = "91ff728efb8";
      const city = "f9bceeeaec"
      const lat = 32.7767; // Dallas
      const lon = -96.7970;
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${test}${city}b46a08d2aa2&units=imperial`;

      const response = await fetch(url);
      //const json = await response.json();
      const json = TestWeatherJson;

      setData(json.minutely || []);
    };
    fetchData();
  }, []);
  
  
function chart() {
    if (data.length === 0) return <div>No data available</div>;

    const maxPrecip = Math.max(...data.map((d) => d.precipitation), 0);

    const light_y2 = 100 - (0 / maxPrecip) * 80 + 10;
    const light_y4 = 100 - (2.5 / maxPrecip) * 80 + 10;
    const moderate_y2 = 100 - (2.5 / maxPrecip) * 80 + 10;
    const moderate_y4 = 100 - (10 / maxPrecip) * 80 + 10;
    const heavy_y2 = 100 - (10 / maxPrecip) * 80 + 10;
    const heavy_y4 = 100 - (50 / maxPrecip) * 80 + 10;
    const violent_y2 = 100 - (50 / maxPrecip) * 80 + 10;
    const violent_y4 = 100 - (100 / maxPrecip) * 80 + 10;
    return (
        <svg width="100%" height="240" viewBox="0 0 400 120">
            <polyline
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            points={
                data.slice(0, 60).map((d, i) => {
                const x = (i / 59) * 380 + 10;
                const y = 100 - (d.precipitation / maxPrecip) * 80 + 10;
                return `${x},${y}`;
                }).join(" ")
            }
            />
            <rect x="10" width="380" y={light_y4} height={light_y2 - light_y4} fill="rgba(209, 235, 37, 0.1)" stroke="none" />
            <rect x="10" width="380" y={moderate_y4} height={moderate_y2 - moderate_y4} fill="rgba(235, 146, 37, 0.1)" stroke="none" />
            <rect x="10" width="380" y={heavy_y4} height={heavy_y2 - heavy_y4} fill="rgba(235, 37, 37, 0.1)" stroke="none" />
            <rect x="10" width="380" y={violent_y4} height={violent_y2 - violent_y4} fill="rgba(0, 0, 0, 0.1)" stroke="none" />
            {/* X axis */}
            <line x1="10" y1="110" x2="390" y2="110" stroke="#888" strokeWidth="1" />
            {/* Y axis */}
            <line x1="10" y1="10" x2="10" y2="110" stroke="#888" strokeWidth="1" />
            {/* Y axis labels */}
            <text x="-15" y="20" fontSize="8" fill="#444">{maxPrecip.toFixed(2)} mm</text>
            {/*<text x="-15" y="110" fontSize="8" fill="#444" textAnchor="start">0 mm</text>*/}
            {/* X axis time labels every 15 min */}
            {data.slice(0, 60).map((d, i) => {
            if (i % 15 === 0) {
                const x = (i / 59) * 380 + 10;
                const time = new Date(d.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
                return (
                <g key={i}>
                    <line x1={x} y1="110" x2={x} y2="112" stroke="#888" strokeWidth="1" />
                    <text x={x} y="120" fontSize="8" fill="#444" textAnchor="middle">{time}</text>
                </g>
                );
            }
            return null;
            })}
            {/* Precipitation message */}
            <text x="200" y="30" fontSize="12" fill="#444" textAnchor="middle">
              {(() => {
                console.log("maxPrecip:", maxPrecip);
                return maxPrecip <= 0.1
                  ? "No Precipitation Expected"
                  : maxPrecip <= 2.5
                  ? "Light Precipitation Expected"
                  : maxPrecip <= 10
                  ? "Moderate Precipitation Expected"
                  : maxPrecip <= 50
                  ? "Heavy Precipitation Expected"
                  : "Violent Precipitation Expected";
              })()}
            </text>
            
        </svg>
    );
}

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Next Hour (Minutely Forecast)</h2>
        {chart()}

    </div>
  );
}
