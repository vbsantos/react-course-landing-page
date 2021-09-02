import { render, screen } from "test-utils";

import ProductGrid from "components/organisms/ProductGrid";
import { fireEvent } from "@testing-library/react";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i,
      title: `Title ${i}`,
    });
  }

  return result;
};

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  test("show all the products when button is clicked", () => {
    render(<ProductGrid products={buildProducts(size)} />);

    fireEvent.click(screen.getByText("Lista Completa de Serviços"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
