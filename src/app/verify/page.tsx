
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Search, QrCode, Camera, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Image from "next/image";

export default function VerifyCertificate() {
  const [certId, setCertId] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleVerify = () => {
    if (!certId) return;
    setStatus('loading');
    // Mocking a lookup
    setTimeout(() => {
      if (certId === "SIRAJ-123") setStatus('success');
      else setStatus('error');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      {/* Banner Section - Exact 3:1 ratio (1920/640) */}
      <section className="pt-[92px] w-full overflow-hidden bg-white">
        <div className="relative w-full aspect-[3/1]">
           <Image 
             src="/Verify.png" 
             alt="Verify Certificates Banner" 
             fill 
             className="object-cover object-top"
             priority
           />
        </div>
      </section>

      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="rounded-[32px] luxury-shadow border-primary/5 overflow-hidden bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-headline font-bold text-primary">التحقق من الشهادات</h1>
                    <p className="text-sm text-primary/60 leading-relaxed font-bold">
                      أدخل رقم الشهادة أو استخدم الـ QR للتأكد من صحة الاعتماد الصادر من منصة سراج.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary mr-1">رقم الشهادة</label>
                    <div className="relative">
                      <Input 
                        placeholder="مثال: SIRAJ-CERT-2024-XXXX" 
                        className="h-14 rounded-2xl pr-12 text-lg font-headline border-primary/10 bg-primary/5 focus-visible:ring-secondary"
                        value={certId}
                        onChange={(e) => setCertId(e.target.value)}
                      />
                      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
                    </div>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-headline text-lg shadow-lg gold-glow"
                    onClick={handleVerify}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : "تحقق الآن"}
                  </Button>

                  <div className="flex items-center gap-4 py-4">
                    <div className="h-px flex-1 bg-primary/10" />
                    <span className="text-[10px] text-primary/30 font-bold uppercase">أو من خلال</span>
                    <div className="h-px flex-1 bg-primary/10" />
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1 h-14 rounded-2xl gap-2 font-headline border-primary/10">
                      <QrCode className="w-5 h-5 text-secondary" />
                      رفع QR
                    </Button>
                    <Button variant="outline" className="flex-1 h-14 rounded-2xl gap-2 font-headline border-primary/10">
                      <Camera className="w-5 h-5 text-secondary" />
                      فتح الكاميرا
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-square bg-primary/5 rounded-[32px] flex items-center justify-center border-2 border-dashed border-primary/10">
                  {status === 'idle' && (
                    <div className="text-center space-y-4 px-12">
                      <QrCode className="w-16 h-16 text-primary/10 mx-auto" />
                      <p className="text-[11px] text-primary/30 font-bold">نتائج التحقق ستظهر هنا بمجرد إدخال البيانات</p>
                    </div>
                  )}

                  {status === 'loading' && (
                    <div className="text-center space-y-4">
                       <Loader2 className="w-12 h-12 text-secondary animate-spin mx-auto" />
                       <p className="text-secondary font-headline font-bold">جاري البحث في قاعدة البيانات...</p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="p-8 w-full animate-in zoom-in-95 duration-300">
                       <div className="bg-white border border-secondary/20 rounded-3xl p-8 text-center space-y-6 luxury-shadow">
                          <CheckCircle2 className="w-16 h-16 text-secondary mx-auto" />
                          <div className="space-y-1">
                            <p className="text-secondary font-bold text-xl">شهادة معتمدة</p>
                            <p className="text-primary/60 text-[10px] font-bold">تم التحقق من صحة هذه الشهادة</p>
                          </div>
                          <div className="space-y-3 pt-4 border-t border-primary/5 text-right">
                            <InfoLine label="اسم الطالب" value="محمد عبدالله سالم" />
                            <InfoLine label="اسم الكورس" value="تطوير الويب الشامل" />
                            <InfoLine label="تاريخ الإصدار" value="15 مايو 2024" />
                            <InfoLine label="رقم الاعتماد" value="SIRAJ-CERT-2024-0012" />
                          </div>
                       </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="text-center space-y-6 p-8 animate-in zoom-in-95 duration-300">
                       <XCircle className="w-16 h-16 text-destructive mx-auto" />
                       <div className="space-y-1">
                          <p className="text-destructive font-bold text-xl">عذراً، رقم غير صحيح</p>
                          <p className="text-primary/60 text-[11px] font-bold">لم نتمكن من العثور على أي شهادة مرتبطة بهذا الرقم في سجلاتنا.</p>
                       </div>
                       <Button variant="ghost" className="text-secondary font-headline" onClick={() => setStatus('idle')}>حاول مرة أخرى</Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-primary/40 font-bold">{label}:</span>
      <span className="text-primary font-bold">{value}</span>
    </div>
  );
}
