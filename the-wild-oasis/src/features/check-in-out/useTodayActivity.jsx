import { TODAY_ACTIVITY } from "../../constant";
import { getStaysTodayActivity } from "../../services/apiBookings";
import { useQuery } from "@tanstack/react-query";

export function useTodayActivity() {
  const { isLoading, data: activities } = useQuery({
    queryKey: [TODAY_ACTIVITY],
    queryFn: getStaysTodayActivity,
  });

  return { isLoading, activities };
}
