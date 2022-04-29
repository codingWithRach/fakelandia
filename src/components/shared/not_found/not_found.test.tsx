import { render, screen } from "@testing-library/react";
import NotFound from "./not_found";

test("renders Page not found message", () => {
  render(<NotFound />);
  const element = screen.getByText("Page not found");
  expect(element).toBeInTheDocument();
});
