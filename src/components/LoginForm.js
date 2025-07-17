"use client";
import { useState } from "react";
import CustomButton from "./Buttons/CustomButton";
import { Divide } from "lucide-react";
// import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //Test log //successful login
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please log in to your account
        </p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full h-8 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-8 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <a href="#" className="text-indigo-700 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex flex-row justify-center">
            <CustomButton type="submit" text="Log in" className="w-full" />
          </div>
        </form>

        {/* <p className="mt-6 text-center text-sm text-gray-600">
          Do not have an account?{" "}
          <a
            href="/register"
            className="text-indigo-700 hover:underline font-medium"
          >
            Sign up
          </a>
        </p> */}
      </div>
    </div>
  );
}
