import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <section className="w-full  py-16 px-6 bg-white grid md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
      {/* Left Info */}
      <div className="p-10 bg-white space-y-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Whether you're a member of the public or a business who would love to be a partner,{" "}
            <a href="#" className="text-red-200 font-medium hover:underline">come and talk to us!</a>
          </p>
          <p className="text-gray-600 mt-4">
            We'd love to hear about your medical needs and how we can best tailor our services to support you.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3 text-teal-700">
            <Phone size={16} />
            <span className="text-gray-800 font-semibold">+966-234-567-8976</span>
          </div>

          <div className="flex items-center gap-3 text-teal-700">
            <Mail size={16} />
            <span className="text-gray-800 font-semibold">info@fii.sa</span>
          </div>

          <div className="flex items-start gap-3 text-teal-700">
            <MapPin size={16} className="mt-1" />
            <div>
              <p className="text-gray-800 font-semibold">Central Riyadh</p>
              <p className="text-gray-600">Dhahrat Laban<br />Every day from 9 am to 6 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="bg-gradient-to-br from-white to-red-200 p-10 rounded-3xl shadow-orange-400">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Send us a message</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-md"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              maxLength={150}
              className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <div className="text-xs text-right text-gray-400">
              {formData.message.length}/150
            </div>
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white px-8 py-3 rounded-md hover:bg-red-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
