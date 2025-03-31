import { screen, render, fireEvent } from "@testing-library/react";
import { LikesCounter } from "./likes-counter.component";

test("Likes Counter Test", () => {
  render(<LikesCounter />);
  const counter = screen.getByTestId("counter");
  const like = screen.getByTestId("like");

  expect(counter).toBeInTheDocument();
  fireEvent.click(like);
  expect(counter.textContent).toBe("1");
});

test("Check for Link", () => {
  render(<LikesCounter />);
  const link = screen.getByRole("link");
  expect(link).toBeInTheDocument();
});
