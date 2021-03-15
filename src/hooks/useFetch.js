import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datos, setDatos] = useState(null);
  useEffect(() => {
    if (url) {
      fetch(url)
        .then(resp => resp.json())
        .then(datosAPI => {
          setDatos(datosAPI);
        });
    }
  }, [url]);
  return {
    datos
  };
};

export default useFetch;
