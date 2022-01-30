import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { mocked } from "ts-jest/utils";

import { SignInButton } from ".";

jest.mock("next-auth/react");
const mockedUseSession = mocked(useSession);

describe("SignInButton", () => {
  it("SignInButton renders correctly with unauthenticated user", () => {
    mockedUseSession.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SignInButton />);
    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("SignInButton renders correctly with authenticated user", () => {
    mockedUseSession.mockReturnValueOnce({
      data: {
        expires: "fake-expires",
        user: {
          name: "Sammuel Reis",
          email: "email@email.com",
          image: "fake-image",
        },
      },
      status: "authenticated",
    });

    render(<SignInButton />);

    expect(screen.getByText("Sammuel Reis")).toBeInTheDocument();
  });
});
