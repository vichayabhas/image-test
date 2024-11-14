import React from "react";
import getAirQuality from "@/libs/otherBackend/getAirQuality";
import getTimeOffset from "@/libs/user/getTimeOffset";
import GetTimeHtml from "./GetTimeHtml";

export default async function AirQuality() {
  const timeOffset = await getTimeOffset();
  const airQuality = await getAirQuality();
  return (
    <table>
      <tr>
        <th>time</th>
        <th>pm2.5</th>
        <th>aqi</th>
      </tr>
      {airQuality.measurements.hourly.map((hourly,i) => (
      
        <tr key={i}>
          <td>
            <GetTimeHtml input={hourly.ts} offset={timeOffset} />
          </td>
          <td>{hourly.pm25?.concentration}</td>
          <td>{hourly.aqi}</td>
        </tr>
      ))}
    </table>
  );
}
 // i>=airQuality.measurements.hourly.length-2?null: