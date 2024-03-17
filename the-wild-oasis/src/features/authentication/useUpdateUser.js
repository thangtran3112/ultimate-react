import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { USER_CACHE_KEY } from "../../constant";
import { updateCurrentUser } from "../../services/apiAuth";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  //mutationFn can only pass 1 object argument to createEditCabin function
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      console.log(user);
      toast.success("User account successfully updated!");
      // queryClient.setQueryData([USER_CACHE_KEY], user);
      queryClient.invalidateQueries({
        queryKey: [USER_CACHE_KEY],
      });
      //reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
};
