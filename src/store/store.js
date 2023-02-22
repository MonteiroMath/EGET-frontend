import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
  },
});
