
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  Map as MapIcon, 
  Flag, 
  Lightbulb, 
  Code2, 
  Database, 
  Rocket, 
  Terminal, 
  Layout, 
  Server, 
  Cpu,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Target
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PATHS = [
  {
    id: "fullstack",
    title: "مسار مطور الويب المتكامل",
    icon: <Terminal className="w-8 h-8" />,
    description: "رحلة تبدأ من فهم كيف يعمل الإنترنت حتى بناء منصات عالمية.",
    steps: [
      {
        id: 1,
        title: "نقطة الانطلاق (الأساسيات)",
        description: "سواء كنت طالباً جامعياً أو هاوياً، هنا تبدأ بفهم أساسيات الحاسوب وكيفية عمل الويب والبروتوكولات.",
        icon: <Lightbulb className="w-6 h-6" />,
        level: "بداية الرحلة"
      },
      {
        id: 2,
        title: "هندسة الواجهات (Frontend)",
        description: "تعلم HTML5, CSS3 و JavaScript الحديثة. هنا تبني ما يراه المستخدم ويتفاعل معه.",
        icon: <Layout className="w-6 h-6" />,
        level: "مستوى 1"
      },
      {
        id: 3,
        title: "بناء المنطق (React & Next.js)",
        description: "الانتقال إلى إطارات العمل الحديثة لبناء تطبيقات ويب سريعة وديناميكية.",
        icon: <Code2 className="w-6 h-6" />,
        level: "مستوى 2"
      },
      {
        id: 4,
        title: "الخلفية وقواعد البيانات (Backend)",
        description: "تعلم Node.js وكيفية تصميم قواعد البيانات وتأمين البيانات.",
        icon: <Server className="w-6 h-6" />,
        level: "مستوى 3"
      },
      {
        id: 5,
        title: "النشر والاحتراف (DevOps)",
        description: "تعلم رفع مشاريعك على السحابة وإدارتها بشكل احترافي.",
        icon: <Rocket className="w-6 h-6" />,
        level: "الهدف النهائي"
      }
    ]
  },
  {
    id: "ai",
    title: "مسار مهندس الذكاء الاصطناعي",
    icon: <Cpu className="w-8 h-8" />,
    description: "من الرياضيات والمنطق إلى بناء نماذج ذكاء اصطناعي تتنبأ بالمستقبل.",
    steps: [
      {
        id: 1,
        title: "الأساس الرياضي والبرمجي",
        description: "فهم الجبر الخطي والاحتمالات مع إتقان لغة Python كأساس قوي.",
        icon: <Terminal className="w-6 h-6" />,
        level: "بداية الرحلة"
      },
      {
        id: 2,
        title: "معالجة البيانات (Data Science)",
        description: "تعلم كيفية تنظيف وتحليل البيانات الضخمة واستخراج الأنماط.",
        icon: <Database className="w-6 h-6" />,
        level: "مستوى 1"
      },
      {
        id: 3,
        title: "التعلم الآلي (Machine Learning)",
        description: "بناء النماذج الرياضية التي تتعلم من البيانات وتتخذ القرارات.",
        icon: <Sparkles className="w-6 h-6" />,
        level: "مستوى 2"
      },
      {
        id: 4,
        title: "التعلم العميق (Deep Learning)",
        description: "فهم الشبكات العصبية وبناء تطبيقات متقدمة مثل التعرف على الصور.",
        icon: <Cpu className="w-6 h-6" />,
        level: "الهدف النهائي"
      }
    ]
  }
];

