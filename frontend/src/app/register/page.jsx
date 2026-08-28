"use client";
import { Leaf, User, Mail, Lock, Tractor, ChevronDown } from "lucide-react";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import api from "../../lib/api.js";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      Cookies.set("token", res.data.token, { expires: 7 });
      router.push("/upload");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      {/* Logo badge */}
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-5">
        <Leaf className="text-white" size={20} />
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-1">
        Join the Community
      </h1>
      <p className="text-muted mb-8">Create an account to start tracking.</p>
      {error && (
        <p className="text-danger text-sm mb-4 bg-danger/10 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Full Name
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full h-14 pl-10 pr-4 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-14 pl-10 pr-4 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Password + Confirm */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full h-14 pl-10 pr-3 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full h-14 pl-10 pr-3 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-primary cursor-pointer text-white font-semibold rounded-full shadow-[0px_4px_12px_-4px_rgba(96,56,8,0.2)] hover:bg-primary-hover disabled:opacity-50 transition"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <p className="text-center text-muted mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-tertiary font-semibold underline">
          Login here
        </Link>
      </p>
    </AuthLayout>
  );
}
