import { useQuery } from "@tanstack/react-query";
import { BOOKINGS_CACHE_KEY } from "../../constant";
import { getBookings } from "../../services/apiBookings";

export const useBookings = () => {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: [BOOKINGS_CACHE_KEY], //identify cache key
    queryFn: getBookings,
  });

  return { isLoading, bookings, error };
};
