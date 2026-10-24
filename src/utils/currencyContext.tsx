import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "USD" | "INR" | "AUD" | "NZD" | "AED" | "SAR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  label: string;
  flag: string;
  regionName: string;
  localeUrl: string;
  monthly: {
    pro: number;
    premium: number;
  };
  annual: {
    pro: number;
    premium: number;
  };
  taxNotice: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: "USD",
    symbol: "$",
    label: "USD ($)",
    flag: "🌐",
    regionName: "Global",
    localeUrl: "/",
    monthly: { pro: 6.25, premium: 10 },
    annual: { pro: 5, premium: 8 },
    taxNotice: "Taxes calculated at checkout",
  },
  INR: {
    code: "INR",
    symbol: "₹",
    label: "India (₹)",
    flag: "🇮🇳",
    regionName: "India",
    localeUrl: "/en-in",
    monthly: { pro: 375, premium: 625 },
    annual: { pro: 299, premium: 499 },
    taxNotice: "Billed annually · GST invoice compliant",
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    label: "Australia (A$)",
    flag: "🇦🇺",
    regionName: "Australia",
    localeUrl: "/en-au",
    monthly: { pro: 10, premium: 15 },
    annual: { pro: 8, premium: 12 },
    taxNotice: "GST shown at checkout · NSW notice aligned",
  },
  NZD: {
    code: "NZD",
    symbol: "NZ$",
    label: "New Zealand (NZ$)",
    flag: "🇳🇿",
    regionName: "New Zealand",
    localeUrl: "/en-nz",
    monthly: { pro: 11, premium: 17.5 },
    annual: { pro: 9, premium: 14 },
    taxNotice: "GST compliant · Privacy Act 2020 aligned",
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    label: "UAE (AED)",
    flag: "🇦🇪",
    regionName: "UAE",
    localeUrl: "/en-ae",
    monthly: { pro: 24, premium: 36 },
    annual: { pro: 19, premium: 29 },
    taxNotice: "VAT compliant · Mon–Fri / Sun–Thu shifts",
  },
  SAR: {
    code: "SAR",
    symbol: "SAR ",
    label: "Saudi Arabia (SAR)",
    flag: "🇸🇦",
    regionName: "Saudi Arabia",
    localeUrl: "/en-sa",
    monthly: { pro: 24, premium: 36 },
    annual: { pro: 19, premium: 29 },
    taxNotice: "VAT compliant · Sun–Thu work week",
  },
};

interface CurrencyContextValue {
  currency: CurrencyConfig;
  currencyCode: CurrencyCode;
  setCurrencyCode: (code: CurrencyCode) => void;
  billingInterval: "monthly" | "annual";
  setBillingInterval: (interval: "monthly" | "annual") => void;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: CURRENCIES.USD,
  currencyCode: "USD",
  setCurrencyCode: () => {},
  billingInterval: "annual",
  setBillingInterval: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>("USD");
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annual">("annual");

  // Auto-detect based on pathname on initial load
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/en-in") || path.includes("/india")) {
      setCurrencyCode("INR");
    } else if (path.includes("/en-au") || path.includes("/australia")) {
      setCurrencyCode("AUD");
    } else if (path.includes("/en-nz") || path.includes("/new-zealand")) {
      setCurrencyCode("NZD");
    } else if (path.includes("/en-ae") || path.includes("/uae")) {
      setCurrencyCode("AED");
    } else if (path.includes("/en-sa") || path.includes("/saudi-arabia")) {
      setCurrencyCode("SAR");
    }
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currency: CURRENCIES[currencyCode],
        currencyCode,
        setCurrencyCode,
        billingInterval,
        setBillingInterval,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
