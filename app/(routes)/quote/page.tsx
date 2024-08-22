"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Quote = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server, trigger email, etc.)
    console.log('Form submitted:', formData);
    // Redirect to a thank you page or display a success message
    router.push('/thanks');
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto p-6 md:p-12 bg-black text-black rounded-lg shadow-lg">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Request a Quote
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              pattern="[0-9]*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="service" className="block text-lg font-medium text-gray-700">
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
            >
              <option value="" disabled>Select a service</option>
              <option value="Website Creation">Website Creation</option>
              <option value="Local SEO">Local SEO</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Support">Support</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="Tell us more about your project..."
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-500 hover:to-green-700 transition-all duration-300"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Quote;
