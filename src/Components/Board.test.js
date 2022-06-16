import React from "react";
import { render, screen, act } from "@testing-library/react";
import Board from "./Board";

it("renders without crashing", () => {
  render(<Board />);
});

it("renders the correct number of squares", () => {
  render(<Board />);
  expect(screen.getAllByTestId("square").length).toBe(9);
});

it("renders the correct value for each square", () => {
  render(<Board />);
  act(() => screen.getByTestId("board").firstChild.click());
  expect(screen.getByTestId("board").firstChild.textContent).toBe("X");
  act(() => screen.getByTestId("board").lastChild.click());
  expect(screen.getByTestId("board").lastChild.textContent).toBe("O");
});

it("correctly identifies a winner", () => {
  render(<Board />);
  act(() => screen.getByTestId("board").children[0].click());
  act(() => screen.getByTestId("board").children[3].click());
  act(() => screen.getByTestId("board").children[1].click());
  act(() => screen.getByTestId("board").children[4].click());
  act(() => screen.getByTestId("board").children[2].click());
  expect(screen.getByTestId("board").children[0].textContent).toBe("X");
  expect(screen.getByTestId("board").children[1].textContent).toBe("X");
  expect(screen.getByTestId("board").children[2].textContent).toBe("X");
  expect(screen.getByTestId("winner").textContent).toBe("Winner: X");
});
