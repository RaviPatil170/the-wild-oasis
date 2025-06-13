import { useQuery } from "@tanstack/react-query";
import { getCurrentuser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryFn: getCurrentuser,
    queryKey: ["user"],
  });
  console.log(user, "from use user");
  return {
    user,
    isLoading,
  };
}
