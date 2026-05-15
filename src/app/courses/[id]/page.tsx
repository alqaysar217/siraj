
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  Clock, 
  User, 
  Play, 
  FileText, 
  CheckCircle2, 
  Globe, 
  GraduationCap, 
  MessageCircle, 
  BookOpen, 
  HelpCircle, 
  Zap,
  Info,
  Users,
  StarHalf
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export default function CourseDetailPage() {
  const { id } = useParams();
  const courseImage = PlaceHolderImages.find(img => img.id === 'web-dev-course');
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      {/* 1. غلاف الدورة */}
      <div className="pt-[72px]">
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-primary/5 rounded-b-[5px]">
          {courseImage?.imageUrl && (
            <Image 
              src={courseImage.imageUrl} 
              alt="Course Cover" 
              fill 
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>

      <div className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl mt-6">
          
          {/* 2. اسم الكورس */}
          <div className="mb-6">
            <h1 className="text-2xl lg:text-4xl font-headline font-bold text-primary leading-tight">تطوير الويب الشامل - Full Stack Web Development</h1>
          </div>

          {/* 3. المجال والمستوى والتقييم */}
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-primary/5">
            <Badge className="bg-secondary/10 text-secondary border-none font-headline text-xs px-3 py-1">برمجة</Badge>
            <Badge className="bg-primary/5 text-primary/60 border-none font-headline text-xs px-3 py-1">مستوى مبتدئ</Badge>
            <div className="flex items-center gap-1 text-secondary mr-auto">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-lg">4.9</span>
              <span className="text-primary/40 text-[10px] mr-1">(1,240 تقييم)</span>
            </div>
          </div>

          {/* 4. إحصائيات سريعة (أيقونة + رقم + اسم) */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            <CompactStat icon={<Clock className="w-4 h-4" />} value="45 ساعة" />
            <CompactStat icon={<BookOpen className="w-4 h-4" />} value="45 درس" />
            <CompactStat icon={<Users className="w-4 h-4" />} value="2,500 طالب" />
          </div>

          {/* 5. قسم السعر والمميزات الفنية */}
          <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow mb-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-2">
                 <div className="flex flex-col">
                    <span className="text-primary/30 line-through text-xs">60,000 ر.ي</span>
                    <span className="text-3xl font-headline font-bold text-secondary">45,000 ر.ي</span>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 md:border-r md:pr-6 border-primary/5">
                <MiniStat icon={<GraduationCap className="w-4 h-4" />} label="الشهادة" value="معتمدة" />
                <MiniStat icon={<HelpCircle className="w-4 h-4" />} label="الأسئلة" value="120 سؤال" />
                <MiniStat icon={<Globe className="w-4 h-4" />} label="اللغة" value="العربية" />
                <MiniStat icon={<Zap className="w-4 h-4" />} label="الدعم" value="مباشر" />
              </div>
            </div>
          </div>

          {/* 6. التبويبات مع الأيقونات */}
          <Tabs defaultValue="overview" className="w-full" dir="rtl">
            <TabsList className="bg-white border p-1 rounded-2xl h-auto flex-wrap justify-start mb-8 luxury-shadow w-full">
              <TabsTrigger value="overview" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline transition-all text-xs gap-2">
                <Info className="w-4 h-4" />
                نظرة عامة
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline transition-all text-xs gap-2">
                <FileText className="w-4 h-4" />
                المنهج
              </TabsTrigger>
              <TabsTrigger value="instructor" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline transition-all text-xs gap-2">
                <User className="w-4 h-4" />
                المدرب
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline transition-all text-xs gap-2">
                <StarHalf className="w-4 h-4" />
                التقييمات
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow space-y-4">
                <h3 className="text-xl font-headline font-bold text-primary">ماذا ستتعلم؟</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "بناء واجهات مستخدم متجاوبة باستخدام HTML و CSS",
                    "إتقان لغة JavaScript وبرمجة المنطق البرمجي",
                    "بناء تطبيقات ويب قوية باستخدام React.js",
                    "تطوير الخوادم وقواعد البيانات باستخدام Node.js"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-1">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-primary/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="animate-in fade-in slide-in-from-bottom-2">
              <Accordion type="single" collapsible className="space-y-4">
                <ModuleItem title="الوحدة الأولى: أساسيات الويب" lessons={12} duration="8 ساعات" />
                <ModuleItem title="الوحدة الثانية: لغة JavaScript" lessons={15} duration="12 ساعة" />
              </Accordion>
            </TabsContent>

            <TabsContent value="instructor" className="animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-right">
                <div className="relative w-24 h-24 shrink-0 shadow-lg">
                  {instructorImage?.imageUrl && (
                    <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover rounded-2xl" />
                  )}
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="text-xl font-headline font-bold text-primary">م. أحمد علي</h4>
                    <p className="text-secondary font-medium text-sm">Senior Full Stack Developer</p>
                  </div>
                  <p className="text-primary/60 text-xs leading-relaxed">
                    خبير في تطوير الويب بخبرة تزيد عن 10 سنوات. قام بتدريب آلاف الطلاب العرب على أحدث التقنيات.
                  </p>
                  <Button className="rounded-xl bg-primary text-white font-headline gap-2 h-10 px-6 text-xs">
                    <MessageCircle className="w-4 h-4" />
                    تواصل مع المدرب
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <ReviewItem name="علي عبدالله" rating={5} comment="كورس جبار ومفيد جداً، الشرح مبسط والمشاريع العملية رائعة." date="منذ شهر" />
                <ReviewItem name="سارة محمد" rating={4} comment="المحتوى غني جداً، المدرب يشرح بالتفصيل الممتاز للمبتدئين." date="منذ أسبوعين" />
              </div>
            </TabsContent>
          </Tabs>

          {/* 7. قسم الدعوة للانضمام النهائي (حيث يظهر زر الاشتراك بعد القراءة) */}
          <div className="mt-16 bg-primary rounded-[32px] p-8 md:p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-4">هل أنت جاهز للبدء؟</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">سجل الآن واحصل على وصول كامل لجميع دروس الكورس، الملفات المصدرية، والشهادة المعتمدة.</p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-headline shadow-2xl gold-glow w-full sm:w-auto">انضم للكورس الآن</Button>
          </div>

        </div>
      </div>
    </main>
  );
}

function CompactStat({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="bg-white p-3 rounded-xl border border-primary/5 luxury-shadow flex items-center justify-center gap-2 text-center">
      <div className="text-secondary">{icon}</div>
      <span className="text-[11px] font-headline font-bold text-primary">{value}</span>
    </div>
  );
}

function MiniStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/5">
      <div className="text-secondary">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[8px] text-primary/40 font-bold leading-none mb-0.5">{label}</span>
        <span className="text-[10px] font-headline font-bold text-primary leading-none">{value}</span>
      </div>
    </div>
  );
}

