import React from "react";
import { colors } from "../theme";

export default function SchedulePage() {
  return (
    <section
      style={{
        background: `radial-gradient(circle at top left, rgba(58, 134, 255, 0.08), transparent), ${colors.bg}`,
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 1rem",
        boxSizing: "border-box",
        color: colors.text,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: colors.card,
          padding: "3rem 2rem",
          borderRadius: 20,
          boxShadow: colors.shadow,
          boxSizing: "border-box",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            textAlign: "center",
            color: colors.primary,
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          Schedule a Time With Our Team
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: colors.subtext,
            textAlign: "center",
            maxWidth: 720,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          Let’s connect and explore how SafePlay can help you host fair, secure esports tournaments. Pick a time below to get started.
        </p>
        <div
          style={{
            width: "100%",
            height: 700,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
          }}
        >
          <iframe
            src="https://calendly.com/safeplaygaming-support/30min"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a call"
            style={{ border: "none", display: "block" }}
            loading="lazy"
            allow="fullscreen; autoplay"
          />
        </div>
      </div>
    </section>
  );
}