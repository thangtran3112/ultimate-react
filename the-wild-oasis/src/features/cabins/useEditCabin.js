import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { CABINS_CACHE_KEY } from "../../constant";

export const useEditCabin = () => {
  const queryClient = useQueryClient();

  //mutationFn can only pass 1 object argument to createEditCabin function
  //we have to spread it into { newCabinData, id} to comply with 1 argument requirement
  const { mutate: editCabinMutation, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited!");
      queryClient.invalidateQueries({
        queryKey: [CABINS_CACHE_KEY],
      });
      //reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabinMutation };
};
