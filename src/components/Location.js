import { useEffect } from "react";
import { useLocation } from "../effects/useLocation";
import { Loading } from "../App";
import { Error } from "../App";

export const Location = () => {
  const { city, country, isLoading, error, fetchLocationData } = useLocation();

  useEffect(() => {
    fetchLocationData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <h3>
          {city.current}, {country.current}
        </h3>
      )}
    </>
  );
};
