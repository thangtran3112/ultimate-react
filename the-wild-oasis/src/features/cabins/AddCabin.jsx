import { MODAL_CABIN_FORM, MODAL_TABLE } from "../../constant";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens={MODAL_CABIN_FORM}>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name={MODAL_CABIN_FORM}>
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens={MODAL_TABLE}>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name={MODAL_TABLE}>
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
};

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// };

export default AddCabin;
