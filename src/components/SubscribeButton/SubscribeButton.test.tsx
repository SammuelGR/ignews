import { render, screen } from "@testing-library/react";

import { SubscribeButton } from ".";

describe("SubscribeButton", () => {
  it("SubscribeButton renders correctly", () => {
    render(<SubscribeButton priceId="123" />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });
});
