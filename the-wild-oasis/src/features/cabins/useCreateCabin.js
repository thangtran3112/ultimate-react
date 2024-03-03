import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { CABIN_CACHE_KEY } from "../../constant";
import toast from "react-hot-toast";

export const useCreateCabin = () => {
  const queryClient = useQueryClient();

  const { mutate: createCabinMutation, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin, //or (newCabin) => createEditCabin(newCabin)
    onSuccess: () => {
      toast.success("New cabin successfully created!");
      queryClient.invalidateQueries({
        queryKey: [CABIN_CACHE_KEY],
      });
      //reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabinMutation };
};
