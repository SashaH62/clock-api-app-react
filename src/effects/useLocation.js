import { useState } from "react";

export const useLocation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [timezone, setTimezone] = useState(null);
  
    async function fetchLocationData() {
      setIsLoading(true);
  
      try {
        const res = await fetch(`http://ip-api.com/json/`);
        const data = await res.json();
        setCity(data.city);
        setCountry(data.country);
        setTimezone(data.timezone);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
        setError(null);
      }
    }
  
    return {
      fetchLocationData,
      isLoading,
      error,
      city,
      country,
      timezone,
    };
  };