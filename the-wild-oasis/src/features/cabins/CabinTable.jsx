import { useCabins } from "./useCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import {
  DISCOUNT_PARAM,
  FILTER_ALL,
  FILTER_NO_DISCOUNT,
  FILTER_WITH_DISCOUNT,
} from "../../constant";

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get(DISCOUNT_PARAM) || "all";
  console.log(filterValue);

  let filteredCabins;
  if (filterValue === FILTER_ALL.value) filteredCabins = cabins;
  if (filterValue === FILTER_NO_DISCOUNT.value)
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === FILTER_WITH_DISCOUNT.value)
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
