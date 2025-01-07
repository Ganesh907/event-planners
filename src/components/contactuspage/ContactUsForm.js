import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Regular Expression for Valid Email and Phone
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/; // This is for a 10-digit phone number

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error when input changes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Handle phone number input to allow only digits
  const handlePhoneChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers by replacing non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");
    setFormData((prevData) => ({
      ...prevData,
      [name]: numericValue,
    }));

    // Clear the phone error message on user input
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    // Validate Name
    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validate Subject
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    // Validate Message
    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully!", {
        position: "top-center", // Position of the toast
        autoClose: 5000, // Duration before auto-dismiss (in milliseconds)
        hideProgressBar: false, // Show progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the toast when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // Default progress bar
      });
      console.log("Form data submitted: ", formData);
      // You can add logic to submit the form, e.g., to an API here
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto my-10 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-t-lg">
        <h2 className="text-2xl font-semibold">Send Us an Enquiry</h2>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={25}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={25}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange} // Use custom handler
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="Your Phone Number"
            maxLength={10} // Restrict to 10 digits
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            maxLength={25}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            maxLength={100}
            required
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
      {/* ToastContainer */}
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
};
