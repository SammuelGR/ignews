import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";

describe("SignInButton", () => {
  it("SignInButton renders correctly with authenticated user", () => {
    render(<SignInButton isUserLoggedIn={true} />);

    expect(screen.getByText("Sammuel Reis")).toBeInTheDocument();
  });

  it("SignInButton renders correctly with no authenticated user", () => {
    render(<SignInButton isUserLoggedIn={false} />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});
