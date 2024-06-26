//API and Database constants
export const CABIN_BUCKET_NAME = "cabin-images";
export const CABINS_CACHE_KEY = "cabins";
export const CABINS_TABLE = "cabins";
export const SETTINGS_TABLE = "settings";
export const SETTINGS_CACHE_KEY = "settings";

export const BOOKINGS_TABLE = "bookings";
export const BOOKINGS_CACHE_KEY = "bookings";

export const BOOKING_CACHE = "booking";
export const USER_CACHE_KEY = "user";
export const AVATARS_BUCKET = "avatars";

export const DASHBOARD_BOOKINGS_KEY = "bookings";
export const DASHBOARD_STAYS_KEY = "stays";

//UI constants
export const MODAL_CABIN_FORM = "cabin-form";
export const MODAL_EDIT_CABIN = "edit";
export const MODAL_DELETE_CABIN = "delete";
export const MODAL_DELETE_BOOKING = "delete";
export const MODAL_TABLE = "table";
export const MODAL_TYPE = "modal";
export const REGULAR_TYPE = "regular";

//URL path constants
export const SORT_BY_PARAM = "sortBy";
export const DISCOUNT_PARAM = "discount";
export const STATUS_PARAM = "status";
export const FILTER_ALL = {
  value: "all",
  label: "All",
};
export const FILTER_NO_DISCOUNT = {
  value: "no-discount",
  label: "No Discount",
};
export const FILTER_WITH_DISCOUNT = {
  value: "with-discount",
  label: "With Discount",
};
export const SORT_BY_START_DATE_ASC = "startDate-asc";
export const SORT_ASC = "asc";
export const SORT_DESC = "desc";
export const SORT_NAME_ASC = {
  value: "name-asc",
  label: "Sort by name (A-Z)",
};
export const SORT_NAME_DESC = {
  value: "name-desc",
  label: "Sort by name (Z-A)",
};
export const SORT_REGULAR_PRICE_ASC = {
  value: "regularPrice-asc",
  label: "Sort by price (low first)",
};
export const SORT_REGULAR_PRICE_DESC = {
  value: "regularPrice-desc",
  label: "Sort by price (high first)",
};
export const SORT_MAX_CAPACITY_ASC = {
  value: "maxCapacity-asc",
  label: "Sort by capacity (low first)",
};
export const SORT_MAX_CAPACITY_DESC = {
  value: "maxCapacity-desc",
  label: "Sort by capacity (high first)",
};

//Booking Filter and Sorting
export const BOOKING_ALL = { value: "all", label: "All" };
export const BOOKING_CHECKOUT = {
  value: "checked-out",
  label: "Checked out",
};
export const BOOKING_CHECKIN = {
  value: "checked-in",
  label: "Checked in",
};
export const BOOKING_UNCONFIRMED = {
  value: "unconfirmed",
  label: "Unconfirmed",
};
export const BOOKING_SORT_START_DATE_DESC = {
  value: "startDate-desc",
  label: "Sort by date (recent first)",
};
export const BOOKING_SORT_START_DATE_ASC = {
  value: "startDate-asc",
  label: "Sort by date (earlier first)",
};
export const BOOKING_SORT_TOTAL_PRICE_DESC = {
  value: "totalPrice-desc",
  label: "Sort by amount (high first)",
};
export const BOOKING_SORT_TOTAL_PRICE_ASC = {
  value: "totalPrice-asc",
  label: "Sort by amount (low first)",
};

//PAGINATION
export const PAGE_PARAM = "page";
export const PAGE_SIZE = 10;

//URL PATH
export const BOOKINGS_PATH = "bookings";
export const CHECKIN_PATH = "checkin";

//DARK MODE
export const DARK_MODE_LOCAL_STORAGE_KEY = "isDarkMode";

export const TODAY_ACTIVITY = "today-activity";
