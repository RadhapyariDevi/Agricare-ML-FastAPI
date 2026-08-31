"use client";

import React from "react";
import {
  Leaf,
  Camera,
  FolderOpen,
  MessageSquare,
  Newspaper,
  LogOut,
  X,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext.jsx";

const navItems = [
  { name: "Upload", href: "/upload", icon: Camera },
  { name: "History", href: "/history", icon: FolderOpen },
  // { name: "Chatbot", href: "/chatbot", icon: MessageSquare },
  // { name: "Agriculture News", href: "/news", icon: Newspaper },
];

function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen w-72 shrink-0 bg-sidebar border-r border-border flex flex-col justify-between px-4 py-6 z-50 transition-transform duration-200 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2">
              <Leaf className="text-primary" size={22} />
              <span className="text-lg font-bold text-foreground">AgriCare</span>
            </div>
            <button onClick={onClose} className="md:hidden text-muted-foreground">
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/10"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>

        <button
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;