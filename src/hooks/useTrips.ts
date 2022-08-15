import { useEffect, useState } from "react";
import axios from "axios";
import { Trip } from "../types/Trip";

export default () => {
  const [data, setData] = useState<Trip[]>([]);
  const [error, setError] = useState<unknown>(null); //todo: make error type later
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/trips/");
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchTrips };
};
