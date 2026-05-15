
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Users, 
  Wallet, 
  ShieldCheck, 
  Play, 
  ChevronLeft, 
  HelpCircle, 
  Star, 
  ArrowLeft,
  CheckCircle2,
  FileVideo,
  MessagesSquare,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function InstructorsLandingPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden bg-primary/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(217,138,30,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-1.5 rounded-full text-sm font-headline">
                شارك علمك.. وابنِ مستقبلك
              </Badge>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">
                كن جزءاً من <span className="text-secondary">نخبة مدربي</span> سراج التعليمية
              </h1>
              <p className="text-lg text-primary/60 leading-relaxed max-w-xl">
                هل تمتلك الخبرة في مجال تقني أو إبداعي؟ انضم إلينا اليوم وشارك معرفتك مع آلاف الطلاب الطموحين في الوطن العربي، وحقق عوائد مالية مجزية.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-headline shadow-lg gold-glow group">
                  تقدم بطلب الانضمام
                  <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/10 bg-white px-8 h-14 rounded-2xl text-lg font-headline">
                  كيف يعمل النظام؟
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 border-t border-primary/5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-bold text-primary/70">نظام أرباح عادل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-bold text-primary/70">دعم فني متكامل</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-secondary/10 rounded-[40px] rotate-6" />
                <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-primary/5 p-4">
                  <div className="relative h-full w-full rounded-[30px] overflow-hidden">
                    {heroImage?.imageUrl && (
                      <Image src={heroImage.imageUrl} alt="Instructor" fill className="object-cover" />
                    )}
                    <div className="absolute bottom-6 right-6 left-6 p-6 bg-primary/90 backdrop-blur-md rounded-2xl text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                          <Rocket className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-headline font-bold">ابدأ رحلتك اليوم</p>
                          <p className="text-xs text-white/60">أكثر من 500 مدرب ناجح انضموا إلينا</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Siraj? */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-6">لماذا تختار منصة سراج؟</h2>
            <p className="text-primary/60">نحن لا نقدم مجرد منصة، نحن نقدم لك شريكاً حقيقياً لنجاحك التعليمي والمالي.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Users className="w-8 h-8" />} 
              title="وصول لجمهور واسع" 
              description="دروسك ستصل لآلاف الطلاب من مختلف الدول العربية المهتمين بمجالك."
            />
            <BenefitCard 
              icon={<Wallet className="w-8 h-8" />} 
              title="عوائد مالية مجزية" 
              description="نقدم أفضل نسب توزيع للأرباح في المنطقة، مع شفافية تامة في التقارير."
            />
            <BenefitCard 
              icon={<ShieldCheck className="w-8 h-8" />} 
              title="حماية حقوقك" 
              description="نظام تقني متطور لحماية محتواك التعليمي من القرصنة وضمان حقوقك الملكية."
            />
            <BenefitCard 
              icon={<FileVideo className="w-8 h-8" />} 
              title="أدوات إنتاج حديثة" 
              description="نوفر لك أدوات وموارد لمساعدتك في إنتاج فيديوهات تعليمية بجودة عالمية."
            />
            <BenefitCard 
              icon={<MessagesSquare className="w-8 h-8" />} 
              title="مجتمع مدربين" 
              description="انضم لمجتمع خاص بالخبراء لتبادل الخبرات وتطوير أساليبك التعليمية."
            />
            <BenefitCard 
              icon={<Globe className="w-8 h-8" />} 
              title="دعم فني 24/7" 
              description="فريق دعم مخصص لمساعدتك في أي وقت لحل المشاكل التقنية أو التعليمية."
            />
          </div>
        </div>
      </section>

      {/* Steps to Join */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-primary mb-16 text-center">خطوات الانضمام للمنصة</h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 hidden md:block -translate-y-1/2 -z-10" />
            <StepItem number="1" title="تقديم الطلب" description="املأ استمارة الانضمام وأرفق سيرتك الذاتية ونماذج من عملك." />
            <StepItem number="2" title="المراجعة" description="سيقوم فريقنا بمراجعة طلبك والتواصل معك خلال 48 ساعة." />
            <StepItem number="3" title="إنتاج المحتوى" description="ابدأ في تسجيل دورتك التدريبية باستخدام معايير الجودة لدينا." />
            <StepItem number="4" title="النشر والربح" description="بمجرد مراجعة الكورس، سيتم نشره لتبدأ في حصد الأرباح." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-headline font-bold text-primary mb-4">الأسئلة الشائعة للمدربين</h2>
            <p className="text-primary/60">كل ما تريد معرفته عن نظام العمل في سراج.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem 
              question="كيف يتم احتساب الأرباح وتوزيعها؟" 
              answer="تعتمد الأرباح على عدد الطلاب المسجلين في دورتك. نحن نستخدم نظام عمولة شفاف يضمن للمدرب النسبة الأكبر من المبيعات، ويتم صرف المستحقات شهرياً عبر وسائل الدفع المحلية والعالمية."
            />
            <FaqItem 
              question="هل يجب أن أمتلك استوديو تصوير خاص؟" 
              answer="ليس بالضرورة، يمكنك البدء بأدوات بسيطة مثل ميكروفون جيد وبرنامج تسجيل شاشة. نحن نوفر دليلاً كاملاً لكيفية التسجيل بجودة احترافية بأقل التكاليف."
            />
            <FaqItem 
              question="من يمتلك حقوق الدورة التدريبية؟" 
              answer="أنت تمتلك حقوق الملكية الفكرية لمحتواك بالكامل. سراج تحصل على ترخيص لنشر وتوزيع المحتوى على منصتها فقط."
            />
            <FaqItem 
              question="هل هناك دعم في وضع المنهج الدراسي؟" 
              answer="نعم، فريقنا الأكاديمي سيساعدك في هيكلة دورتك التدريبية للتأكد من أنها تحقق أفضل نتائج تعليمية للطلاب."
            />
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-10" />
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">هل أنت مستعد لنقل خبرتك للعالم؟</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">سواء كنت مبرمجاً، مصمماً، محاسباً أو خبيراً في أي مجال، سراج هي المكان الأنسب لتنمو وتزدهر.</p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl text-xl font-headline shadow-2xl gold-glow transition-transform active:scale-95">
              سجل كمدرب الآن
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/40 text-sm">© 2024 سراج - بوابة المدربين العرب. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-primary/5 luxury-shadow hover:translate-y-[-5px] transition-all duration-300">
      <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-headline font-bold text-primary mb-4">{title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed">{description}</p>
    </div>
  );
}

function StepItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow text-center space-y-4 relative z-10">
      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto font-headline font-bold text-xl shadow-lg">
        {number}
      </div>
      <h4 className="font-headline font-bold text-primary text-lg">{title}</h4>
      <p className="text-xs text-primary/60 leading-relaxed">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <AccordionItem value={question} className="bg-white border rounded-2xl px-6 border-primary/5 luxury-shadow">
      <AccordionTrigger className="font-headline font-bold text-primary hover:no-underline py-6">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-primary/60 leading-relaxed pb-6">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}
