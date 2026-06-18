import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToast({ show: true, message: "Message sent successfully!", type: "success" });
    setTimeout(() => setToast({ ...toast, show: false }), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="ambient-glow"></div>
      
      <header className="contact-header">
        <span className="badge">Get in Touch</span>
        <h2 className="title-gradient">Let’s Build Something</h2>
      </header>

      <div className="contact-grid">
        {/* Contact Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="info-panel"
        >
          <h3>Connect with me</h3>
          <p>I'm currently open to new opportunities and collaborations. Drop a message or reach out via my socials.</p>
          
          <div className="social-links">
            <a href="https://linkedin.com/in/shivaraju-ns-0642a6291" target="_blank" rel="noreferrer" className="social-pill">LinkedIn</a>
            <a href="https://github.com/shivarajns" target="_blank" rel="noreferrer" className="social-pill">GitHub</a>
            <a href="mailto:shivaraju.ns@example.com" className="social-pill">Email</a>
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="form-panel"
        >
          <form className="glass-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            </div>
            <textarea name="message" rows="5" placeholder="Your Message..." value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>
      </div>

      {/* Modern Toast Notification */}
      <div className={`modern-toast ${toast.show ? "show" : ""} ${toast.type}`}>
        {toast.message}
      </div>
    </section>
  );
};

export default Contact;