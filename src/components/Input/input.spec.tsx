import { render, screen } from "@testing-library/react";
import { Input } from ".";

import "@testing-library/jest-dom";

describe("input tests", () => {
  render(<Input />);
  it("should render input here", () => {
    const inputHere = screen.getByPlaceholderText("here");

    expect(inputHere).toBeInTheDocument();
  });
});
