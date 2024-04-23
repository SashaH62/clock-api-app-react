import { useRef, useState } from "react";

export const useLocation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [timezone, setTimezone] = useState(null);
    const city = useRef(null)
    const country = useRef(null);
  
    async function fetchLocationData() {
      setIsLoading(true);
  
      try {
        const res = await fetch(`http://ip-api.com/json/`);
        const data = await res.json();
        city.current = data.city;
        country.current = data.country;
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