import React, {createContext, FC, PropsWithChildren} from "react";
import useTrips from "../hooks/useTrips";
import { Trip } from "../types/Trip";

interface TripContext {
    trips: Trip[];
    setTrip?: (trip: Trip) => void;
    updateTrip?: (id: string) => void;
  };
  
  const defaultValue: TripContext = {
  trips: [],
  setTrip: () => {},
  updateTrip: () => {},
};

const TripContext = createContext<TripContext>(defaultValue)

export const TripProvider: FC<PropsWithChildren> = ({ children }) => {
    const { data, loading, error } = useTrips();
    
    // useEffect(() => {}
    // }, [data, loading]);
  
    return (
      <TripContext.Provider
        value={{trips: []}}
      >
        {children}
      </TripContext.Provider>
    );
  };
  