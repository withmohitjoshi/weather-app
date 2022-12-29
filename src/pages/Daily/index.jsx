import React from "react";
import { useSelector } from "react-redux";
import Accordian from "./components/Accordian";
const DailyPage = () => {
  const { dailyForcastData } = useSelector((store) => store.weatherData);

  return dailyForcastData.map((data, i) => <Accordian data={data} key={i} />);
};

export default DailyPage;
