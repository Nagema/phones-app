import { useState, useEffect } from "react";

const useFetch = (options) => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
      fetch(options.url)
        .then(response => response.json())
        .then((serverPhones) => {
          setPhones(serverPhones)
        })
    }, [options.url])

  return {
      phones,
      setPhones
  }
}

export default useFetch