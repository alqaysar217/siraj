
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Library, 
  GraduationCap, 
  Search, 
  Menu, 
  Home, 
  Users, 
  Trophy,
  User,
  Settings,
  History,
  LogOut,
  UserPlus,
  LogIn,
  LayoutDashboard,
  ChevronDown,
  ChevronUp
} from "lucide-react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userOptionsOpen, setUserOptionsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", icon: <Home className="w-4 h-4" />, label: "الرئيسية" },
    { href: "/courses", icon: <BookOpen className="w-4 h-4" />, label: "الكورسات" },
    { href: "/books", icon: <Library className="w-4 h-4" />, label: "الكتب" },
    { href: "/instructors", icon: <Users className="w-4 h-4" />, label: "المدربين" },
    { href: "/elite", icon: <Trophy className="w-4 h-4" />, label: "النخبة" },
    { href: "/verify", icon: <GraduationCap className="w-4 h-4" />, label: "الشهادات" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-primary/5 shadow-sm py-3" 
        : "bg-transparent py-6"
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
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="text-primary font-medium">تسجيل الدخول</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white px-6 rounded-xl font-headline shadow-md transition-all active:scale-95">
                    ابدأ التعلم الآن
                  </Button>
                </Link>
              </>
            ) : null}
          </div>

          {/* Profile Dropdown (Desktop Only) */}
          {mounted && (
            <div className="hidden lg:block">
              <DropdownMenu dir="rtl">
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full luxury-shadow border border-primary/10 p-0 overflow-hidden">
                    <Avatar className="h-full w-full">
                      {isLoggedIn ? (
                        <>
                          <AvatarImage src="https://picsum.photos/seed/user1/100/100" alt="User" />
                          <AvatarFallback className="bg-primary/5 text-primary">ع</AvatarFallback>
                        </>
                      ) : (
                        <AvatarFallback className="bg-primary/5 text-primary/30">
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      )}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 rounded-2xl p-2 font-body" align="end" forceMount>
                  {isLoggedIn ? (
                    <>
                      <DropdownMenuLabel className="font-normal p-4">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-bold text-primary">علي محمد السعيد</p>
                          <p className="text-xs text-primary/40 leading-none">ali.mohamed@example.com</p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="rounded-xl py-3 focus:bg-primary/5 cursor-pointer">
                          <User className="ml-3 h-4 w-4 text-secondary" />
                          <span className="font-headline font-bold text-xs">الملف الشخصي</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-xl py-3 focus:bg-primary/5 cursor-pointer">
                          <LayoutDashboard className="ml-3 h-4 w-4 text-secondary" />
                          <span className="font-headline font-bold text-xs">دوراتي التعليمية</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-xl py-3 focus:bg-primary/5 cursor-pointer">
                          <History className="ml-3 h-4 w-4 text-secondary" />
                          <span className="font-headline font-bold text-xs">سجل المشاهدة</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-xl py-3 focus:bg-primary/5 cursor-pointer">
                          <Settings className="ml-3 h-4 w-4 text-secondary" />
                          <span className="font-headline font-bold text-xs">الإعدادات</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="rounded-xl py-3 text-destructive focus:bg-destructive/5 cursor-pointer" onClick={() => setIsLoggedIn(false)}>
                        <LogOut className="ml-3 h-4 w-4" />
                        <span className="font-headline font-bold text-xs">تسجيل الخروج</span>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <div className="p-6 text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/20">
                          <User className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-headline font-bold text-primary">أهلاً بك في سراجم</p>
                          <p className="text-xs text-primary/40 font-bold leading-relaxed">سجل دخولك الآن لمتابعة دروسك وحفظ تقدمك في المنصة.</p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <div className="p-2 grid gap-2">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-headline h-10 rounded-xl gap-2" asChild>
                          <Link href="/login"><LogIn className="w-4 h-4" /> تسجيل الدخول</Link>
                        </Button>
                        <Button variant="outline" className="w-full border-primary/10 font-headline h-10 rounded-xl gap-2" asChild>
                          <Link href="/signup"><UserPlus className="w-4 h-4 text-secondary" /> إنشاء حساب</Link>
                        </Button>
                      </div>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] font-body p-0 [&>button]:hidden flex flex-col" dir="rtl">
                <SheetHeader className="text-right border-b p-4 bg-primary text-white shrink-0">
                  <SheetTitle className="text-xl font-headline font-bold text-white flex items-center gap-2">
                    <div className="relative w-7 h-7 overflow-hidden rounded-lg bg-white p-1">
                      <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
                    </div>
                    <span>منصة سراج</span>
                  </SheetTitle>
                </SheetHeader>
                
                <ScrollArea className="flex-1 px-3 text-right">
                  <div className="flex flex-col gap-0.5 py-4" dir="rtl">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 text-primary/70 hover:text-secondary transition-all group border border-transparent hover:border-primary/5 text-right"
                      >
                        <span className="p-1.5 bg-primary/5 rounded-lg group-hover:bg-secondary/10 transition-colors shrink-0">
                          {link.icon}
                        </span>
                        <span className="font-headline font-bold text-xs">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </ScrollArea>

                {/* Mobile User Section - Highly Compact & Foldable */}
                <div className="p-3 border-t border-primary/5 bg-primary/5 shrink-0 mt-auto">
                  {isLoggedIn ? (
                    <div className="space-y-1.5">
                      <Collapsible open={userOptionsOpen} onOpenChange={setUserOptionsOpen}>
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-white/50 transition-all cursor-pointer text-right" dir="rtl">
                            <Avatar className="h-8 w-8 border border-white shadow-sm shrink-0">
                              <AvatarImage src="https://picsum.photos/seed/user1/100/100" alt="User" />
                              <AvatarFallback className="bg-primary/5 text-primary text-[10px] font-bold">ع</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 flex items-center justify-between">
                              <div className="flex flex-col">
                                <p className="font-headline font-bold text-[10px] text-primary leading-tight">علي محمد السعيد</p>
                                <p className="text-[8px] text-secondary font-bold uppercase tracking-wider">طالب متميز</p>
                              </div>
                              {userOptionsOpen ? <ChevronUp className="w-3 h-3 text-primary/30" /> : <ChevronDown className="w-3 h-3 text-primary/30" />}
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-0.5 pt-1">
                          <Link href="#" className="flex items-center gap-2.5 p-1.5 rounded-lg text-[10px] font-headline font-bold text-primary/60 hover:text-secondary hover:bg-white transition-all text-right" dir="rtl">
                            <User className="w-3.5 h-3.5 text-secondary/60" />
                            <span>الملف الشخصي</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2.5 p-1.5 rounded-lg text-[10px] font-headline font-bold text-primary/60 hover:text-secondary hover:bg-white transition-all text-right" dir="rtl">
                            <LayoutDashboard className="w-3.5 h-3.5 text-secondary/60" />
                            <span>دوراتي التعليمية</span>
                          </Link>
                          <Link href="#" className="flex items-center gap-2.5 p-1.5 rounded-lg text-[10px] font-headline font-bold text-primary/60 hover:text-secondary hover:bg-white transition-all text-right" dir="rtl">
                            <History className="w-3.5 h-3.5 text-secondary/60" />
                            <span>سجل المشاهدة</span>
                          </Link>
                        </CollapsibleContent>
                      </Collapsible>
                      
                      <Button 
                        variant="ghost" 
                        className="w-full h-8 rounded-lg text-[10px] font-headline gap-2 text-destructive hover:bg-destructive/5 hover:text-destructive border border-destructive/5 bg-destructive/5 justify-start px-2.5"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>تسجيل الخروج</span>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid gap-1.5">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-9 rounded-xl font-headline shadow-md text-[11px]" asChild>
                        <Link href="/signup">ابدأ التعلم الآن</Link>
                      </Button>
                      <Button variant="outline" className="w-full h-9 rounded-xl font-headline border-primary/10 text-[11px]" asChild>
                        <Link href="/login">تسجيل الدخول</Link>
                      </Button>
                    </div>
                  )}
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
      <span className="font-headline text-sm">{label}</span>
    </Link>
  );
}
