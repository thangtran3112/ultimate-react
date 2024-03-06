import { useQuery } from "@tanstack/react-query";
import { BOOKINGS_CACHE_KEY } from "../../constant";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: [BOOKINGS_CACHE_KEY, filter], //dependency array
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
};
