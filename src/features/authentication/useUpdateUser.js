import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateCurrentUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: ({ user }) => {
      toast.success("user account Updated successfully");
      queryClient.setQueryData(["user"], user);
      //queryClient.invalidateQueries({ queryKey: ["user"] });
      //reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateCurrentUser, isUpdating };
}
