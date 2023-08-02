import { useState, useEffect } from "react";
import axios from "axios";

const rapidapiKey = '2564fdd97fmsh5804d5120b6e9f5p189728jsn3c7b0f57e425';
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params:  { ...query },
    headers: {
      "X-RapidAPI-Key": rapidapiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  const fectchdata = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    }
  };

  useEffect(() => {
    fectchdata();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchBundle();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch; 