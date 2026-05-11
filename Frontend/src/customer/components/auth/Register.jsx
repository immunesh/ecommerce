import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/Axios";
import API from "../axios/AuthAPI";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
   try {
    // Just call the service function
    const data = await API.register(formData);
    console.log("Registration success:", data);
    navigate("/"); // Redirect to home
  } catch (error) {
    console.error("Error:", error.response?.data?.message || error.message);
    alert(error.response?.data?.message || "Registration failed");
  }
  
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-12 mt-20">
      <div className="flex w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        
        {/* Left Side: Form */}
        <div className="flex w-full flex-col justify-center p-8 md:p-12 lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
            <p className="mt-2 text-sm text-gray-500">Join us to get exclusive offers and track your orders.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                placeholder="John Doe"
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                placeholder="you@example.com"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                  placeholder="••••••••"
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the <span className="text-indigo-600 hover:underline cursor-pointer">Terms & Conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="cursor-pointer font-semibold text-black hover:underline">
              Log in
            </span>
          </p>
        </div>

        {/* Right Side: Lifestyle Image */}
        <div className="hidden w-1/2  lg:flex items-center justify-center">
          <img
            className="h-1/2 w-1/2 object-cover "
            src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Shopping Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
