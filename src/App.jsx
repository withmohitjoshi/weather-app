import usePageLoadWeatherData from "./hooks/usePageLoadWeatherData";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import TopNavbar from "./components/TopNavbar";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import TodayPage from "./pages/Today";
import DailyPage from "./pages/Daily";
const App = () => {
  const {
    appState: { isLoading, isError, error },
    weatherData: { bg },
  } = useSelector((store) => store);
  usePageLoadWeatherData();
  return (
    <div
      className={`w-100 min-h-screen bg-gradient-to-br from-cyan-500 to-blue-900 ${bg}`}
    >
      <div className="mx-auto w-full xs:max-w-screen-xs flex flex-col ">
        <TopNavbar />
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage errorMsg={error} />
        ) : (
          <Routes>
            <Route index path="/" element={<TodayPage />} />
            <Route index path="/daily" element={<DailyPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