export default function LearningPathsPage() {
  const [activePathId, setActivePathId] = useState(PATHS[0].id);
  const activePath = PATHS.find(p => p.id === activePathId) || PATHS[0];

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary/10 text-secondary border-none px-6 py-1.5 rounded-full text-xs font-headline font-bold mb-6">
            خارطة طريقك المهنية
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">
            استكشف <span className="text-secondary">خارطة</span> النجاح
          </h1>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto leading-relaxed">
            لا تضيع وقتك في البحث العشوائي. اختر تخصصك واتبع الخارطة البصرية التي رسمها لك الخبراء للوصول من الصفر إلى الاحتراف العالمي.
          </p>
        </div>
      </section>

      {/* Path Selection Tabs */}
      <section className="py-8 border-y bg-white sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {PATHS.map((path) => (
              <button
                key={path.id}
                onClick={() => setActivePathId(path.id)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-2xl font-headline font-bold transition-all border-2",
                  activePathId === path.id 
                    ? "bg-secondary text-white border-secondary shadow-lg scale-105" 
                    : "bg-white text-primary/60 border-primary/5 hover:border-secondary/30"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
                  activePathId === path.id ? "bg-white/20" : "bg-primary/5"
                )}>
                  {path.icon}
                </div>
                {path.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* The Visual Map */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-headline font-bold text-primary">رحلة {activePath.title}</h2>
            <p className="text-primary/60 max-w-xl mx-auto">{activePath.description}</p>
          </div>

          <div className="relative">
            {/* Visual Line for Desktop */}
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/20 via-secondary to-secondary/20 hidden md:block -translate-x-[-2px]" />

            <div className="space-y-12 md:space-y-24 relative">
              {activePath.steps.map((step, index) => (
                <div key={step.id} className={cn(
                  "flex flex-col md:flex-row items-center gap-8 md:gap-16 relative",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Step Content */}
                  <div className="flex-1 w-full">
                    <div className={cn(
                      "bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow hover:border-secondary/30 transition-all group",
                      index % 2 === 0 ? "text-right" : "md:text-left"
                    )}>
                      <div className={cn(
                        "flex items-center gap-3 mb-4",
                        index % 2 === 0 ? "flex-row" : "md:flex-row-reverse"
                      )}>
                        <Badge className="bg-secondary/10 text-secondary border-none font-bold text-[10px] px-3">
                          {step.level}
                        </Badge>
                        <span className="text-primary/20 font-headline font-bold text-xl">STEP 0{step.id}</span>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Visual Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-20 h-20 bg-white rounded-3xl border-4 border-secondary flex items-center justify-center text-secondary shadow-2xl scale-110 md:scale-125 luxury-shadow">
                      {step.icon}
                    </div>
                    {/* Floating Glow */}
                    <div className="absolute inset-0 bg-secondary blur-2xl opacity-20 -z-10" />
                  </div>

                  {/* Empty space for balance in desktop */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>

            {/* Final Target Node */}
            <div className="mt-20 flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl relative">
                <Target className="w-10 h-10 animate-pulse" />
                <div className="absolute -top-2 -right-2 bg-secondary text-white px-3 py-1 rounded-full text-[10px] font-bold">وصلت للهدف!</div>
              </div>
              <h4 className="mt-6 font-headline font-bold text-primary text-2xl">خبير معتمد</h4>
              <p className="text-primary/40 text-sm mt-2">أنت الآن جاهز لسوق العمل العالمي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Starting Points Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">من أين أبدأ رحلتي؟</h2>
            <p className="text-white/60 max-w-xl mx-auto">المسارات مصممة لتناسب الجميع، اختر الحالة التي تمثلك حالياً.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] space-y-6 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold">أنا طالب جامعي (تخصص تقني)</h3>
              <p className="text-white/70 leading-relaxed">
                ركز على سد الفجوة بين الأكاديميا وسوق العمل. خارطة الطريق ستساعدك على تطبيق المفاهيم النظرية في مشاريع حقيقية وربطها بالتقنيات الحديثة.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/60"><Flag className="w-4 h-4 text-secondary" /> البدء من مستوى 2 في المسار</li>
                <li className="flex items-center gap-3 text-sm text-white/60"><Flag className="w-4 h-4 text-secondary" /> التركيز على هندسة البرمجيات</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] space-y-6 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-headline font-bold">أنا متعلم ذاتي (من خارج التخصص)</h3>
              <p className="text-white/70 leading-relaxed">
                لا تقلق، خارطة الطريق تبدأ معك من تحت الصفر. سنعلمك أساسيات التفكير المنطقي قبل كتابة أول سطر برمج، لنضمن لك أساساً قوياً كالمحترفين.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/60"><Flag className="w-4 h-4 text-secondary" /> البدء من نقطة الانطلاق الأساسية</li>
                <li className="flex items-center gap-3 text-sm text-white/60"><Flag className="w-4 h-4 text-secondary" /> التركيز على علوم الحاسوب الأساسية</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl text-xl font-headline shadow-2xl gold-glow group">
              احجز جلستك الإرشادية الآن
              <ChevronLeft className="mr-2 w-6 h-6 group-hover:-translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/40 text-sm font-medium">© 2024 سراج - تمكين العقول العربية من خلال المسارات الموجهة.</p>
        </div>
      </footer>
    </main>
  );
}

