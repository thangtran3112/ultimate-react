import { useQuery } from "@tanstack/react-query";
import { CABINS_CACHE_KEY } from "../../constant";
import { getCabins } from "../../services/apiCabins";

export const useCabins = () => {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: [CABINS_CACHE_KEY], //identify cache key
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
};
