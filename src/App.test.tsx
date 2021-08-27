import { render } from "test-utils";
import App from "./App";

test("renders call to action", () => {
  const { getByText } = render(<App />);

  expect(getByText(/matricule-se agora/i)).toBeInTheDocument();
});
