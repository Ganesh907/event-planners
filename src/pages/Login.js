import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    // Simulating a login attempt with a mock username and password
    setTimeout(() => {
      const { username, password } = data;
      if (username === "testuser" && password === "password123") {
        // if(Response.isSuccessful==="true")
        toast.success("Login Success !", {
               position: "top-right", // Position of the toast
               autoClose: 5000, // Duration before auto-dismiss (in milliseconds)
               hideProgressBar: false, // Show progress bar
               closeOnClick: true, // Close the toast when clicked
               pauseOnHover: true, // Pause the toast when hovered
               draggable: true, // Allow dragging the toast
               progress: undefined, // Default progress bar
             });
      } else {
        toast.error("Incorrect Username or Password!", {
                position: "top-right", // Position of the toast
                autoClose: 5000, // Duration before auto-dismiss (in milliseconds)
                hideProgressBar: false, // Show progress bar
                closeOnClick: true, // Close the toast when clicked
                pauseOnHover: true, // Pause the toast when hovered
                draggable: true, // Allow dragging the toast
                progress: undefined, // Default progress bar
              });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center p-10 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 text-white font-medium rounded-md ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default LoginForm;
