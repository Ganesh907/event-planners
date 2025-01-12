import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI Icons
import { Person, Email, Phone, Subject, Message } from '@mui/icons-material';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.success('Form submitted successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    console.log('Form data submitted: ', data);
    reset();
  };

  return (
    <div className="scale-90 bg-white rounded-xl shadow-2xl max-w-2xl mx-auto p-5 md:p-8 lg:p-5 lg:px-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-[#9c27b0] italic bg-white rounded-md"
          style={{ fontFamily: 'Playfair Display' }}
        >
          Plan Your Perfect Event
        </h2>
        <p className="text-md text-black mt-2">Let us help you create unforgettable moments.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label htmlFor="name" className=" text-lg font-medium text-black mb-2 flex items-center">
            <Person className="mr-2 text-[#9c27b0]" />
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
            placeholder="Your Full Name"
          />
          {errors.name && <p className="text-sm text-red-500 mt-2">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-black mb-2 flex items-center">
            <Email className="mr-2 text-[#9c27b0]" />
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: emailRegex,
                message: 'Invalid email format',
              },
            })}
            className="w-full p-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
            placeholder="Your Email Address"
          />
          {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-black mb-2 flex items-center">
            <Phone className="mr-2 text-[#9c27b0]" />
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            maxLength={10}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: phoneRegex,
                message: 'Phone number must be 10 digits',
              },
            })}
            className="w-full p-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
            placeholder="Your Phone Number"
          />
          {errors.phone && <p className="text-sm text-red-500 mt-2">{errors.phone.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-black mb-2 flex items-center">
            <Subject className="mr-2 text-[#9c27b0]" />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full p-2 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
            placeholder="Event Subject"
          />
          {errors.subject && <p className="text-sm text-red-500 mt-2">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div className="lg:col-span-2">
          <label htmlFor="message" className="block text-lg font-medium text-black mb-2 flex items-center">
            <Message className="mr-2 text-[#9c27b0]" />
            Message
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="w-full p-4 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
            rows="5"
            placeholder="Describe your event..."
          ></textarea>
          {errors.message && <p className="text-sm text-red-500 mt-2">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full p-2 bg-[#9c27b0] text-white font-semibold hover:scale-105 rounded-lg shadow-lg transition ease-in-out duration-300 focus:ring-2 focus:ring-[#9c27b0]"
          >
            Submit Your Enquiry
          </button>
        </div>
      </form>

      {/* ToastContainer */}
      <ToastContainer />
    </div>
  );
};
