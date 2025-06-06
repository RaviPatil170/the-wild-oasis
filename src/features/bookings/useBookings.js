import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  //filter

  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  //const pageCount = Math.ceil(count / PAGE_SIZE);
  //sorting
  const sortByRaw = searchParams.get("SortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  let { isLoading, data, error } = useQuery({
    queryFn: () => getBookings({ filter, sortBy, page }),
    queryKey: ["bookings", filter, sortBy, page],
  });
  if (error) {
    console.log(error);
    throw new Error("not able to fetch the bookings");
  }
  if (data) {
    var { data: bookings, count } = data;
  } else {
    var bookings = [],
      count = 0;
  }

  //prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
      queryKey: ["bookings", filter, sortBy, page + 1],
    });
  return { isLoading, bookings, error, count };
}
