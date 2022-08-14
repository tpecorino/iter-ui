import { Destination } from "./Destination";

export interface Trip {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  destinations: Destination[];
}

export type TripContext = {
  trips: Trip[];
  setTrip: (trip: Trip) => void;
  updateTrip: (id: string) => void;
};
