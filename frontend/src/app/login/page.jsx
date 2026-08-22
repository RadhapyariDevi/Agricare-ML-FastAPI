"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf, Mail, Lock } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import api from "@/lib/api";
import AuthLayout from "@/components/layout/AuthLayout";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      Cookies.set("token", res.data.token, { expires: 7 });
      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
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

      <h1 className="text-3xl font-bold text-foreground mb-1">Welcome Back</h1>
      <p className="text-muted mb-8">Sign in to manage your fields.</p>

      {error && (
        <p className="text-danger text-sm mb-4 bg-danger/10 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-14 pl-10 pr-4 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-1">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full h-14 pl-10 pr-3 bg-input-bg border border-input-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* <div className="text-right mt-2">
            <span className="text-tertiary text-sm cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div> */}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 bg-primary text-white font-semibold rounded-full shadow-[0px_4px_12px_-4px_rgba(96,56,8,0.2)] hover:bg-primary-hover disabled:opacity-50 transition"
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>

      <p className="text-center text-muted mt-6">
        {`Don't have an account? `}
        <Link href="/register" className="text-tertiary font-semibold underline">
          Register here
        </Link>
      </p>
    </AuthLayout>
  );
}