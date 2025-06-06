import Modal from "../../ui/Modal";
import CreateCabinEditForm from "./CreateCabinEditForm";
import Button from "../../ui/Button";

export default function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinEditForm></CreateCabinEditForm>
        </Modal.Window>
      </Modal>
    </>
  );
}
// export default function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div className="div">
//       <button onClick={() => setIsOpenModal((show) => !show)}>
//         add new cabin
//       </button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinEditForm
//             onCloseModal={() => setIsOpenModal(false)}
//           ></CreateCabinEditForm>
//         </Modal>
//       )}
//     </div>
//   );
// }
