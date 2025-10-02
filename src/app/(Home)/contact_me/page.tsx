"use client";

import { GlitchText } from "@/components/GlitchText";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

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

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut" as const, // ✅ TS-safe easing
      },
    }),
  };

  return (
    <div className="text-[var(--foreground)] font-sans">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Contact Info */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
        >
          {[
            {
              label: "Email",
              value: "md.tazwarul.islam.07@gmail.com",
            },
            {
              label: "Phone",
              value: "+8801795377643",
            },
            {
              label: "Address",
              value: "35/3 Maskanda, Mymensingh, Bangladesh",
            },
          ].map((item, i) => (
            <motion.section key={i} variants={fadeInUp} custom={i}>
              <h2 className="text-xl font-semibold mb-1">
                <GlitchText text={item.label} />
              </h2>
              <p className="text-sm text-[var(--accent-foreground)]">
                {item.value}
              </p>
            </motion.section>
          ))}

          <motion.section variants={fadeInUp} custom={3}>
            <h2 className="text-xl font-semibold mb-1">
              <GlitchText text="Social Profiles" />
            </h2>
            <ul className="flex flex-wrap gap-4 text-sm mt-1">
              {["Facebook", "GitHub", "LinkedIn"].map((link, i) => (
                <motion.li key={i} whileHover={{ scale: 1.1 }}>
                  <a
                    href="#"
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-medium mb-4">
            <GlitchText text="Send Me a Message" />
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-2 rounded-md border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)]"
              variants={fadeInUp}
              custom={0}
              initial="hidden"
              animate="visible"
            />
            <motion.input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-2 rounded-md border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)]"
              variants={fadeInUp}
              custom={1}
              initial="hidden"
              animate="visible"
            />
            <motion.textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-2 rounded-md border border-[var(--border)] text-[var(--accent-foreground)] bg-[var(--card)] h-32 resize-none"
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              animate="visible"
            />
            <motion.button
              type="submit"
              className="bg-[var(--accent)] text-[var(--accent-foreground)] ml-auto w-40 font-semibold px-2 py-1 rounded-md hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              Send Message
            </motion.button>
          </form>
          {status && (
            <motion.p
              className="mt-2 text-sm text-[var(--foreground)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
