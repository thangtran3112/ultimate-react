import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";
import { SETTINGS_TABLE } from "../../constant";

export const useSettings = () => {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: [SETTINGS_TABLE],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
};
