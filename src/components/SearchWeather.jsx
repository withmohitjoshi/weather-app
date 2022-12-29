import { UilSearch } from "@iconscout/react-unicons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataAndSetState } from "../utils/fetchDataAndSetState";
const SearchWeather = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="text-gray-500 rounded-md flex items-center justify-between gap-3 bg-white py-2 px-2 shadow-sm shadow-gray-600"
    >
      <input
        type={"search"}
        spellCheck={false}
        className="w-full capitalize focus:outline-none bg-transparent"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type={"submit"}
        onClick={() => query && fetchDataAndSetState(dispatch, query)}
      >
        <UilSearch />
      </button>
    </form>
  );
};

export default SearchWeather;
