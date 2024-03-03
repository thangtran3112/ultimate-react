import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CABINS_CACHE_KEY } from "../../constant";

export function useDeleteCabin() {
  //this hook gives us the queryClient
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi, //or (id) => deleteCabin(id)
    onSuccess: () => {
      toast.success("Cabin successfully delete");

      queryClient.invalidateQueries({
        queryKey: [CABINS_CACHE_KEY],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
