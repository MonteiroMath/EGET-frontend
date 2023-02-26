import { screen, cleanup } from "@testing-library/react";
import { client } from "../../api/client";
import ProductListPage from "./ProductListPage";
import { renderWithRedux } from "../../testUtils/renderWithProviders";

jest.mock("../../api/client");

let initialState;

beforeAll(() => {
  initialState = {
    products: {
      status: "idle",
      error: null,
      data: [],
    },
  };
});

afterEach(cleanup);

describe("Product List Rendering", () => {
  test("Render without products", async () => {
    client.get.mockResolvedValue([
      {
        success: true,
        products: [],
      },
    ]);

    renderWithRedux(
      <ProductListPage />,
      { path: "/products" },
      { initialState }
    );

    expect(
      await screen.findByText("Não foram encontrados produtos")
    ).toBeInTheDocument();
  });

  test("Render with one product", async () => {
    const productName = "testProduct";
    client.get.mockResolvedValue({
      success: true,
      products: [
        {
          id: 1,
          name: productName,
          category: "testCategory",
          description: "descriptive test",
          price: 50.55,
          quantity: 30,
          image: "www.placeholder.com/img.png",
        },
      ],
    });

    renderWithRedux(
      <ProductListPage />,
      { path: "/products" },
      { initialState }
    );

    expect(await screen.findByText(productName)).toBeInTheDocument();
  });
});
