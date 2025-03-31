import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      });
  }, [url]);

  return apiData;
}
