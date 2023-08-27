import { React, useEffect, useState } from "react";
import axios from "axios";

const FetchData = (url) => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  return { datas };
};

export default FetchData;
