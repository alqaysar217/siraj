
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Lock, Chrome, ChevronRight, ShieldCheck } from "lucide-react";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 relative overflow-hidden" dir="rtl">
      {/* Smoky Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-secondary/15 blur-[180px] rounded-full opacity-40 animate-pulse duration-[12s]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-primary/20 blur-[180px] rounded-full opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,138,30,0.05),transparent_60%)]" />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-0 bg-white rounded-[48px] overflow-hidden luxury-shadow border border-primary/5 min-h-[800px] relative z-10">
        
        {/* Left Side: Form (Flipped for Signup) */}
        <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative order-2 lg:order-1">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-10">
             <div className="relative w-16 h-16 overflow-hidden rounded-2xl bg-primary/5 p-2 shadow-inner">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
             </div>
          </div>

          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="space-y-4 text-center lg:text-right">
              {/* Desktop Logo within form side */}
              <div className="hidden lg:flex justify-end mb-6">
                <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-primary/5 p-2 border border-primary/5">
                  <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary">انضم إلينا</h1>
              <p className="text-primary/40 text-base md:text-lg font-bold">ابدأ رحلتك التعليمية الفريدة اليوم</p>
            </div>

            <div className="space-y-6">
              <Button variant="outline" className="w-full h-16 rounded-[24px] border-primary/10 font-headline text-base gap-4 hover:bg-primary/5 transition-all shadow-sm">
                <Chrome className="w-6 h-6 text-red-500" /> البدء بواسطة جوجل
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-primary/5"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-6 text-primary/20 font-bold tracking-widest">بيانات الحساب</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2.5">
                  <Label className="text-sm font-bold text-primary mr-2">الاسم الكامل</Label>
                  <div className="relative group">
                    <Input 
                      type="text" 
                      placeholder="أحمد محمد" 
                      className="h-16 rounded-[20px] pr-14 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-right transition-all text-lg" 
                      required 
                    />
                    <User className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 w-6 h-6 group-focus-within:text-secondary transition-colors" />
                  </div>
                </div>

                <div className="space-y-2.5">
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

                <div className="space-y-2.5">
                  <Label className="text-sm font-bold text-primary mr-2">كلمة المرور</Label>
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

                <div className="flex items-start space-x-3 space-x-reverse pt-2 px-1">
                  <Checkbox id="terms" className="mt-1 rounded-md border-primary/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" required />
                  <label htmlFor="terms" className="text-xs text-primary/60 leading-relaxed font-medium">
                    أوافق على <Link href="#" className="text-secondary font-bold hover:underline">شروط الخدمة</Link> و <Link href="#" className="text-secondary font-bold hover:underline">سياسة الخصوصية</Link> للمنصة.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-[24px] font-headline text-xl shadow-2xl gold-glow transition-all active:scale-95 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? "جاري إنشاء الحساب..." : "تأكيد وإنشاء الحساب"}
                  {!isLoading && <ChevronRight className="mr-2 w-6 h-6 rotate-180" />}
                </Button>
              </form>
            </div>

            <p className="text-center text-base text-primary/60 font-medium">
              لديك حساب بالفعل؟{" "}
              <Link href="/login" className="text-secondary font-bold hover:underline transition-all hover:pr-1">تسجيل الدخول</Link>
            </p>
          </div>
        </div>

        {/* Right Side: Info (Hidden on Mobile, Flipped for Signup) */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-primary text-white relative order-1 lg:order-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-primary via-primary/95 to-secondary/30 -z-0" />
          
          {/* Internal Smoky Gradient */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-secondary/15 blur-[90px] rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 blur-[90px] rounded-full" />

          <div className="relative z-10 text-right">
            <Link href="/" className="flex items-center justify-end gap-4 mb-20 group">
              <span className="text-4xl font-headline font-bold tracking-tight">سراج</span>
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl transition-transform group-hover:scale-105">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
            </Link>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-headline font-bold leading-[1.2]">
                ابدأ رحلتك نحو <br />
                <span className="text-secondary">الاحتراف</span>
              </h2>
              <p className="text-white/60 text-xl leading-relaxed max-w-sm ml-auto font-medium">
                انضم إلى أكبر مجتمع تعليمي عربي، واحصل على وصول غير محدود للكورسات والكتب والشهادات المعتمدة عالمياً.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-6">
             <div className="flex items-center gap-5 p-6 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-md luxury-shadow">
               <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0">
                 <ShieldCheck className="w-8 h-8 text-secondary" />
               </div>
               <p className="text-sm font-bold leading-relaxed">خصوصية بياناتك وسجلاتك التعليمية محمية بالكامل بأحدث المعايير العالمية.</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
