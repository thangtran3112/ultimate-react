import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import {
  BookingFilterAll,
  BookingFilterCheckIn,
  BookingFilterCheckOut,
  BookingFilterUnconfirmed,
  BookingSortStartDateAsc,
  BookingSortStartDateDesc,
  BookingSortTotalPriceAsc,
  BookingSortTotalPriceDesc,
  STATUS_PARAM,
} from "../../constant";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={STATUS_PARAM}
        options={[
          BookingFilterAll,
          BookingFilterCheckOut,
          BookingFilterCheckIn,
          BookingFilterUnconfirmed,
        ]}
      />

      <SortBy
        options={[
          BookingSortStartDateDesc,
          BookingSortStartDateAsc,
          BookingSortTotalPriceDesc,
          BookingSortTotalPriceAsc,
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
