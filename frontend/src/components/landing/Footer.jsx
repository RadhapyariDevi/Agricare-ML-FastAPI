import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-tertiary-foreground px-6 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="text-[#b1f0ce]" size={22} />
          <span className="text-2xl font-bold text-[#b1f0ce] tracking-tight">AgriCare</span>
        </div>
        <p className="text-[#f2f1e5]/70 max-w-xs">
          Empowering farmers with instant, AI-driven crop protection.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <a href="#" className="font-semibold hover:text-[#b1f0ce] transition">About Us</a>
        <a href="#" className="font-semibold hover:text-[#b1f0ce] transition">Contact Support</a>
      </div>
    </footer>
  );
}