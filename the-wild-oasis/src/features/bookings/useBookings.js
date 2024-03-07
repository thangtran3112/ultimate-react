import { useQuery } from "@tanstack/react-query";
import {
  BOOKINGS_CACHE_KEY,
  BookingSortStartDateDesc,
  PAGE_PARAM,
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

  //PAGINATION
  const page = !searchParams.get(PAGE_PARAM)
    ? 1
    : Number(searchParams.get(PAGE_PARAM));

  const {
    isLoading,
    data: { data: bookings, count } = {}, //data is undefined from the beginning
    error,
  } = useQuery({
    queryKey: [BOOKINGS_CACHE_KEY, filter, sortBy, page], //dependency array
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
};
