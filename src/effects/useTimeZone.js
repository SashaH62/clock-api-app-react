import { useState } from "react";

export const useTimeZone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getTime(
    timezone,
    setTimeOfDay,
    setLocalTime,
    ref
  ) {
    try {
      const res = await fetch(
        `http://worldtimeapi.org/api/timezone/${timezone}`
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
      setTimeOfDay(currTime.getHours() < 12 ? "morning" : "evening");

      ref.current = {
        timeZoneAbbr: data.abbreviation,
        dayOfWeek: data.day_of_week,
        dayOfYear: data.day_of_year,
        weekOfYear: data.week_number,
      };

    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
      setError("");
    }
  }

  return { getTime, setIsLoading, isLoading, error };
};
