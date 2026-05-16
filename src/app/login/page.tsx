
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Chrome, MessageCircle, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden" dir="rtl">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-[1000px] grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl border border-primary/5 min-h-[600px] relative z-10">
        
        {/* Branding Side (Desktop Only) - Recommended Size: 1000x1400px */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-primary text-white relative overflow-hidden">
          <Image 
            src="/Login.png" 
            alt="Login Branding" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/40 to-secondary/20 -z-0" />
        </div>

        {/* Form Side */}
        <div className="p-6 md:p-12 flex flex-col justify-center bg-white relative">
          <div className="max-w-sm mx-auto w-full space-y-8">
            {/* Logo & Header */}
            <div className="text-center space-y-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-primary/5 p-2 border border-primary/5 mx-auto">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
              <h1 className="text-2xl font-headline font-bold text-primary">تسجيل الدخول</h1>
              <p className="text-xs font-bold text-primary/40">أهلاً بك مجدداً في منصة سراج</p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-primary flex items-center gap-2 mr-1">
                  <Mail className="w-4 h-4 text-secondary" /> البريد الإلكتروني
                </Label>
                <Input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="h-11 rounded-xl border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left text-sm" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-primary flex items-center gap-2 mr-1">
                  <Lock className="w-4 h-4 text-secondary" /> كلمة المرور
                </Label>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="h-11 rounded-xl pl-10 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left text-sm" 
                    required 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30 hover:text-secondary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-headline text-base shadow-lg transition-all active:scale-[0.98] mt-2"
                disabled={isLoading}
              >
                {isLoading ? "جاري التحقق..." : "دخول"}
              </Button>
            </form>

            {/* Social Login */}
            <div className="space-y-4 pt-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/5"></span>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-white px-4 text-primary/20 font-bold tracking-widest">أو</span>
                </div>
              </div>

              <Button variant="outline" className="w-full h-11 rounded-xl border-primary/10 font-headline text-sm gap-3 hover:bg-primary/5 shadow-sm">
                <Chrome className="w-5 h-5 text-red-500" /> الدخول بواسطة جوجل
              </Button>
            </div>

            {/* Support Link */}
            <div className="text-center">
               <Link 
                href="https://wa.me/967735952927" 
                target="_blank"
                className="inline-flex items-center gap-2 text-[11px] text-primary/50 hover:text-secondary transition-colors font-bold"
              >
                <MessageCircle className="w-4 h-4" /> تواجه مشكلة؟ تواصل معنا واتساب
              </Link>
            </div>

            {/* Footer Link */}
            <p className="text-center text-xs text-primary/60 font-medium">
              جديد في سراج؟{" "}
              <Link href="/signup" className="text-secondary font-bold hover:underline">أنشئ حسابك الآن</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
