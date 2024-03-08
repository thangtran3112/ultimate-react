import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BOOKINGS_CACHE_KEY,
  BOOKING_SORT_START_DATE_ASC,
  PAGE_PARAM,
  PAGE_SIZE,
  SORT_BY_PARAM,
  STATUS_PARAM,
} from "../../constant";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //FILTER
  const filterValue = searchParams.get(STATUS_PARAM);
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: STATUS_PARAM, value: filterValue, method: "eq" };

  //SORT
  const sortByRaw =
    searchParams.get(SORT_BY_PARAM) || BOOKING_SORT_START_DATE_ASC.value;
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const page = !searchParams.get(PAGE_PARAM)
    ? 1
    : Number(searchParams.get(PAGE_PARAM));

  //QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {}, //data is undefined from the beginning
    error,
  } = useQuery({
    queryKey: [BOOKINGS_CACHE_KEY, filter, sortBy, page], //dependency array
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  //prefetching next page
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [BOOKINGS_CACHE_KEY, filter, sortBy, page + 1], //dependency array
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }
  //prefetching previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [BOOKINGS_CACHE_KEY, filter, sortBy, page - 1], //dependency array
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { isLoading, bookings, error, count };
};
