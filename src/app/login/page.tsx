
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Chrome, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 relative overflow-hidden" dir="rtl">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-0 bg-white rounded-[48px] overflow-hidden luxury-shadow border border-primary/5 min-h-[700px]">
        
        {/* Left Side: Branding/Info (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-primary text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/30 -z-0" />
          
          {/* Top Decorative Blur */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/20 blur-[80px] -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-4 mb-20 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl transition-transform group-hover:scale-105">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
              <span className="text-4xl font-headline font-bold tracking-tight">سراج</span>
            </Link>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-headline font-bold leading-[1.2]">
                مرحباً بك مجدداً في <br />
                <span className="text-secondary">عالم سراج</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed max-w-sm font-medium">
                سجل دخولك لتكمل رحلتك التعليمية وتصل إلى أحدث الدروس والكتب في مكتبتك الخاصة.
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden relative shadow-xl">
                    <Image src={`https://picsum.photos/seed/${i+20}/100/100`} alt="user" fill />
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/50 font-bold">انضم إلى أكثر من <span className="text-secondary text-lg">+10,000</span> طموح</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-10">
             <div className="relative w-16 h-16 overflow-hidden rounded-2xl bg-primary/5 p-2 shadow-inner">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
             </div>
          </div>

          <div className="max-w-md mx-auto w-full space-y-10">
            <div className="space-y-4 text-center lg:text-right">
              <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary">تسجيل الدخول</h1>
              <p className="text-primary/40 text-base md:text-lg font-bold">نحن سعداء برؤيتك مرة أخرى!</p>
            </div>

            <div className="space-y-6">
              <Button variant="outline" className="w-full h-16 rounded-[24px] border-primary/10 font-headline text-base gap-4 hover:bg-primary/5 transition-all shadow-sm">
                <Chrome className="w-6 h-6 text-red-500" /> المتابعة بواسطة جوجل
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/5"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-6 text-primary/20 font-bold tracking-widest">أو عبر البريد</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label className="text-sm font-bold text-primary mr-2">البريد الإلكتروني</Label>
                  <div className="relative group">
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="h-16 rounded-[20px] pr-14 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left transition-all text-lg" 
                      required 
                    />
                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 w-6 h-6 group-focus-within:text-secondary transition-colors" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <Label className="text-sm font-bold text-primary">كلمة المرور</Label>
                    <Link href="#" className="text-xs text-secondary font-bold hover:underline">نسيت كلمة المرور؟</Link>
                  </div>
                  <div className="relative group">
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="h-16 rounded-[20px] pr-14 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left transition-all text-lg" 
                      required 
                    />
                    <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 w-6 h-6 group-focus-within:text-secondary transition-colors" />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-[24px] font-headline text-xl shadow-2xl gold-glow transition-all active:scale-95 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? "جاري التحقق..." : "دخول إلى المنصة"}
                  {!isLoading && <ChevronRight className="mr-2 w-6 h-6 rotate-180" />}
                </Button>
              </form>
            </div>

            <p className="text-center text-base text-primary/60 font-medium">
              جديد في سراج؟{" "}
              <Link href="/signup" className="text-secondary font-bold hover:underline transition-all hover:pr-1">أنشئ حسابك الآن</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
