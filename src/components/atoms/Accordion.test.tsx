import { render, screen, fireEvent } from "test-utils";
import Accordion from "./Accordion";

const title = "My title";
const text = "My children text";

test("renders with title", () => {
  render(<Accordion title={title}></Accordion>);
  expect(screen.getByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);
  // query retorna null se não encontrar
  // get dispara uma excessão
  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);
  fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalledTimes(1);
});

describe("when is controlled", () => {
  describe("when starts open", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);
      expect(screen.queryByText(text)).toBeInTheDocument();
    });

    test("trigger onChange on click", () => {
      const handleChange = jest.fn();
      render(
        <Accordion open onChange={handleChange} title={title}>
          {text}
        </Accordion>
      );

      fireEvent.click(screen.getByText(title));

      expect(handleChange).toBeCalledTimes(1);
    });

    test("hide children when open changes to false", () => {
      const { rerender } = render(
        <Accordion open title={title}>
          {text}
        </Accordion>
      );

      rerender(
        <Accordion open={false} title={title}>
          {text}
        </Accordion>
      );
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });

    test("call default function when it is clicked", () => {
      render(
        <Accordion open title={title}>
          {text}
        </Accordion>
      );

      fireEvent.click(screen.getByText(title));
    });
  });

  describe("when starts close", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);
      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
