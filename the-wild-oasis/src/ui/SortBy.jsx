import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import { SORT_BY_PARAM } from "../constant";

const SortBy = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get(SORT_BY_PARAM) || "";

  function handleChange(e) {
    searchParams.set(SORT_BY_PARAM, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    >
      Sort
    </Select>
  );
};

export default SortBy;
