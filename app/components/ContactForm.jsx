"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    projectDescription: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xbljbejg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          industry: "",
          location: "",
          projectDescription: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="py-8 lg:py-16 px-4 mx-auto w-4/5">
        <h2 className="mb-4 text-4xl font-bebas tracking-tight font-extrabold text-center text-[#1c1c1c]">
          Contact Us
        </h2>
        <p className="mb-8 text-lg lg:mb-16 font-light text-center text-[#4a4a4a] sm:text-xl">
          Are you an entrepreneur with a project idea? Leave your details, and
          let's discuss your vision.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-[#1c1c1c]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="shadow-sm bg-[#eae8e4] border border-gray-300 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#1c1c1c] focus:border-[#1c1c1c] block w-full p-2.5"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#1c1c1c]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="shadow-sm bg-[#eae8e4] border border-gray-300 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#1c1c1c] focus:border-[#1c1c1c] block w-full p-2.5"
              placeholder="yourname@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-[#1c1c1c]"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="shadow-sm bg-[#eae8e4] border border-gray-300 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#1c1c1c] focus:border-[#1c1c1c] block w-full p-2.5"
              placeholder="+1234567890"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-[#1c1c1c]"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="shadow-sm bg-[#eae8e4] border border-gray-300 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#1c1c1c] focus:border-[#1c1c1c] block w-full p-2.5"
              placeholder="City"
            />
          </div>
          <div>
            <label
              htmlFor="projectDescription"
              className="block mb-2 text-sm font-medium text-[#1c1c1c]"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              rows="6"
              value={formData.projectDescription}
              onChange={handleChange}
              className="shadow-sm bg-[#eae8e4] border border-gray-300 text-[#1c1c1c] text-sm rounded-lg focus:ring-[#1c1c1c] focus:border-[#1c1c1c] block w-full p-2.5"
              placeholder="Briefly describe your project or idea (optional)"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#1c1c1c] hover:bg-[#333333] focus:ring-4 focus:outline-none focus:ring-[#4a4a4a]"
          >
            Send Message
          </button>
        </form>

        {/* הודעת הצלחה או שגיאה מתחת לטופס */}
        {status === "success" && (
          <div className="mt-6 p-4 text-green-800 bg-green-100 border border-green-200 rounded-lg text-center">
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm">
              Thank you for reaching out. We'll get back to you shortly.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mt-6 p-4 text-red-800 bg-red-100 border border-red-200 rounded-lg text-center">
            <p className="font-semibold">Failed to send message</p>
            <p className="text-sm">
              An error occurred. Please try again later.
            </p>
          </div>
        )}
      </div>
      {/* פוטר ממורכז */}
      <footer className="flex items-center justify-center text-center">
        <p className="text-gray-500  text-lg ">
          Website designed and developed by{" "}
          <a
            href="https://yigalipsey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#865136] text-xl  hover:underline"
          >
            Yigal Lipsey
          </a>
        </p>
      </footer>
    </section>
  );
};

export default ContactForm;
