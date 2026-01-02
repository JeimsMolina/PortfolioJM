import { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contacts'), formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message.');
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '2rem',
        color: 'var(--beige)',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Contact Me</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
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
          style={{ ...inputStyle, resize: 'vertical' }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--black)',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            padding: '0.8rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

const inputStyle = {
  padding: '0.75rem 1rem',
  backgroundColor: '#1e1e1e',
  border: '1px solid var(--accent)',
  borderRadius: '5px',
  color: 'var(--beige)',
  fontSize: '1rem',
  outline: 'none',
};

export default Contact;
