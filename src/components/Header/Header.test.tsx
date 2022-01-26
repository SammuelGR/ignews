import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("Header component", () => {
  it("header renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
