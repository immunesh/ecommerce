import { FaceSmileIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login successful:", formData);
    // Add your login logic/API call here
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4 py-12 mt-32">
      <div className="flex w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-2xl">
        
        {/* Left Side: Lifestyle Image (Hidden on Mobile) */}
        <div className="hidden w-1/2 lg:flex justify-center items-center">
          <img
            className="h-1/2 w-1/2 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
            alt="Fashion Model"
          />
        </div>

        {/* Right Side: Form */}
        <div className="flex w-full flex-col justify-center p-8 md:p-12 lg:w-1/2">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
            <p className="mt-2 text-sm text-gray-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
                placeholder="••••••••"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center">
              <span className="absolute bg-white px-3 text-xs text-gray-400 uppercase">Or continue with</span>
              <div className="w-full border-t border-gray-200"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center rounded-lg border border-gray-300 py-2.5 transition hover:bg-gray-50">
                <GlobeAltIcon className="h-5 w-5 mr-2" alt="Google" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center rounded-lg border border-gray-300 py-2.5 transition hover:bg-gray-50">
                <FaceSmileIcon className="h-5 w-5 mr-2"alt="Facebook" />
                <span className="text-sm font-medium">Facebook</span>
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")} className="cursor-pointer font-semibold text-black hover:underline">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
