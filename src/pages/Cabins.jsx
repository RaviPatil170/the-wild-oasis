import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabin } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    getCabin().then((cabins) => {
      console.log(cabins);
    });
  }, []);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>

      <Row type="horizontal">
        <CabinTable />
      </Row>
      <Row type="horizontal">
        <button onClick={() => setShowForm(() => !showForm)}>
          add new cabin
        </button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
