import { useState, useEffect } from "react";

// Hook personalizado para realizar peticiones fetch
export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.log(err);
          setError(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}
