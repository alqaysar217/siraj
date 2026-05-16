
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Lock, Chrome, MessageCircle, Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
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
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-secondary/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />

      <div className="w-full max-w-[1000px] grid lg:grid-cols-2 bg-white rounded-[32px] overflow-hidden shadow-2xl border border-primary/5 min-h-[650px] relative z-10">
        
        {/* Form Side */}
        <div className="p-6 md:p-12 flex flex-col justify-center bg-white relative order-2 lg:order-1">
          <div className="max-w-sm mx-auto w-full space-y-6">
            {/* Logo & Header */}
            <div className="text-center space-y-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-primary/5 p-2 border border-primary/5 mx-auto">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
              <h1 className="text-2xl font-headline font-bold text-primary">إنشاء حساب</h1>
              <p className="text-xs font-bold text-primary/40">انضم إلى مجتمع سراج التعليمي اليوم</p>
            </div>

            {/* Main Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-primary flex items-center gap-2 mr-1">
                  <User className="w-4 h-4 text-secondary" /> الاسم الكامل
                </Label>
                <Input 
                  type="text" 
                  placeholder="أحمد محمد سالم" 
                  className="h-11 rounded-xl border-primary/10 bg-primary/5 focus-visible:ring-secondary text-right text-sm" 
                  required 
                />
              </div>

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

              <div className="flex items-start gap-2.5 pt-1 px-1">
                <Checkbox id="terms" className="mt-1 rounded-md border-primary/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary h-4 w-4" required />
                <label htmlFor="terms" className="text-[10px] text-primary/60 leading-relaxed font-bold">
                  أوافق على <Link href="#" className="text-secondary hover:underline">شروط الخدمة</Link> و <Link href="#" className="text-secondary hover:underline">سياسة الخصوصية</Link> للمنصة.
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-headline text-base shadow-lg transition-all active:scale-[0.98] mt-2"
                disabled={isLoading}
              >
                {isLoading ? "جاري الإنشاء..." : "إنشاء الحساب"}
              </Button>
            </form>

            {/* Social Login */}
            <div className="space-y-3 pt-1">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/5"></span>
                </div>
                <div className="relative flex justify-center text-[10px] uppercase">
                  <span className="bg-white px-4 text-primary/20 font-bold tracking-widest">أو</span>
                </div>
              </div>

              <Button variant="outline" className="w-full h-11 rounded-xl border-primary/10 font-headline text-sm gap-3 hover:bg-primary/5 shadow-sm">
                <Chrome className="w-5 h-5 text-red-500" /> التسجيل بواسطة جوجل
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
              لديك حساب بالفعل؟{" "}
              <Link href="/login" className="text-secondary font-bold hover:underline">تسجيل الدخول</Link>
            </p>
          </div>
        </div>

        {/* Branding Side (Desktop Only) */}
        <div className="hidden lg:flex flex-col justify-center p-12 bg-primary text-white relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary via-primary/95 to-secondary/20 -z-0" />
          <div className="relative z-10 space-y-6 text-right">
            <Link href="/" className="flex items-center justify-end gap-3 mb-12">
              <span className="text-3xl font-headline font-bold">سراج</span>
              <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1.5 shadow-xl">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
            </Link>
            <h2 className="text-4xl font-headline font-bold leading-tight">ابدأ رحلتك نحو <br /><span className="text-secondary">الاحتراف</span></h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm ml-auto">انضم إلى آلاف الطلاب المبدعين، وابدأ بتعلم المهارات التي يطلبها سوق العمل اليوم.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
