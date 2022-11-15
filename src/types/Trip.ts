import { Destination } from "./Destination";

export interface Trip {
  id: number;
  name?: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  is_active?: boolean;
  destinations?: Destination[];
}

export type TripContext = {
  trips: Trip[];
  setTrip: (trip: Trip) => void;
  updateTrip: (id: string) => void;
};
