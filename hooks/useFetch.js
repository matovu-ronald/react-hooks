import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((data) => data.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => setError(error));
  }, [url]);

  return { loading, data, error };
}
