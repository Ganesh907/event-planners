import { useEffect, useState } from "react";
import BannerImg from "../../assets/images/AnniversaryDecoration.jpg";

const LoginPopup = ({ onClose }) => {
  const [step, setStep] = useState("mobile"); // "mobile" | "otp"
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);

  // Input mobile only
  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobile(value);
      setError("");
    }
  };

  // Continue to OTP screen if mobile is valid
  const handleContinue = () => {
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      setError("Enter valid 10-digit mobile number");
    } else {
      setError("");
      setStep("otp");
      setTimer(30);
    }
  };

  // Handle OTP input
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // Timer for resend
  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      console.log("Verifying OTP:", enteredOtp);
      // Add API call here
    } else {
      alert("Please enter all 6 digits of OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-[3px] z-40">
      {/* Popup Content */}
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          <img
            src={BannerImg}
            alt="Login Banner"
            className="w-full h-44 object-cover"
          />
          <div className="absolute top-3 right-3">
            <button
              className="bg-white text-black rounded-full w-8 h-8 text-lg font-bold shadow hover:bg-gray-100"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="absolute bottom-3 left-4 text-white">
            <p className="text-sm font-medium">
              Login for{" "}
              <span className="text-yellow-300 font-bold">extraaa</span>{" "}
              savings!
            </p>
            <p className="text-xs">Get upto ₹1000 off + free gifts</p>
          </div>
        </div>

        {/* Mobile Input Step */}
        {step === "mobile" && (
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Login or Signup</h2>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-2">
              <span className="text-gray-700 mr-2">+91</span>
              <input
                type="tel"
                value={mobile}
                maxLength={10}
                onChange={handleMobileChange}
                placeholder="Enter mobile number"
                className="outline-none w-full"
              />
            </div>
            {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
            <button
              onClick={handleContinue}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold"
            >
              CONTINUE
            </button>
            <p className="text-xs text-center mt-3 text-gray-500">
              By clicking on Login, I accept the{" "}
              <span className="text-blue-600 font-medium cursor-pointer">
                Terms & Conditions
              </span>{" "}
              &{" "}
              <span className="text-blue-600 font-medium cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        )}

        {/* OTP Step */}
        {step === "otp" && (
          <div className="p-4">
            <p className="text-sm text-gray-700 text-center mb-3">
              Enter OTP sent to +91 {mobile}{" "}
              <span
                className="text-blue-600 font-medium cursor-pointer"
                onClick={() => setStep("mobile")}
              >
                Edit
              </span>
            </p>
            <div className="flex justify-between mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 text-center border rounded text-lg"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                />
              ))}
            </div>
            <div className="text-center text-sm text-gray-500 mb-3">
              Resend OTP in{" "}
              <span className="font-medium text-blue-600">
                {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "Now"}
              </span>
            </div>
            <button
              onClick={handleVerify}
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold"
            >
              VERIFY
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;