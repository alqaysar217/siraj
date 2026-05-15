
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Map, Library, GraduationCap, Search, User, Menu, Home, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", icon: <Home className="w-4 h-4" />, label: "الرئيسية" },
    { href: "/courses", icon: <BookOpen className="w-4 h-4" />, label: "الكورسات" },
    { href: "/learning-paths", icon: <Map className="w-4 h-4" />, label: "المسارات" },
    { href: "/books", icon: <Library className="w-4 h-4" />, label: "الكتب" },
    { href: "/verify", icon: <GraduationCap className="w-4 h-4" />, label: "الشهادات" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg gold-glow">
              <Image src="/siraj.png" alt="سراج" fill className="object-cover" />
            </div>
            <span className="text-2xl font-headline font-bold text-primary tracking-tight">
              سراج
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} icon={link.icon} label={link.label} />
            ))}
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

          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] font-body [&>button]:hidden">
                <SheetHeader className="text-right border-b pb-6 mb-6">
                  <SheetTitle className="text-2xl font-headline font-bold text-primary flex items-center gap-2 justify-end">
                    <span>منصة سراج</span>
                    <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                      <Image src="/siraj.png" alt="سراج" fill className="object-cover" />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 text-primary/70 hover:text-secondary transition-all group border border-transparent hover:border-primary/5"
                    >
                      <span className="p-2 bg-primary/5 rounded-lg group-hover:bg-secondary/10 transition-colors">
                        {link.icon}
                      </span>
                      <span className="font-headline font-bold">{link.label}</span>
                    </Link>
                  ))}
                  
                  <div className="grid gap-3 mt-8 pt-8 border-t">
                    <Link href="/signup">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 rounded-xl font-headline shadow-md">
                        ابدأ التعلم الآن
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button variant="outline" className="w-full h-12 rounded-xl font-headline border-primary/10">
                        تسجيل الدخول
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="lg:hidden text-primary">
              <Menu className="w-6 h-6" />
            </Button>
          )}
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
