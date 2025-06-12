import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
export default function Stats({
  bookings,
  confimedStays,
  numDays,
  cabinCount,
}) {
  const numOfBooking = bookings?.length;

  //2
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3checin ins
  const checkins = confimedStays?.length;
  //4
  const occupancyRate =
    confimedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase></HiOutlineBriefcase>}
        value={numOfBooking}
      ></Stat>
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes></HiOutlineBanknotes>}
        value={formatCurrency(sales)}
      ></Stat>
      <Stat
        title="Check Ins"
        color="indigo"
        icon={<HiOutlineCalendarDays></HiOutlineCalendarDays>}
        value={checkins}
      ></Stat>
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar></HiOutlineChartBar>}
        value={Math.round(occupancyRate * 100) + "%"}
      ></Stat>
    </>
  );
}
