## Pizza Store project

- ReactJS 18+
- Redux toolkit, `useSelector`, `useDispatch`, `extraReducers`, `addCase`, `addMatcher`
- Accessing store outside of component scope with store.dispatch()
- Handling fullfilled, pending, rejected async calls with Redux Thunk middleware.
- Modern React Router with Data Loading (v6.6), Router Form, Action, Loader, useNavigation()
- useFetcher() and <fetcher.Form> for submitting pages without Navigation
- Geolocation handling with GPS longitude and latitude
- Styling with Tailwind

## Full-stack Hotel Booking Website

- UI State management with React Context API
- Remote state management with React Query
- Styling with `styled components`
- Routing with React Router
- Form management with React Hook Form
- Other tools: React icons, React Hot Toast, Rechart (for Chart, Dashboard)
- Backend with Supabase
- Compound component pattern, placing component outside of React Component tree with [createPortal](https://react.dev/reference/react-dom/createPortal)
- @TODO: Synchronize booking with `Airbnb`, `Booking.com`, `VRBO` and `TripAdvisor`, through `Google Calendar`
- Currently Airbnb does not provide public API, the only way to avoid conflicted bookings, is through Calendar Sync with Google
- [Sync Airbnb with Google](https://www.airbnb.ca/help/article/99)
- [Google Calendar API](https://developers.google.com/calendar/api/guides/overview)
- @TODO: Add Online payment through Stripe or Paypal to handle credit card payment.
- @TODO: Onsite payment with machine will not be integrated, agent can punch in Invoice number when marking Booking as 'Paid'
- @TODO: Possible using this Website for manage Airbnb, VRBO, Booking.com and Trip Advisor in one place
- @TODO: Add Chat component with GraphQL subscription to handle customer Chat
