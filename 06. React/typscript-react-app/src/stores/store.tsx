import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slicers/slicer";

export default configureStore({
  reducer: {
    store: cartSlice,
  },
});
  