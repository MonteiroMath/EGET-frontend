import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../api/client";

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (searchTerm) => {
    const response = await client.get(
      searchTerm ? `/?searchTerm=${searchTerm}` : "/"
    );
    return response;
  }
);

export const postProduct = createAsyncThunk("products/post", async (params) => {
  const { name, category, description, price, quantity } = params;

  const response = await client.post("/", {
    name,
    category,
    description,
    price,
    quantity,
  });

  return response;
});

export const updateProduct = createAsyncThunk(
  "products/Update",
  async (params) => {
    const { id, name, category, description, price, quantity } = params;

    const response = await client.put(`/${id}`, {
      name,
      category,
      description,
      price,
      quantity,
    });

    return response;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/Delete",
  async (params) => {
    const { id } = params;
    const response = await client.delete(`/${id}`);
    return response;
  }
);

function isActionRejected(action) {
  return action.type.endsWith("/rejected");
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled";

        if (action.payload.success) {
          state.data = action.payload.products;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        const { product } = action.payload;
        state.data.unshift(product);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const { product } = action.payload;

        let index = state.data.findIndex(
          (oldProduct) => oldProduct.id === product.id
        );

        state.data[index] = product;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const { productId } = action.payload;

        let productIndex = state.data.findIndex(
          (product) => product.id === productId
        );

        state.data.splice(productIndex, 1);
      })
      .addMatcher(isActionRejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

//reducer
export default productsSlice.reducer;

//actions
export const actions = productsSlice.actions;

//selectors
export const selectProductById = (state, id) =>
  state.products.data.find((product) => product.id === id);
export const selectAllProducts = (state) => {
  return state.products.data;
};
