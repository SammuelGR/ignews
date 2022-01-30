import { render, screen } from "@testing-library/react";

import { Header } from ".";

const fakeSession = {
  expires: "fake-expires",
  user: {
    name: "Sammuel Reis",
    email: "email@email.com",
    image: "fake-image",
  },
};

jest.mock("next-auth/react", () => {
  return {
    useSession() {
      return fakeSession;
    },
  };
});

describe("Header component", () => {
  it("header renders correctly", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Posts")).toBeInTheDocument();
  });
});
