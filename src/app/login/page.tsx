
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Mail, Lock, ArrowRight, Chrome, Github, ChevronRight } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // سيتم ربط الوظيفة فعلياً بـ Firebase لاحقاً
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 relative overflow-hidden" dir="rtl">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-0 bg-white rounded-[40px] overflow-hidden luxury-shadow border border-primary/5">
        
        {/* Left Side: Visual/Welcome (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white relative">
          <div className="absolute inset-0 bg-secondary/5 -z-0" />
          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-3 mb-16">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
              <span className="text-3xl font-headline font-bold">سراج</span>
            </Link>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-headline font-bold leading-tight">مرحباً بك مجدداً في <br /><span className="text-secondary">رحلة المعرفة</span></h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
                سجل دخولك لتكمل ما بدأته، وتصل إلى أحدث الدروس والكتب في مكتبتك الخاصة.
              </p>
            </div>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/${i+10}/100/100`} alt="user" fill />
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/40 font-bold">انضم إلى +10,000 طالب وطالبة</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="space-y-2 text-center lg:text-right">
              <h1 className="text-3xl font-headline font-bold text-primary">تسجيل الدخول</h1>
              <p className="text-primary/40 text-sm font-bold">أدخل بياناتك للوصول إلى حسابك الشخصي</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 rounded-2xl border-primary/10 font-headline text-xs gap-3">
                <Chrome className="w-4 h-4 text-red-500" /> جوجل
              </Button>
              <Button variant="outline" className="h-12 rounded-2xl border-primary/10 font-headline text-xs gap-3">
                <Github className="w-4 h-4" /> جيت هاب
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-primary/5"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-primary/20 font-bold">أو عبر البريد</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-primary mr-1">البريد الإلكتروني</Label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="h-14 rounded-2xl pr-12 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left" 
                    required 
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <Label className="text-xs font-bold text-primary">كلمة المرور</Label>
                  <Link href="/forgot-password" title="نسيت كلمة المرور" className="text-[10px] text-secondary font-bold hover:underline">نسيت كلمة المرور؟</Link>
                </div>
                <div className="relative">
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="h-14 rounded-2xl pr-12 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left" 
                    required 
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-headline text-lg shadow-xl gold-glow transition-all active:scale-95"
                disabled={isLoading}
              >
                {isLoading ? "جاري الدخول..." : "تسجيل الدخول"}
                {!isLoading && <ChevronRight className="mr-2 w-5 h-5 rotate-180" />}
              </Button>
            </form>

            <p className="text-center text-sm text-primary/60 font-medium pt-4">
              ليس لديك حساب؟{" "}
              <Link href="/signup" className="text-secondary font-bold hover:underline">إنشاء حساب جديد</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
