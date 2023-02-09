import axios from "axios";
import { useEffect, useState } from "react";

export const useAstronomy = () => {
  const [astronomies, setAstronomies] = useState([]);

  const fetchAstronomies = async () => {
    const api_key = process.env.REACT_APP_APIKEY;

    let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
    const response = await axios.get(url);

    if (response && response.data) setAstronomies(response.data);
  };

  //   fetchAstronomies();

  useEffect(() => {
    fetchAstronomies();
  }, []);

  return { astronomies };
};
