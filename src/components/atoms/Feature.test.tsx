import { render } from "test-utils";
import Feature from "./Feature";

test("renders the title", () => {
  const { getByText } = render(<Feature title="Titulo Teste" />);

  expect(getByText("Titulo Teste")).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(<Feature>{"Children Teste"}</Feature>);

  expect(getByText("Children Teste")).toBeInTheDocument();
});
