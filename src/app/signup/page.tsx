
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
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-0 bg-white rounded-[40px] overflow-hidden luxury-shadow border border-primary/5">
        
        {/* Left Side: Welcome Info (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/30 -z-0" />
          <div className="relative z-10">
            <Link href="/" className="flex items-center gap-3 mb-16">
              <div className="relative w-12 h-12 overflow-hidden rounded-2xl bg-white p-1 shadow-lg">
                <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
              </div>
              <span className="text-3xl font-headline font-bold">سراج</span>
            </Link>
            
            <div className="space-y-8">
              <h2 className="text-5xl font-headline font-bold leading-tight">ابدأ رحلتك نحو <br /><span className="text-secondary">التميز الأكاديمي</span></h2>
              <p className="text-white/60 text-xl leading-relaxed max-w-sm font-medium">
                انضم إلى أكبر مجتمع تعليمي عربي، واحصل على وصول غير محدود للكورسات والكتب والشهادات المعتمدة.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-4">
             <div className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center">
                 <ShieldCheck className="w-7 h-7 text-secondary" />
               </div>
               <p className="text-sm font-bold leading-relaxed">خصوصية بياناتك وسجلاتك التعليمية محمية بالكامل بأحدث المعايير.</p>
             </div>
          </div>
        </div>

        {/* Right Side: Signup Form */}
        <div className="p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
          <div className="max-w-md mx-auto w-full space-y-8">
            <div className="space-y-3 text-center lg:text-right">
              <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">إنشاء حساب جديد</h1>
              <p className="text-primary/40 text-sm md:text-base font-bold">سجل الآن لتبدأ رحلتك التعليمية في سراج</p>
            </div>

            <Button variant="outline" className="w-full h-14 rounded-2xl border-primary/10 font-headline text-sm gap-3 hover:bg-primary/5 transition-all">
              <Chrome className="w-5 h-5 text-red-500" /> البدء بواسطة جوجل
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-primary/5"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-primary/20 font-bold">أو بيانات الحساب</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label className="text-sm font-bold text-primary mr-1">الاسم الكامل</Label>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="مثال: أحمد محمد سالم" 
                    className="h-14 md:h-16 rounded-2xl pr-12 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-right transition-all" 
                    required 
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-bold text-primary mr-1">البريد الإلكتروني</Label>
                <div className="relative">
                  <Input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="h-14 md:h-16 rounded-2xl pr-12 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left transition-all" 
                    required 
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-bold text-primary mr-1">كلمة المرور</Label>
                <div className="relative">
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="h-14 md:h-16 rounded-2xl pr-12 border-primary/10 bg-primary/5 focus-visible:ring-secondary text-left transition-all" 
                    required 
                  />
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse pt-2 px-1">
                <Checkbox id="terms" className="mt-1 rounded-md border-primary/20 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary" required />
                <label htmlFor="terms" className="text-xs text-primary/60 leading-relaxed font-medium">
                  بإنشائك للحساب، أنت توافق على <Link href="/terms" className="text-secondary font-bold hover:underline">شروط الخدمة</Link> و <Link href="/privacy" className="text-secondary font-bold hover:underline">سياسة الخصوصية</Link>.
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 md:h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-headline text-xl shadow-xl gold-glow transition-all active:scale-95 mt-4"
                disabled={isLoading}
              >
                {isLoading ? "جاري الإنشاء..." : "إنشاء الحساب الآن"}
                {!isLoading && <ChevronRight className="mr-2 w-6 h-6 rotate-180" />}
              </Button>
            </form>

            <p className="text-center text-sm md:text-base text-primary/60 font-medium pb-2">
              لديك حساب بالفعل؟{" "}
              <Link href="/login" className="text-secondary font-bold hover:underline">تسجيل الدخول</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
