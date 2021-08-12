import Hero from "./Hero";
import { render } from "test-utils";

// test("renders component Hero with children", () => {
//   const component = render(
//     <Hero>
//       <p>Auto Escola Bohrer</p>
//     </Hero>
//   );
//   component.debug();
//   expect(getByText("Auto Escola Bohrer")).toBeTruthy();
// });

// test("renders Hero component with children", () => {
//   const { debug, getByText } = render(
//     <Hero>
//       <p>Auto Escola Bohrer</p>
//     </Hero>
//   );
//   debug();
//   expect(getByText("Auto Escola Bohrer")).toBeInTheDocument(); // esse comando `toBeInTheDocument()` é melhor
// });

test("renders Hero component with children", () => {
  const { getByText } = render(
    <Hero>
      <p>Auto Escola Bohrer</p>
    </Hero>
  );

  expect(getByText("Auto Escola Bohrer")).toBeInTheDocument();
});

test("renders Hero component background image", () => {
  const imageUrl = "http://test/image.jpg";
  const { getByTestId } = render(<Hero image={imageUrl} />);

  expect(getByTestId("hero")).toHaveStyleRule(`backgroundImage: ${imageUrl}`);
});
