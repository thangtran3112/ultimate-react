import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { USER_CACHE_KEY } from "../../constant";

/**
 * Login API will get supabase token into Local Storage and Cookies of the browser
 */
export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      //caching the query into ['user'] key, so useUser() hook will automatically use the cache
      //this would avoid a second network call within useUser() for getCurrentUser()
      //since we already populate the cache for query with ['user'] key
      queryClient.setQueryData([USER_CACHE_KEY], data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
};
