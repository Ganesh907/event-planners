// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { Person, Lock } from "@mui/icons-material";

// const LoginForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const onSubmit = (data) => {
//     setLoading(true);
//     setTimeout(() => {
//       const { username, password } = data;
//       if (username === "testuser" && password === "password123") {
//         toast.success("Login Success!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         navigate("/dashboard"); 
//       } else {
//         toast.error("Incorrect Username or Password!", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="flex justify-center items-center  p-10 bg-gray-100">
//       <div
//         className="bg-white p-8 rounded-xl shadow-xl  w-full sm:w-96"
//       >
//         {/* Header */}
//         <h2
//           className="text-3xl lg:text-4xl font-extrabold text-center mb-5 text-[#9c27b0] italic bg-white rounded-md"
//           style={{ fontFamily: 'Playfair Display' }}
//         >
//           Login
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Username */}
//           <div>
//             <label htmlFor="username" className=" text-lg font-medium text-gray-700 flex items-center mb-2">
//               <Person className="mr-2 text-[#9c27b0]" />
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               {...register("username", { required: "Username is required" })}
//               className="w-full p-3 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
//               placeholder="Enter your username"
//             />
//             {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
//           </div>

//           {/* Password */}
//           <div>
//             <label htmlFor="password" className="text-lg font-medium text-gray-700 flex items-center mb-2">
//               <Lock className="mr-2 text-[#9c27b0]" />
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               {...register("password", {
//                 required: "Password is required",
//                 minLength: {
//                   value: 6,
//                   message: "Password must be at least 6 characters",
//                 },
//               })}
//               className="w-full p-3 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
//               placeholder="Enter your password"
//             />
//             {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 text-white font-semibold rounded-lg transition-transform duration-300 ${
//               loading ? "bg-gray-400" : "bg-[#9c27b0] hover:scale-105 hover:bg-[#8e24aa]"
//             }`}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Person, Lock } from "@mui/icons-material";
import axios from "axios";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  
  const onSubmit = async (data) => {
    setLoading(true);
    const { username, password } = data;
  
    try {
      const response = await axios.post(
        "https://localhost:44361/api/Login/Login", // API URL
        { username, password }, // Request body
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200 && response.data.isSuccessful) {
        // Login successful
        toast.success(response.data.message || "Login Success!", {
          position: "top-right",
          autoClose: 5000,
        });
        navigate("/dashboard");
      } else {
        // Login failed
        toast.error(response.data.message || "Invalid username or password!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Login API error:", error);
  
      if (error.response) {
        // Backend returned a specific error
        toast.error(
          error.response.data.message || "Invalid username or password!",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      } else {
        // Network error or server unreachable
        toast.error("Something went wrong. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center  p-10 bg-gray-100">
      <div
        className="bg-white p-8 rounded-xl shadow-xl  w-full sm:w-96"
      >
        {/* Header */}
        <h2
          className="text-3xl lg:text-4xl font-extrabold text-center mb-5 text-[#9c27b0] italic bg-white rounded-md"
          style={{ fontFamily: 'Playfair Display' }}
        >
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className=" text-lg font-medium text-gray-700 flex items-center mb-2">
              <Person className="mr-2 text-[#9c27b0]" />
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="w-full p-3 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
              placeholder="Enter your username"
            />
            {errors.username && <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-lg font-medium text-gray-700 flex items-center mb-2">
              <Lock className="mr-2 text-[#9c27b0]" />
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-3 text-gray-800 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9c27b0] focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg transition-transform duration-300 ${
              loading ? "bg-gray-400" : "bg-[#9c27b0] hover:scale-105 hover:bg-[#8e24aa]"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;

