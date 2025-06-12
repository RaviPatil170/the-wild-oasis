import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;
import React from "react";
import { useRecentBookings } from "./useRecentBooking";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";

export default function DashboardLayout() {
  const { bookings, isLoading: isBookingsLoading } = useRecentBookings();
  const {
    stays,
    confimedStays,
    isLoading: isStaysLoading,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isCabinLoading } = useCabins();
  if (isBookingsLoading || isStaysLoading || isCabinLoading)
    return <Spinner></Spinner>;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confimedStays={confimedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      ></Stats>
      <SalesChart bookings={bookings} numdays={numDays}></SalesChart>
    </StyledDashboardLayout>
  );
}
