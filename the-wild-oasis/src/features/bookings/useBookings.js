import { useQuery } from "@tanstack/react-query";
import {
  BOOKINGS_CACHE_KEY,
  BookingSortStartDateDesc,
  SORT_BY_PARAM,
  STATUS_PARAM,
} from "../../constant";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get(STATUS_PARAM);
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: STATUS_PARAM, value: filterValue, method: "eq" };

  //SORT
  const sortByRaw =
    searchParams.get(SORT_BY_PARAM) || BookingSortStartDateDesc.value;
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: [BOOKINGS_CACHE_KEY, filter, sortBy], //dependency array
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
};
