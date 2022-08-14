import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [data, setData] = useState<unknown[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { data, error, isLoading };
};
