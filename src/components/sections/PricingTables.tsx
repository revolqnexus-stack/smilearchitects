"use client";

/**
 * PricingTables
 * - Detects visitor country via ipapi.co (free, no key)
 * - Converts all INR prices to local currency
 * - Renders all pricing categories in a clean accordion layout
 * - Manual currency override dropdown
 */

import { useState, useEffect } from "react";
import {
  PRICE_CATEGORIES,
  PRICE_DISCLAIMER,
  COUNTRY_CURRENCY,
  DEFAULT_CURRENCY,
  getCurrencyForCountry,
  formatRange,
  type CurrencyConfig,
} from "@/lib/pricing";

/* ─── Currency selector options ─────────────────────────────────────────────── */

const CURRENCY_OPTIONS = [
  { label: "₹ INR — Indian Rupee", code: "IN" },
  { label: "$ USD — US Dollar", code: "US" },
  { label: "£ GBP — British Pound", code: "GB" },
  { label: "€ EUR — Euro", code: "DE" },
  { label: "AED — UAE Dirham", code: "AE" },
  { label: "SAR — Saudi Riyal", code: "SA" },
  { label: "QAR — Qatari Riyal", code: "QA" },
  { label: "KWD — Kuwaiti Dinar", code: "KW" },
  { label: "BHD — Bahraini Dinar", code: "BH" },
  { label: "OMR — Omani Rial", code: "OM" },
  { label: "CA$ CAD — Canadian Dollar", code: "CA" },
  { label: "A$ AUD — Australian Dollar", code: "AU" },
  { label: "S$ SGD — Singapore Dollar", code: "SG" },
];

/* ─── Section accordion ─────────────────────────────────────────────────────── */

