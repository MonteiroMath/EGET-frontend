import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productSlice from "../store/productSlice";

export const renderWithRedux = (
  component,
  {
    path,
    routes = [
      {
        path,
        element: component,
      },
    ],
  },
  {
    initialState,
    store = configureStore({
      reducer: {
        products: productSlice,
      },
      preloadedState: initialState,
    }),
  } = {}
) => {
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
    initialIndex: 0,
  });

  return {
    ...render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    ),
    store,
  };
};
