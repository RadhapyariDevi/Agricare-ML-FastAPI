"use client";

import { Menu, User } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-8 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <button
        onClick={onMenuClick}
        className="md:hidden text-foreground p-2 -ml-2"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <div className="hidden md:block" />

      <button className="flex items-center justify-center size-9 rounded-full bg-primary/10 text-primary">
        <User size={18} />
      </button>
    </header>
  );
}