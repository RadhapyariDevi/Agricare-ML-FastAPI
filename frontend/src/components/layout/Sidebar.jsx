"use client";

import React from "react";
import {
  Leaf,
  Camera,
  FolderOpen,
  MessageSquare,
  Newspaper,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Upload", href: "/dashboard", icon: Camera },
  { name: "History", href: "/history", icon: FolderOpen },
  { name: "Chatbot", href: "/chatbot", icon: MessageSquare },
  { name: "Agriculture News", href: "/news", icon: Newspaper },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-sidebar border-r border-border flex flex-col justify-between px-4 py-6">
      <div>
        <div className="flex items-center gap-2 mb-8 px-2">
          <Leaf className="text-primary" size={22} />
          <span className="text-lg font-bold text-foreground">AgriCare</span>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
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

      <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;