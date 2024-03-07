import { useQuery } from "@tanstack/react-query";
import { BOOKING_CACHE } from "../../constant";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

//get single booking by booking id
export const useBooking = () => {
  //http://localhost:5173/bookings/23
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: [BOOKING_CACHE, bookingId], //identify cache key
    queryFn: () => getBooking(bookingId),
    retry: false, //default: 3 retries
  });

  return { isLoading, booking, error };
};
