import { getAddress } from '../../services/apiGeocoding';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/*
 * Notes: Redux only allow sync function on dispatching values to its reducer.
 * We have to use Thunk to await for the fetching before sending to reducer.
 * Another option: RTK Query
 */
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // This will be the payload, when builder.addCase(fetchAddress.fulfilled,...)
    return { position, address };
  },
);

const initialState = {
  username: 'Jonasssss',
  status: 'idle', //or 'loading' or 'error'
  position: {},
  address: '',
  error: '', // when fetching is rejected, the error will be set
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      //payload = username
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        //do not use (state, action) => (state.status = 'loading')
        //it would finish the function without mutating the state
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = 'idle';
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
