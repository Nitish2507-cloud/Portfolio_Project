import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/contact",
        formData
      );

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className="relative px-10 py-24 bg-gradient-to-b from-[#172554] via-[#0f172a] to-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out for collaborations, internships, or project
          opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-all"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white focus:border-cyan-400 focus:outline-none transition-all"
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-500 py-4 rounded-xl text-lg font-semibold text-black hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;