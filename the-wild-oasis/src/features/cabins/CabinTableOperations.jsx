import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import {
  DISCOUNT_PARAM,
  FILTER_ALL,
  FILTER_NO_DISCOUNT,
  FILTER_WITH_DISCOUNT,
} from "../../constant";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={DISCOUNT_PARAM}
        options={[FILTER_ALL, FILTER_NO_DISCOUNT, FILTER_WITH_DISCOUNT]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
