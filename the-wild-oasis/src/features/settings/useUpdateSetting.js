import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { SETTINGS_CACHE_KEY } from "../../constant";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  const { mutate: updateSettingMutation, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully updated!");
      queryClient.invalidateQueries({
        queryKey: [SETTINGS_CACHE_KEY],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSettingMutation };
};
