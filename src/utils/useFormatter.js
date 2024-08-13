import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function useFormatter() {
  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(parseFloat((price || "0").toString()) || 0);
  };

  const cn = (...inputs) => {
    return twMerge(clsx(inputs));
  };

  const setCookie = (key, value, expires) => {
    document.cookie = key + "=" + (value || "") + "expires=" + expires;
  };

  return { formatPrice, cn, setCookie };
}
