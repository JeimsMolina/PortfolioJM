import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { FiSend, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setStatus({ state: 'success', msg: "Message sent — I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus({ state: 'error', msg: 'Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <motion.section
      className="contact container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="contact-grid">
        <div className="contact-info">
          <span className="section-eyebrow">Contact</span>
          <h1 className="contact-title">Let's build something <span className="gradient-text">together</span>.</h1>
          <p className="contact-sub">
            Have an opportunity, a question, or just want to say hi? Drop me a message
            and I'll respond as soon as I can.
          </p>

          <div className="info-list">
            <a href="mailto:jeimsmolina@gmail.com" className="info-item glass">
              <FiMail className="info-icon" />
              <div><span className="info-label">Email</span><span className="info-value">jeimsmolina@gmail.com</span></div>
            </a>
            <div className="info-item glass">
              <FiMapPin className="info-icon" />
              <div><span className="info-label">Location</span><span className="info-value">United States · Costa Rica</span></div>
            </div>
            <a href="https://linkedin.com/in/jeims-molina-322212264" target="_blank" rel="noopener noreferrer" className="info-item glass">
              <FiLinkedin className="info-icon" />
              <div><span className="info-label">LinkedIn</span><span className="info-value">/jeims-molina</span></div>
            </a>
            <a href="https://github.com/JeimsMolina" target="_blank" rel="noopener noreferrer" className="info-item glass">
              <FiGithub className="info-icon" />
              <div><span className="info-label">GitHub</span><span className="info-value">/JeimsMolina</span></div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form glass">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required />
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary submit-btn"
            disabled={sending}
            whileHover={{ scale: sending ? 1 : 1.02 }}
            whileTap={{ scale: sending ? 1 : 0.98 }}
          >
            {sending ? 'Sending...' : 'Send message'} <FiSend />
          </motion.button>

          {status.state !== 'idle' && (
            <p className={`form-status ${status.state}`}>{status.msg}</p>
          )}
        </form>
      </div>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Jeims Molina</span>
        <span className="footer-divider">·</span>
        <span>Built with React, Vite & Framer Motion</span>
      </footer>

      <style>{`
        .contact { padding: 5rem 0 3rem; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; align-items: start; }
        .contact-title { font-size: clamp(2rem, 4.5vw, 3.2rem); margin: 0.5rem 0 1.2rem; }
        .contact-sub { color: var(--beige-dim); font-size: 1.05rem; margin-bottom: 2rem; max-width: 420px; }
        .info-list { display: flex; flex-direction: column; gap: 0.8rem; }
        .info-item { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; transition: all 0.3s var(--ease); }
        .info-item:hover { border-color: var(--accent); transform: translateX(4px); }
        .info-icon { font-size: 1.3rem; color: var(--accent-bright); }
        .info-label { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--beige-dim); }
        .info-value { display: block; font-size: 0.95rem; color: var(--beige); }

        .contact-form { padding: 2rem; display: flex; flex-direction: column; gap: 1.2rem; }
        .field { display: flex; flex-direction: column; gap: 0.5rem; }
        .field label { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--beige-dim); font-weight: 500; }
        .field input, .field textarea {
          padding: 0.85rem 1rem; background: rgba(0,0,0,0.25); border: 1px solid var(--border-strong); border-radius: var(--radius-sm); color: var(--beige); font-size: 1rem; font-family: var(--font-body); outline: none; transition: all 0.3s var(--ease); resize: vertical;
        }
        .field input:focus, .field textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-glow); background: rgba(0,0,0,0.4); }
        .field input::placeholder, .field textarea::placeholder { color: rgba(245,240,225,0.35); }
        .submit-btn { align-self: flex-start; margin-top: 0.5rem; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-status { font-size: 0.92rem; padding: 0.7rem 1rem; border-radius: var(--radius-sm); }
        .form-status.success { color: #4ade80; background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.3); }
        .form-status.error { color: #f87171; background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.3); }

        .site-footer { margin-top: 5rem; padding-top: 2rem; border-top: 1px solid var(--border); display: flex; gap: 0.6rem; justify-content: center; color: var(--beige-dim); font-size: 0.85rem; }
        .footer-divider { color: var(--accent); }

        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </motion.section>
  );
};

export default Contact;
