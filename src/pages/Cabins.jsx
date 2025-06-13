import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabin } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations></CabinTableOperations>
      </Row>

      <Row type="horizontal">
        <CabinTable />
      </Row>
      <Row type="horizontal">
        <AddCabin></AddCabin>
      </Row>
    </>
  );
}

export default Cabins;
