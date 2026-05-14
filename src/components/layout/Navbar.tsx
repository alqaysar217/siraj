
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Map, Library, GraduationCap, Search, User, Menu, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl shadow-lg gold-glow">
              <span className="text-secondary font-headline font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-headline font-bold text-primary tracking-tight">
              سراج
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/" icon={<Home className="w-4 h-4" />} label="الرئيسية" />
            <NavLink href="/courses" icon={<BookOpen className="w-4 h-4" />} label="الكورسات" />
            <NavLink href="/learning-paths" icon={<Map className="w-4 h-4" />} label="المسارات" />
            <NavLink href="/books" icon={<Library className="w-4 h-4" />} label="الكتب" />
            <NavLink href="/verify" icon={<GraduationCap className="w-4 h-4" />} label="الشهادات" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-primary">
            <Search className="w-5 h-5" />
          </Button>
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-primary font-medium">تسجيل الدخول</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 rounded-xl font-headline shadow-md transition-all active:scale-95">
                ابدأ التعلم الآن
              </Button>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden text-primary">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-primary/70 hover:text-secondary font-medium transition-colors group">
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-headline">{label}</span>
    </Link>
  );
}
