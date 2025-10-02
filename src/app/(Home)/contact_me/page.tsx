"use client";

import { GlitchText } from "@/components/GlitchText";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="  text-[var(--foreground)] font-sans">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col gap-6">
          <section>
            <h2 className="text-xl font-semibold mb-1">
              <GlitchText text="Email" />
            </h2>
            <p className="text-sm text-[var(--accent-foreground)] ">
              md.tazwarul.islam.07@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-1">
              <GlitchText text="Phone" />
            </h2>
            <p className="text-sm text-[var(--accent-foreground)]  ">
              +8801795377643
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-1">
              <GlitchText text="Address" />
            </h2>
            <p className="text-sm text-[var(--accent-foreground)] ">
              35/3 Maskanda, Mymensingh, Bangladesh
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-1">
              <GlitchText text="Social Profiles" />
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm mt-1">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium mb-4">
            <GlitchText text="Send Me a Message" />
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded-md placeholder: outline-0 border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)]"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded-md outline-0 border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded-md outline-0 border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)] h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-[var(--accent)] text-[var(--accent-foreground)] ml-auto w-40 font-semibold px-2 py-1 rounded-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-2 text-sm text-[var(--foreground)]">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
