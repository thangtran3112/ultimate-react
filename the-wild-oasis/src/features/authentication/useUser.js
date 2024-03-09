import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { USER_CACHE_KEY } from "../../constant";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: [USER_CACHE_KEY],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
