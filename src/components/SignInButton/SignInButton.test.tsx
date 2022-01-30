import { render, screen } from "@testing-library/react";
import { SignInButton } from ".";

describe("SignInButton", () => {
  it("SignInButton renders correctly with authenticated user", () => {
    render(<SignInButton />);

    expect(screen.getByText("Sammuel Reis")).toBeInTheDocument();
  });

  it("SignInButton renders correctly with no authenticated user", () => {
    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });
});

// maldito next auth atualiza quebra teste 😤
