import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { client } from "../../api/client";
import { renderWithRedux } from "../../testUtils/renderWithProviders";
import AddProductPage from "./AddProductPage";
import ProductListPage from "../ProductListPage/ProductListPage";

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

describe("Insert a new product", () => {
  test("Fill form with valid values and submit", async () => {
    const productName = "testProduct";
    const productCategory = "testCategory";
    const productDescription = "descriptive test";
    const productPrice = "50.45";
    const productQuantity = "45";
    const productImage = "www.placeholder.com/img.png";

    client.post.mockResolvedValue({
      success: true,
      product: {
        id: 1,
        name: productName,
        category: productCategory,
        description: productDescription,
        price: parseFloat(productPrice),
        quantity: parseInt(productQuantity),
        image: productImage,
      },
    });

    renderWithRedux(
      <AddProductPage />,
      {
        path: "/addProduct",
        routes: [
          { path: "addProduct", element: <AddProductPage /> },
          { path: "products", element: <ProductListPage /> },
        ],
      },
      { initialState }
    );

    let button = screen.getByRole("button", { name: /^Enviar$/i });
    expect(button).toBeDisabled();

    let inputField = screen.getByLabelText(/Nome\*:/);
    userEvent.type(inputField, productName);

    inputField = screen.getByLabelText(/Categoria\*:/);
    userEvent.type(inputField, productCategory);

    inputField = screen.getByLabelText(/Preço\*:/);
    userEvent.type(inputField, productPrice);

    inputField = screen.getByLabelText(/Quantidade\*:/);
    userEvent.type(inputField, productQuantity);

    inputField = screen.getByLabelText(/Descrição\*:/);
    userEvent.type(inputField, productDescription);

    expect(button).toBeDisabled();

    inputField = screen.getByLabelText(/Imagem\*:/);
    userEvent.type(inputField, productImage);

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    expect(await screen.findByText(productName)).toBeInTheDocument();
  });
});
