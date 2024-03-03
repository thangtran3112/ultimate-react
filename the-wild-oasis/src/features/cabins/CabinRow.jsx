import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { MODAL_EDIT_CABIN, MODAL_DELETE_CABIN } from "../../constant";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const { isLoading: isDeleting, deleteCabin: deleteCabinMutation } =
    useDeleteCabin();
  const { isCreating, createCabinMutation } = useCreateCabin();
  const isWorking = isCreating || isDeleting;

  const handleDuplicate = () => {
    createCabinMutation({
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
      name: `Copy of ${name}`,
    });
  };

  return (
    <Table.Row>
      <Img src={image}></Img>
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount && discount > 0 ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button disabled={isWorking} onClick={handleDuplicate}>
          <HiSquare2Stack />
        </button>

        <Modal>
          <Modal.Open opens={MODAL_EDIT_CABIN}>
            <button disabled={isWorking}>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name={MODAL_EDIT_CABIN}>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open opens={MODAL_DELETE_CABIN}>
            <button disabled={isWorking}>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name={MODAL_DELETE_CABIN}>
            <ConfirmDelete
              disabled={isDeleting}
              resourceName="cabins"
              onConfirm={() => deleteCabinMutation(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default CabinRow;
