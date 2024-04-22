import { useEffect, useState } from "react";
import { useLocation } from "../effects/useLocation"
import { Loading } from "../App";

export const Location = () => {
  const { city, country, isLoading, error, fetchLocationData } =
    useLocation();

  useEffect(() => {
    fetchLocationData()
  }, []);

  return <>{isLoading ? <Loading /> : <h3>{city}, {country}</h3>}</>;
};
