import React from "react";
import { render, screen } from "@testing-library/react";
import Square from "./Square";

it("renders without crashing", () => {
  render(<Square />);
});

it("renders the value passed", () => {
  render(<Square value="X" />);
  expect(screen.getByText("X")).toBeInTheDocument();
});
