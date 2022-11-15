import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { Trip } from "../types/Trip";
import useTrips from "../hooks/useTrips";
import axios from "axios";

interface TripContext {
  trips: Trip[];
  loading: boolean;
  error: unknown;
  updateTrip: (id: number, body: Trip) => void;
}

const defaultValue: TripContext = {
  trips: [{ id: 1, name: "Italy" }],
  loading: true,
  error: "",
  updateTrip: () => null,
};

export const TripContext = createContext<TripContext>(defaultValue);

export const TripProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data, loading, error, fetchTrips } = useTrips();

  const updateTrip = async (id: number, body: Trip) => {
    await axios.put(`http://127.0.0.1:8000/api/trips/${id}/`, body);
    await fetchTrips();
  };
  return (
    <TripContext.Provider value={{ trips: data, loading, error, updateTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => useContext(TripContext);
