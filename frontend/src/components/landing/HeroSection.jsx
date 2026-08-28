"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext.jsx";

export default function HeroSection() {
  const { user, loading } = useAuth();

  const href = user ? "/upload" : "/register";
  const buttonText = user ? "Go to Upload" : "Get Started";

  return (
    <section className="relative flex flex-col items-center text-center px-6 md:px-20 pt-24 pb-20 overflow-hidden">
      
      <div className="absolute inset-0 -z-10">
        <img
          src="/landing-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-3xl">
        Identify Crop Diseases in Seconds with AI.
      </h1>

      <p className="text-muted text-lg md:text-xl mt-6 max-w-2xl">
        A simple tool built for farmers to protect their harvest and grow healthier crops.
      </p>

      <Link
        href={href}
        className="mt-8 bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-10 py-3 rounded-full shadow-md flex items-center gap-2 w-fit"
      >
        {buttonText}
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}