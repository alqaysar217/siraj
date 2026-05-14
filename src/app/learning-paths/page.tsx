
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  ChevronLeft, 
  Clock, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  ArrowLeft,
  Terminal,
  Database,
  ShieldCheck,
  Palette
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PATHS = [
  {
    id: "path-web",
    title: "مطور الويب الشامل (Full Stack)",
    description: "تعلم بناء تطبيقات الويب من الصفر حتى الاحتراف، بدءاً من الواجهات الأمامية وصولاً إلى قواعد البيانات.",
    coursesCount: 8,
    duration: "6 أشهر",
    level: "من مبتدئ إلى محترف",
    icon: <Terminal className="w-6 h-6" />,
    color: "bg-blue-500",
    image: "web-dev-course",
    steps: ["أساسيات الويب", "احتراف React", "برمجة الـ Backend", "نشر المشاريع"]
  },
  {
    id: "path-data",
    title: "خبير تحليل البيانات",
    description: "استخلص النتائج من البيانات الضخمة باستخدام Python و SQL وأدوات التصور البياني الحديثة.",
    coursesCount: 6,
    duration: "4 أشهر",
    level: "متوسط",
    icon: <Database className="w-6 h-6" />,
    color: "bg-green-500",
    image: "hero-bg",
    steps: ["مقدمة في البيانات", "إتقان SQL", "التحليل الإحصائي", "Machine Learning"]
  },
  {
    id: "path-cyber",
    title: "أخصائي الأمن السيبراني",
    description: "احمِ الأنظمة والشبكات من الهجمات الإلكترونية وتعلم فنون التحقيق الرقمي والاختراق الأخلاقي.",
    coursesCount: 10,
    duration: "8 أشهر",
    level: "متقدم",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "bg-red-500",
    image: "cyber-course",
    steps: ["أمن الشبكات", "التشفير", "الاختراق الأخلاقي", "الاستجابة للحوادث"]
  },
  {
    id: "path-design",
    title: "مصمم واجهات المستخدم UI/UX",
    description: "انتقل من فهم سيكولوجية المستخدم إلى تصميم واجهات مذهلة وتجارب استخدام سلسة.",
    coursesCount: 5,
    duration: "3 أشهر",
    level: "مبتدئ",
    icon: <Palette className="w-6 h-6" />,
    color: "bg-purple-500",
    image: "design-course",
    steps: ["مبادئ التصميم", "أبحاث المستخدم", "تصميم النماذج", "اختبار الاستخدام"]
  }
];

export default function LearningPathsPage() {
  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(217,138,30,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 px-4 py-1 text-sm font-headline">
              خارطة طريقك للنجاح
            </Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6 leading-tight">
              المسارات <span className="text-secondary">التعليمية</span>
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed mb-8">
              لا تبحث عن الكورسات بشكل عشوائي. لقد صممنا لك مسارات تعليمية متكاملة تأخذك خطوة بخطوة من البداية وحتى الحصول على وظيفة أحلامك.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>مناهج معتمدة</span>
              </div>
              <div className="flex items-center gap-2 text-primary/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>مشاريع تطبيقية</span>
              </div>
              <div className="flex items-center gap-2 text-primary/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>شهادات احترافية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paths Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {PATHS.map((path) => (
              <PathCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Info Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-headline font-bold text-primary mb-6">كيف تعمل المسارات؟</h2>
          <div className="grid gap-6 text-right">
            <div className="bg-white p-6 rounded-2xl border border-primary/5 luxury-shadow">
              <h4 className="font-bold text-primary mb-2">1. اختر تخصصك</h4>
              <p className="text-sm text-primary/60">حدد المجال الذي ترغب في احترافه بناءً على ميولك الشخصية أو متطلبات سوق العمل.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/5 luxury-shadow">
              <h4 className="font-bold text-primary mb-2">2. تدرج في المستويات</h4>
              <p className="text-sm text-primary/60">كل مسار مقسم إلى مراحل، من الأساسيات البسيطة وصولاً إلى التقنيات المتقدمة.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-primary/5 luxury-shadow">
              <h4 className="font-bold text-primary mb-2">3. ابنِ معرض أعمالك</h4>
              <p className="text-sm text-primary/60">خلال المسار ستقوم بإنجاز مشاريع حقيقية تضاف إلى معرض أعمالك (Portfolio) لتبهر أصحاب العمل.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">© 2024 سراج - جميع الحقوق محفوظة لمنصة سراج.</p>
        </div>
      </footer>
    </main>
  );
}

function PathCard({ path }: { path: any }) {
  const pathImage = PlaceHolderImages.find(img => img.id === path.image);

  return (
    <div className="group bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500 flex flex-col md:flex-row">
      {/* Visual Part */}
      <div className="relative md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden">
        {pathImage?.imageUrl && (
          <Image 
            src={pathImage.imageUrl} 
            alt={path.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl mb-2 md:mb-3">
            {path.icon}
          </div>
          <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20 text-[10px] md:text-xs">
            {path.level}
          </Badge>
        </div>
      </div>

      {/* Content Part */}
      <div className="p-5 md:p-8 md:w-3/5 flex flex-col">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex gap-3 md:gap-4">
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-primary/40">
              <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              <span>{path.coursesCount} كورسات</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-primary/40">
              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-secondary" />
              <span>{path.duration}</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-headline font-bold text-primary mb-2 md:mb-3 group-hover:text-secondary transition-colors">
          {path.title}
        </h3>
        <p className="text-xs md:text-sm text-primary/60 leading-relaxed mb-4 md:mb-6 line-clamp-2">
          {path.description}
        </p>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          <p className="text-[9px] md:text-[10px] font-bold text-primary/30 uppercase tracking-widest">خطة المسار</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {path.steps.map((step: string, i: number) => (
              <div key={i} className="flex items-center gap-1.5 md:gap-2 bg-primary/5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-primary/5">
                <span className="text-[9px] md:text-[10px] w-3.5 h-3.5 md:w-4 md:h-4 bg-secondary text-white rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-[10px] md:text-xs text-primary/70 font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 md:pt-6 border-t border-primary/5">
          <Button size="sm" className="md:size-default rounded-xl md:rounded-2xl bg-primary hover:bg-secondary text-white px-4 md:px-6 font-headline gap-2 group/btn shadow-lg text-xs md:text-sm">
            ابدأ المسار
            <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:-translate-x-1" />
          </Button>
          <div className="flex items-center gap-1 text-secondary">
             <Award className="w-4 h-4 md:w-5 md:h-5" />
             <span className="text-[10px] md:text-xs font-bold">شهادة معتمدة</span>
          </div>
        </div>
      </div>
    </div>
  );
}
