"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ColorPicker } from "../../styles/color";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    Subject: "",
    message: "",
    contact:""
  })
  const [loading, setLoading] = useState(false)

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  useEffect(() => {
    console.log("Service ID:", SERVICE_ID);
    console.log("TEMPLATE ID:", TEMPLATE_ID);
    console.log("PUBLIC KEY:", PUBLIC_KEY);
  }, [])


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.fullname.trim()) {
      toast.error("Full name is required");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email service not configured");
      return;
    }
    setLoading(true)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS env variables are missing. Ensure NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY are set.');
      toast.error('Error occured!');
      return;
    }

    const templateParams = {
      name: formData.fullname,
      email: formData.email,
      subject: formData.Subject,
      message: formData.message
    }
    try {
      await emailjs.send(SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY)
      toast.success("Message sent successfully!");
     
      await emailjs.send(
        SERVICE_ID!,
        AUTOREPLY_TEMPLATE_ID!,
        templateParams,
        PUBLIC_KEY!
      )
      setFormData({
        fullname: "",
        email: "",
        Subject: "",
        message: "",
        contact:""
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message");
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={sendEmail} className="2xl:w-1/2 text-neutral-100 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
      <motion.div initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Name Field */}
        <input
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          style={{ backgroundColor: ColorPicker.bg }}
          placeholder="Your name"
          className="w-full p-2 mb-3 rounded-lg border ease border-[#343434] outline-none transition-all duration-500 focus:border-[#00ffaa] placeholder:text-[#8d8b8b]"
        />

        {/* Email Field */}
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={{ backgroundColor: ColorPicker.bg }}
          className="w-full p-2 mb-3 rounded-lg border ease border-[#343434] outline-none transition-all duration-500 focus:border-[#00ffaa] placeholder:text-[#8d8b8b]"
          placeholder="you@example.com"
        />

        {/* Subject Field */}
        <input
          name="Subject"
          value={formData.Subject}
          onChange={handleChange}
          style={{ backgroundColor: ColorPicker.bg }}
          className="w-full p-2 mb-3 rounded-lg border ease border-[#343434] outline-none transition-all duration-500 focus:border-[#00ffaa] placeholder:text-[#8d8b8b]"
          placeholder="What is this about?"
        />

        {/* Message Field */}
        <textarea
          name="message"
          rows={4}
          cols={30}
          value={formData.message}
          onChange={handleChange}
          style={{ backgroundColor: ColorPicker.bg }}
          className="w-full p-2 mb-3 rounded-lg border ease border-[#343434] outline-none transition-all duration-500 focus:border-[#00ffaa] placeholder:text-[#8d8b8b]"
          placeholder="Tell us about your project or question"
        />

        {/* Phone Field */}
        <input
          name="contact"
          onChange={handleChange}
          value={formData.contact}
          style={{ backgroundColor: ColorPicker.bg }}
          className="w-full p-2 mb-3 rounded-lg border ease border-[#343434] outline-none transition-all duration-500 focus:border-[#00ffaa] placeholder:text-[#8d8b8b]"
          placeholder="Phone Number (Optional)"
        />

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            style={{ backgroundColor: ColorPicker.primary }}
            className={`p-2 w-full rounded-lg font-semibold text-md transition
      ${loading
                ? "text-gray-400 cursor-not-allowed opacity-70"
                : "text-[#000] cursor-pointer hover:opacity-90"}
    `}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

      </motion.div>

    </form>
  );
}
