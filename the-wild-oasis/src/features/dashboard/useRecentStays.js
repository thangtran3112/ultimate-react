import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";
import {
  BOOKING_CHECKIN,
  BOOKING_CHECKOUT,
  DASHBOARD_STAYS_KEY,
} from "../../constant";

export function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  // subtract a number of days from current date
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: [DASHBOARD_STAYS_KEY, `last-${numDays}`],
  });

  const confirmedStays = stays?.filter(
    (stay) =>
      stay.status === BOOKING_CHECKIN.value ||
      stay.status === BOOKING_CHECKOUT.value
  );

  return { isLoading, stays, confirmedStays, numDays };
}
