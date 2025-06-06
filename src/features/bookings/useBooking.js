import { useQueries, useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams, useSearchParams } from "react-router-dom";

export function useBooking() {
  // const [searchParams] = useSearchParams();
  const { bookingId } = useParams();

  const {
    data: booking = {},
    error,
    isLoading,
  } = useQuery({
    queryFn: () => getBooking(bookingId),
    queryKey: ["booking", bookingId],
    retry: false,
  });
  if (error) {
    console.log(error);
    throw new Error("error fetching booking with is");
  }
  return { booking, isLoading };
}
