import { useQuery } from "@tanstack/react-query";
import { CABIN_CACHE_KEY } from "../../constant";
import { getCabins } from "../../services/apiCabins";

export const useCabins = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: [CABIN_CACHE_KEY], //identify cache key
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
};