function PricingSection({
  category,
  currency,
  defaultOpen,
}: {
  category: (typeof PRICE_CATEGORIES)[number];
  currency: CurrencyConfig;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        border: "1.5px solid var(--color-tea-green)",
        backgroundColor: "#fff",
        transition: "box-shadow 0.2s ease",
        boxShadow: open ? "0 4px 24px rgba(37,78,6,0.06)" : "none",
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem 1.5rem",
          background: open ? "var(--color-honeydew)" : "#fff",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 0.2s ease",
          gap: "1rem",
        }}
      >
        <span style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.125rem",
          fontWeight: 500,
          color: "var(--color-dark-moss)",
        }}>
          {category.title}
        </span>
        <span style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          flexShrink: 0,
        }}>
          <span style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-sans)",
            color: "var(--color-olive)",
            fontWeight: 500,
          }}>
            {category.items.length} items
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-olive)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Table */}
      {open && (
        <div style={{ padding: "0 1.5rem 1.25rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }} aria-label={category.title}>
            <thead>
              <tr>
                <th style={{
                  textAlign: "left",
                  padding: "0.625rem 0",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  color: "var(--color-olive)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  borderBottom: "1.5px solid var(--color-tea-green)",
                }}>
                  Treatment
                </th>
                <th style={{
                  textAlign: "right",
                  padding: "0.625rem 0",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  color: "var(--color-olive)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  borderBottom: "1.5px solid var(--color-tea-green)",
                  whiteSpace: "nowrap",
                }}>
                  {currency.code}
                </th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, i) => (
                <tr key={i} style={{ borderBottom: i < category.items.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <td style={{
                    padding: "0.875rem 0",
                    paddingRight: "1rem",
                    verticalAlign: "top",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "var(--color-dark-moss)",
                      lineHeight: 1.4,
                      display: "block",
                    }}>
                      {item.name}
                    </span>
                    {item.note && (
                      <span style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        color: "var(--color-olive)",
                        lineHeight: 1.5,
                        display: "block",
                        marginTop: "0.2rem",
                      }}>
                        {item.note}
                      </span>
                    )}
                  </td>
                  <td style={{
                    padding: "0.875rem 0",
                    textAlign: "right",
                    verticalAlign: "top",
                    whiteSpace: "nowrap",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--color-dark-moss)",
                    }}>
                      {formatRange(item, currency)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────────── */

export default function PricingTables() {
  const [currency, setCurrency] = useState<CurrencyConfig>(DEFAULT_CURRENCY);
  const [detectedCountry, setDetectedCountry] = useState<string>("IN");
  const [selectedCode, setSelectedCode] = useState<string>("IN");
  const [loading, setLoading] = useState(true);

  // Detect country on mount
  useEffect(() => {
    let cancelled = false;
    fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(4000) })
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        const country = data?.country_code ?? "IN";
        setDetectedCountry(country);
        setSelectedCode(country);
        setCurrency(getCurrencyForCountry(country));
      })
      .catch(() => {
        // silently fall back to INR
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const handleCurrencyChange = (code: string) => {
    setSelectedCode(code);
    setCurrency(getCurrencyForCountry(code));
  };

  const isNonInr = currency.code !== "INR";

  return (
    <section style={{ backgroundColor: "var(--color-light, #FAFAF7)", padding: "3rem 0 4rem" }}>
      <div className="container-xl">

        {/* ── Currency bar ─────────────────────────────────────── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
          padding: "1rem 1.25rem",
          backgroundColor: "#fff",
          borderRadius: "0.875rem",
          border: "1.5px solid var(--color-tea-green)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            {/* Globe icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-olive)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
            </svg>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-cafe-noir)" }}>
              {loading
                ? "Detecting your location…"
                : `Showing prices in ${currency.code}`}
              {!loading && isNonInr && (
                <span style={{ color: "var(--color-olive)", marginLeft: "0.375rem" }}>
                  · Approx. conversion from ₹ INR
                </span>
              )}
            </span>
          </div>

          {/* Selector */}
          <div style={{ position: "relative" }}>
            <select
              value={selectedCode}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              aria-label="Select display currency"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-dark-moss)",
                backgroundColor: "var(--color-honeydew)",
                border: "1.5px solid var(--color-tea-green)",
                borderRadius: "0.5rem",
                padding: "0.5rem 2rem 0.5rem 0.875rem",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237E8407' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.625rem center",
              }}
            >
              {CURRENCY_OPTIONS.map((opt) => (
                <option key={opt.code} value={opt.code}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Non-INR notice ───────────────────────────────────── */}
        {isNonInr && (
          <div style={{
            display: "flex",
            gap: "0.625rem",
            alignItems: "flex-start",
            padding: "0.875rem 1.125rem",
            backgroundColor: "rgba(234,200,0,0.12)",
            borderRadius: "0.75rem",
            border: "1px solid rgba(234,200,0,0.4)",
            marginBottom: "1.75rem",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-harvest-gold, #B8860B)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "0.125rem" }}>
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-cafe-noir)", margin: 0, lineHeight: 1.6 }}>
              Converted from Indian Rupees using approximate rates (Jan 2025). Actual treatment costs are
              in <strong>₹ INR</strong>. Exchange rates fluctuate — treat converted figures as a rough guide only.
            </p>
          </div>
        )}

        {/* ── Category accordions ──────────────────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {PRICE_CATEGORIES.map((cat, i) => (
            <PricingSection
              key={cat.id}
              category={cat}
              currency={currency}
              defaultOpen={i === 0}
            />
          ))}
        </div>

        {/* ── Disclaimer ───────────────────────────────────────── */}
        <div style={{
          marginTop: "2rem",
          padding: "1.25rem 1.5rem",
          backgroundColor: "var(--color-honeydew)",
          borderRadius: "0.875rem",
          border: "1px solid var(--color-tea-green)",
          display: "flex",
          gap: "0.75rem",
          alignItems: "flex-start",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-olive)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "0.15rem" }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-cafe-noir)", margin: 0, lineHeight: 1.65 }}>
            {PRICE_DISCLAIMER}
          </p>
        </div>

      </div>
    </section>
  );
}
