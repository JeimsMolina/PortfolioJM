import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botField: "", // honeypot
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          "bot-field": formData.botField,
        }),
      });

      if (!res.ok) throw new Error("Netlify form submission failed");

      setStatus("✅ Message sent!");
      setFormData({ name: "", email: "", message: "", botField: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ There was an error sending your message.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem",
        color: "var(--beige)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Contact Me</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
      >
        {/* required for Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* honeypot field (spam trap) */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" value={formData.botField} onChange={(e) =>
              setFormData((p) => ({ ...p, botField: e.target.value }))
            } />
          </label>
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>

        {status && <p style={{ marginTop: "0.5rem" }}>{status}</p>}
      </form>
    </motion.section>
  );
};

const inputStyle = {
  padding: "0.75rem 1rem",
  backgroundColor: "#1e1e1e",
  border: "1px solid var(--accent)",
  borderRadius: "5px",
  color: "var(--beige)",
  fontSize: "1rem",
  outline: "none",
};

const buttonStyle = {
  backgroundColor: "var(--accent)",
  color: "var(--black)",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  padding: "0.8rem 1rem",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};

export default Contact;
