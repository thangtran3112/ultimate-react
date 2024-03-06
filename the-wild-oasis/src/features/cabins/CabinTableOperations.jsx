import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import {
  DISCOUNT_PARAM,
  FILTER_ALL,
  FILTER_NO_DISCOUNT,
  FILTER_WITH_DISCOUNT,
  SORT_MAX_CAPACITY_ASC,
  SORT_MAX_CAPACITY_DESC,
  SORT_NAME_ASC,
  SORT_NAME_DESC,
  SORT_REGULAR_PRICE_ASC,
  SORT_REGULAR_PRICE_DESC,
} from "../../constant";
import SortBy from "../../ui/SortBy";

const CabinTableOperations = () => {
  return (
    <TableOperations>
      <Filter
        filterField={DISCOUNT_PARAM}
        options={[FILTER_ALL, FILTER_NO_DISCOUNT, FILTER_WITH_DISCOUNT]}
      />
      <SortBy
        options={[
          SORT_NAME_ASC,
          SORT_NAME_DESC,
          SORT_REGULAR_PRICE_ASC,
          SORT_REGULAR_PRICE_DESC,
          SORT_MAX_CAPACITY_ASC,
          SORT_MAX_CAPACITY_DESC,
        ]}
      />
    </TableOperations>
  );
};

export default CabinTableOperations;
