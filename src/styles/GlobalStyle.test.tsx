import GlobalStyle from "./GlobalStyle";
import { render } from "@testing-library/react";

test("match snapshot", () => {
  // asFragment(): não funciona dentro de fragment
  // container: não funciona direito dentro de container
  // baseElement: não funciona direito dentro de container
  render(<GlobalStyle />);
  expect(document.head).toMatchSnapshot();
});
