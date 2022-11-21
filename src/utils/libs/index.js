import TwitterCLDR from "twitter_cldr/full/core";

export const currencyENUMs = {
  1: "NGN",
  2: "USD",
  3: "GBP",
  4: "EUR",
  5: "JPY",
  6: "GHC",
  NGN: "NGN",
  USD: "USD",
};

export const formatNumberToCurrency = ({
  number,
  currencyCode = 1,
  precision = 2,
}) => {
  const formatter = new TwitterCLDR.CurrencyFormatter();

  return formatter.format(Number(number), {
    currency: currencyENUMs[currencyCode],
    precision,
  });
};
