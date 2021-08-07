import Heading from "./Heading";
import { render } from "@testing-library/react";

test("match snapshot", () => {
  // coloca dentro de um fragment
  const { asFragment } = render(<Heading>Title</Heading>);
  expect(asFragment()).toMatchSnapshot();
});

// test("match snapshot", () => {
//   // coloca dentro de uma div
//   const { container } = render(<Heading>Title</Heading>);
//   expect(container).toMatchSnapshot();
// });
