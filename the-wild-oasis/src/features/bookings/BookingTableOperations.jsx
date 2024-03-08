import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import {
  BOOKING_ALL,
  BOOKING_CHECKIN,
  BOOKING_CHECKOUT,
  BOOKING_SORT_START_DATE_DESC,
  BOOKING_SORT_START_DATE_ASC,
  BOOKING_SORT_TOTAL_PRICE_ASC,
  BOOKING_SORT_TOTAL_PRICE_DESC,
  BOOKING_UNCONFIRMED,
  STATUS_PARAM,
} from "../../constant";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={STATUS_PARAM}
        options={[
          BOOKING_ALL,
          BOOKING_CHECKOUT,
          BOOKING_CHECKIN,
          BOOKING_UNCONFIRMED,
        ]}
      />

      <SortBy
        options={[
          BOOKING_SORT_START_DATE_DESC,
          BOOKING_SORT_START_DATE_ASC,
          BOOKING_SORT_TOTAL_PRICE_DESC,
          BOOKING_SORT_TOTAL_PRICE_ASC,
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
