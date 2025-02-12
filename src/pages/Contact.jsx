import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  
  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_2gng0p5", // Replace with your EmailJS service ID
        "template_h3zwn04", // Replace with your EmailJS template ID
        formData,
        "W-tZxO-95c-s1qU16" // Replace with your EmailJS public key
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again later.");
      console.error("Email error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-red-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        We'd love to hear from you! Reach out with any inquiries.
      </p>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 border-2">
          <h2 className="text-2xl font-semibold text-gray-800">Our Office</h2>
          <p className="text-gray-600 mt-2">2nd Floor, Regal Building, Connaught Place, Delhi 110001, India, Delhi</p>
          <p className="text-gray-600">Phone: +7439638221</p>
          <p className="text-gray-600">Email: waysaheadglobal@gamil.com</p>

          {/* Optional Interactive Map */}
          <div className="mt-4 border-2">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224132.65679163872!2d77.0688993038596!3d28.5275820036968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1db83b2b2b13%3A0x69f927d8d40731a4!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1707678123456!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          {status && (
            <p
              className={`text-sm ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              } mb-4`}
            >
              {status}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-blue-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
