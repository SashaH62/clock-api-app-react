import { useState } from "react";

export const useTimeZone = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  
    async function getTime(setTimeOfDay, setLocalTime, setLocalTimeZone) {
      try {
        const res = await fetch(
          "http://worldtimeapi.org/api/timezone/Africa/Johannesburg"
        );
        const data = await res.json();
        const currTime = new Date(data.utc_datetime);
  
        const hour =
          currTime.getHours() < 10
            ? `0${currTime.getHours()}`
            : currTime.getHours();
        const minute =
          currTime.getMinutes() < 10
            ? `0${currTime.getMinutes()}`
            : currTime.getMinutes();
  
        setLocalTime(`${hour}:${minute}`);
        setLocalTimeZone(data.abbreviation);
        setTimeOfDay(currTime.getHours() < 12 ? "morning" : "evening");
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
        setError("");
      }
    }
  
    return {getTime, isLoading, setIsLoading, error};
  }