function ModuleItem({ title, lessons, duration }: { title: string; lessons: number; duration: string }) {
  return (
    <AccordionItem value={title} className="bg-white border rounded-2xl px-4 mb-3 border-primary/5 luxury-shadow overflow-hidden">
      <AccordionTrigger className="hover:no-underline py-4">
        <div className="flex items-center justify-between w-full text-right">
          <div>
            <span className="font-headline font-bold text-primary text-base">{title}</span>
            <div className="flex gap-3 mt-0.5">
              <span className="text-[10px] text-primary/40">{lessons} درس</span>
              <span className="text-[10px] text-primary/40">{duration}</span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-4">
        <ul className="space-y-2">
          {[1, 2].map((i) => (
            <li key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-2">
                <Play className="w-3 h-3 text-secondary fill-current" />
                <span className="text-primary/70 text-xs">الدرس {i}: مقدمة في المسار التعليمي</span>
              </div>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function ReviewItem({ name, rating, comment, date }: { name: string; rating: number; comment: string; date: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-primary/5 luxury-shadow space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary font-bold text-base">
            {name[0]}
          </div>
          <div>
            <p className="text-xs font-bold text-primary">{name}</p>
            <p className="text-[9px] text-primary/40">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-[11px] text-primary/70 leading-relaxed italic">"{comment}"</p>
    </div>
  );
}
