import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate message sending
    setToast({
      show: true,
      message: "Message sent successfully!",
      type: "success"
    });

    setTimeout(() => {
      setToast({ ...toast, show: false });
    }, 3000);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let’s Connect</h3>
            <p>
              I'm open to opportunities, collaborations, or just a friendly
              conversation. Feel free to reach out anytime.
            </p>

            <div className="contact-links">
              <a href="https://www.linkedin.com/in/shivaraju-ns-0642a6291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">LinkedIn</a>
              <a href="https://github.com/shivarajns" target="blank">GitHub</a>
              <a href="mailto:yourmail@example.com">Email</a>
            </div>
          </div>

          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form> */}
        </div>
      </section>

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? "show" : ""} ${toast.type}`}>
        {toast.message}
      </div>
    </>
  );
};

export default Contact;