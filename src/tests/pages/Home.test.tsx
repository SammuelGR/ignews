import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import { stripe } from "../../services/stripe";
import Home, { getStaticProps } from "../../pages";

jest.mock("../../services/stripe");

describe("Home screen", () => {
  it("renders Home page correctly", () => {
    render(<Home product={{ priceId: "fake-price-id", amount: "$9.90" }} />);

    expect(screen.getByText(/\$9.90/)).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve);

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: "fake-id",
      unit_amount: 990,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fake-id",
            amount: "$9.90",
          },
        },
      })
    );
  });
});
