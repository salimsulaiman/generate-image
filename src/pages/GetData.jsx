import React, { useState, useEffect } from "react";
import axios from "axios";

function GetData() {
  const bmi = 30;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://back-end-production-643c.up.railway.app/food").then((res) => {
      setData(res.data);
    });
  }, []);

  if (bmi < 20) {
    localStorage.setItem("level", "high");
  } else if (bmi == 20) {
    localStorage.setItem("level", "medium");
    console.log("medium");
  } else if (bmi > 20) {
    localStorage.setItem("level", "low");
  }
  return (
    <div>
      {data
        .filter((element) => element.calLevel.level == localStorage.getItem("level"))
        .map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
    </div>
  );
}

export default GetData;
