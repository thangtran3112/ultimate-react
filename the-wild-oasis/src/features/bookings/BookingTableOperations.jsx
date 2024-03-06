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
} from "../../constant";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
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
