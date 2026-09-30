"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { useBranch } from "@/components/providers/BranchProvider";
import { BRANCH_LIST, type BranchId, getBranch } from "@/lib/branches";
import { buildLeadWhatsAppMessage, trackEvent, whatsAppUrl } from "@/lib/analytics";

interface WhatsAppFormProps {
  /** Optional custom heading */
  heading?: string;
  /** Dark mode - white text on dark backgrounds */
  darkMode?: boolean;
  /** Name, phone, treatment, branch only */
  quick?: boolean;
}

export default function WhatsAppForm({
  heading = "Book via WhatsApp",
  darkMode = false,
  quick = false,
}: WhatsAppFormProps) {
  const { branchId: contextBranchId } = useBranch();
  const [branchId, setBranchId] = useState<BranchId>(contextBranchId);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const branch = getBranch(branchId);
    const whatsappMessage = buildLeadWhatsAppMessage({
      name,
      phone,
      treatment: treatment || undefined,
      branchLabel: branch.label,
    });
    if (!quick && preferredDate) {
      const extra = `\nPreferred date: ${preferredDate}`;
      window.open(whatsAppUrl(branch.contact.phone, whatsappMessage + extra), "_blank", "noopener,noreferrer");
    } else if (!quick && message) {
      window.open(whatsAppUrl(branch.contact.phone, whatsappMessage + `\nNotes: ${message}`), "_blank", "noopener,noreferrer");
    } else {
      window.open(whatsAppUrl(branch.contact.phone, whatsappMessage), "_blank", "noopener,noreferrer");
    }

    trackEvent("whatsapp_lead_submit", {
      branch: branchId,
      treatment: treatment || "not_specified",
      form: quick ? "quick" : "full",
    });

    setName("");
    setPhone("");
    setTreatment("");
    setPreferredDate("");
    setMessage("");
  };

  // Color system - respect light/dark backgrounds  
  const textPrimary = darkMode ? "var(--color-honeydew)" : "var(--color-dark-moss)";
  const textSecondary = darkMode ? "rgba(236, 245, 226, 0.85)" : "var(--color-olive)";
  const textLabel = darkMode ? "var(--color-jonquil)" : "var(--color-olive)"; // Jonquil for dark mode labels
  const borderColor = darkMode ? "rgba(236, 245, 226, 0.25)" : "var(--color-tea-green)";
  const borderColorFocus = darkMode ? "var(--color-jonquil)" : "var(--color-olive)";
  const bgInput = darkMode ? "rgba(255, 255, 255, 0.15)" : "var(--color-white)";
  const placeholderColor = darkMode ? "rgba(236, 245, 226, 0.5)" : "rgba(37, 78, 6, 0.5)";
  const requiredAsterisk = darkMode ? "var(--color-jonquil)" : "var(--color-jonquil)";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1.25rem",
    backgroundColor: bgInput,
    border: `2px solid ${borderColor}`,
    borderRadius: "12px",
    color: textPrimary,
    fontSize: "1rem",
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <div>
      {heading && (
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: textPrimary,
            fontWeight: 400,
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          {heading}
        </h2>
      )}
      <p 
        style={{ 
          color: textSecondary, 
          fontSize: "1rem", 
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Fill in your details and we'll open WhatsApp with your appointment request ready to send.
      </p>

      <form onSubmit={handleWhatsAppSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div>
          <label
            htmlFor="wa-branch"
            style={{
              display: "block",
              fontSize: "0.875rem",
              color: textLabel,
              marginBottom: "0.5rem",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Preferred branch <span style={{ color: requiredAsterisk }}>*</span>
          </label>
          <select
            id="wa-branch"
            required
            value={branchId}
            onChange={(e) => setBranchId(e.target.value as BranchId)}
            style={{
              ...inputStyle,
              cursor: "pointer",
              colorScheme: darkMode ? "dark" : "light",
            }}
          >
            {BRANCH_LIST.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label} — {b.id === "pala" ? "Pala, Kottayam" : "Punkunnam, Thrissur"}
              </option>
            ))}
          </select>
        </div>
        {/* Name */}
        <div>
          <label 
            htmlFor="wa-name" 
            style={{ 
              display: "block", 
              fontSize: "0.875rem", 
              color: textLabel, 
              marginBottom: "0.5rem", 
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Your Name <span style={{ color: requiredAsterisk }}>*</span>
          </label>
          <input
            id="wa-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              ...inputStyle,
              ...(darkMode && {
                '::placeholder': { color: placeholderColor }
              })
            }}
            onFocus={(e) => { e.target.style.borderColor = borderColorFocus; }}
            onBlur={(e) => { e.target.style.borderColor = borderColor; }}
          />
        </div>

        {/* Phone */}
        <div>
          <label 
            htmlFor="wa-phone" 
            style={{ 
              display: "block", 
              fontSize: "0.875rem", 
              color: textLabel, 
              marginBottom: "0.5rem", 
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Phone Number <span style={{ color: requiredAsterisk }}>*</span>
          </label>
          <input
            id="wa-phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            onFocus={(e) => { e.target.style.borderColor = borderColorFocus; }}
            onBlur={(e) => { e.target.style.borderColor = borderColor; }}
          />
        </div>

        {/* Treatment */}
        <div>
          <label 
            htmlFor="wa-treatment" 
            style={{ 
              display: "block", 
              fontSize: "0.875rem", 
              color: textLabel, 
              marginBottom: "0.5rem", 
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Treatment (Optional)
          </label>
          <select
            id="wa-treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            style={{ 
              ...inputStyle, 
              cursor: "pointer",
              colorScheme: darkMode ? "dark" : "light",
              color: treatment ? textPrimary : placeholderColor,
            }}
            onFocus={(e) => { e.target.style.borderColor = borderColorFocus; }}
            onBlur={(e) => { e.target.style.borderColor = borderColor; }}
          >
            <option value="" style={{ color: placeholderColor }}>Select a treatment</option>
            <option value="General Dentistry">General Dentistry</option>
            <option value="Orthodontics">Orthodontics</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
            <option value="Root Canal Treatment">Root Canal Treatment</option>
            <option value="Braces">Braces</option>
            <option value="Clear Aligners">Clear Aligners</option>
            <option value="Emergency / Pain">Emergency / Pain</option>
            <option value="General Check-up">General Check-up</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {!quick ? (
        <>
        <div>
          <label 
            htmlFor="wa-date" 
            style={{ 
              display: "block", 
              fontSize: "0.875rem", 
              color: textLabel, 
              marginBottom: "0.5rem", 
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Preferred Date (Optional)
          </label>
          <input
            id="wa-date"
            type="date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            style={{ 
              ...inputStyle,
              colorScheme: darkMode ? "dark" : "light",
            }}
            onFocus={(e) => { e.target.style.borderColor = borderColorFocus; }}
            onBlur={(e) => { e.target.style.borderColor = borderColor; }}
          />
        </div>

        {/* Message */}
        <div>
          <label 
            htmlFor="wa-message" 
            style={{ 
              display: "block", 
              fontSize: "0.875rem", 
              color: textLabel, 
              marginBottom: "0.5rem", 
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="wa-message"
            rows={3}
            placeholder="Any specific concerns or questions..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ 
              ...inputStyle, 
              resize: "vertical", 
              minHeight: "100px",
              lineHeight: 1.6,
            }}
            onFocus={(e) => { e.target.style.borderColor = borderColorFocus; }}
            onBlur={(e) => { e.target.style.borderColor = borderColor; }}
          />
        </div>
        </>
        ) : null}

        <button
          type="submit"
          disabled={!name || !phone}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            width: "100%",
            padding: "1.125rem 2rem",
            backgroundColor: "#25D366", // WhatsApp green
            color: "#ffffff",
            border: "none",
            borderRadius: "14px",
            fontSize: "1rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            cursor: !name || !phone ? "not-allowed" : "pointer",
            opacity: !name || !phone ? 0.5 : 1,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.25)",
          }}
          onMouseEnter={(e) => {
            if (name && phone) {
              e.currentTarget.style.backgroundColor = "#20BA5A";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(37, 211, 102, 0.35)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#25D366";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.25)";
          }}
        >
          <WhatsAppIcon size="md" color="#ffffff" />
          Send via WhatsApp
        </button>

        <p 
          style={{ 
            fontSize: "0.8125rem", 
            color: textSecondary, 
            textAlign: "center", 
            lineHeight: 1.6,
            opacity: 0.8,
          }}
        >
          You'll be redirected to WhatsApp with your appointment details pre-filled. Just click send to complete your request.
        </p>
      </form>
    </div>
  );
}
