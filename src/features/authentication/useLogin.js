import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoPlaySkipForwardOutline } from "react-icons/io5";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    error,
    isLoading,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      console.log(data);
      //queryClient.setQueryData("user", data.user);
      navigate("/dashboard");
      toast.success(`welcome to the wild oasis`);
    },
    onError: (error) => {
      throw new Error(error.message);
      toast.error("error while logging in");
    },
  });
  return { login, error, isLoading };
}
