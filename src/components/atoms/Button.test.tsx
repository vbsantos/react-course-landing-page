import { render, fireEvent } from "test-utils";
import { render as renderDefault } from "@testing-library/react";

import Button, { ButtonColors, ButtonVariants } from "./Button";

test("renders a text without ThemeProvider", () => {
  const { asFragment } = renderDefault(<Button>Click here</Button>);

  expect(asFragment()).toMatchSnapshot();
});

test("renders a text", () => {
  const { getByText } = render(<Button>Click here</Button>);

  expect(getByText("Click here")).toBeInTheDocument();
});

test("trigger event on click", () => {
  const handleClick = jest.fn();

  const { getByRole } = render(
    <Button onClick={handleClick}>Click here</Button>
  );

  fireEvent.click(getByRole("button"));

  expect(handleClick).toBeCalled();
});

test.each(Object.values(ButtonColors).map((color) => [color]))(
  "renders with color %s",
  (color: ButtonColors) => {
    const { asFragment } = render(<Button color={color} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test.each(Object.values(ButtonVariants).map((variant) => [variant]))(
  "renders with variant %s",
  (variant: ButtonVariants) => {
    const { asFragment } = render(<Button variant={variant} />);

    expect(asFragment()).toMatchSnapshot();
  }
);

test("renders with color primary and variant outlined", () => {
  const { asFragment } = render(<Button color="primary" variant="outlined" />);

  expect(asFragment()).toMatchSnapshot();
});

test("renders with color primary and variant link", () => {
  const { asFragment } = render(<Button color="primary" variant="link" />);

  expect(asFragment()).toMatchSnapshot();
});
