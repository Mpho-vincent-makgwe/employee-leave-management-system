'use client';
import { useState } from 'react';
import CustomButton from '@/components/Buttons/CustomButton';
import { useUser } from '@/context/UserContext';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const result = await login(formData.email, formData.password);
      if (!result.success) {
        throw new Error(result.error || 'Login failed. Please try again.');
      }
      router.push(redirect);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
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
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-8 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              autoComplete="email"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-8 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              autoComplete="current-password"
              minLength={6}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a 
              href="/auth/forgot-password" 
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Forgot password?
            </a>
          </div>

          <CustomButton 
            type="submit" 
            text={isSubmitting ? "Logging in..." : "Log in"}
            className="w-full py-3"
            disabled={isSubmitting}
          />
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