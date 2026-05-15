
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
  ShieldCheck,
  Calendar
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
      
      {/* 1. تصميم الجوال - كما هو تماماً (مخفي في اللابتوب) */}
      <div className="md:hidden">
        <div className="pt-[72px]">
          <div className="relative w-full aspect-video overflow-hidden bg-primary/5 rounded-[5px]">
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

        <div className="container mx-auto px-4 mt-6">
          <div className="mb-4">
            <h1 className="text-2xl font-headline font-bold text-primary leading-tight">تطوير الويب الشامل - Full Stack Web Development</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-primary/5">
            <Badge className="bg-secondary/10 text-secondary border-none font-headline text-xs px-3 py-1">برمجة</Badge>
            <Badge className="bg-primary/5 text-primary/60 border-none font-headline text-xs px-3 py-1">مستوى مبتدئ</Badge>
            <div className="flex items-center gap-1 text-secondary mr-auto">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-lg">4.9</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-8">
            <CompactStat icon={<Clock className="w-4 h-4" />} value="45 ساعة" />
            <CompactStat icon={<BookOpen className="w-4 h-4" />} value="45 درس" />
            <CompactStat icon={<Users className="w-4 h-4" />} value="2,500 طالب" />
          </div>

          <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow mb-10">
            <div className="grid grid-cols-1 gap-6 items-center">
              <div className="space-y-2">
                 <div className="flex flex-col">
                    <span className="text-primary/30 line-through text-xs">60,000 ر.ي</span>
                    <span className="text-3xl font-headline font-bold text-secondary">45,000 ر.ي</span>
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <MiniStat icon={<GraduationCap className="w-4 h-4" />} label="الشهادة" value="معتمدة" />
                <MiniStat icon={<HelpCircle className="w-4 h-4" />} label="الأسئلة" value="120 سؤال" />
                <MiniStat icon={<Globe className="w-4 h-4" />} label="اللغة" value="العربية" />
                <MiniStat icon={<Zap className="w-4 h-4" />} label="الدعم" value="مباشر" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. تصميم اللابتوب - عمودين (مخفي في الجوال) */}
      <div className="hidden md:block pt-32 pb-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-12 items-start">
            
            {/* العمود الأول: بيانات الكورس والإحصائيات */}
            <div className="col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge className="bg-secondary/10 text-secondary border-none font-headline px-4 py-1">برمجة</Badge>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-xl">4.9</span>
                    <span className="text-primary/40 text-xs mr-1">(1,240 تقييم)</span>
                  </div>
                </div>
                <h1 className="text-5xl font-headline font-bold text-primary leading-tight">تطوير الويب الشامل - Full Stack Web Development</h1>
                <p className="text-lg text-primary/60 max-w-2xl">كن مطور ويب محترف من الصفر. تعلم بناء تطبيقات ويب متكاملة باستخدام أحدث التقنيات العالمية في مسار تعليمي مكثف.</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <DesktopStatCard icon={<Clock className="w-6 h-6" />} label="مدة الكورس" value="45 ساعة" />
                <DesktopStatCard icon={<BookOpen className="w-6 h-6" />} label="الدروس" value="45 درس" />
                <DesktopStatCard icon={<Users className="w-6 h-6" />} label="الطلاب" value="2,500 طالب" />
                <DesktopStatCard icon={<GraduationCap className="w-6 h-6" />} label="الشهادة" value="معتمدة" />
              </div>

              <div className="grid grid-cols-3 gap-6 bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-primary/40 font-bold">بنك الأسئلة</p>
                    <p className="font-headline font-bold text-primary">120 سؤال تدريبي</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-r border-primary/5 pr-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-primary/40 font-bold">اللغة</p>
                    <p className="font-headline font-bold text-primary">العربية</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border-r border-primary/5 pr-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-primary/40 font-bold">الدعم الفني</p>
                    <p className="font-headline font-bold text-primary">مباشر 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* العمود الثاني: البطاقة الجانبية العائمة */}
            <div className="col-span-4 sticky top-32">
              <div className="bg-white rounded-[32px] overflow-hidden border border-primary/5 luxury-shadow p-6 space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  {courseImage?.imageUrl && (
                    <Image src={courseImage.imageUrl} alt="Course" fill className="object-cover" />
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-primary/30 line-through text-sm">60,000 ر.ي</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-headline font-bold text-secondary">45,000</span>
                      <span className="text-secondary font-bold">ر.ي</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 rounded-2xl text-xl font-headline shadow-xl gold-glow">انضم للكورس الآن</Button>
                  </div>

                  <div className="pt-6 border-t border-primary/5 space-y-3">
                    <p className="text-xs font-bold text-primary">يتضمن الكورس:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-xs text-primary/70">
                        <Calendar className="w-4 h-4 text-secondary" /> وصول للمحتوى لفترة محدودة
                      </li>
                      <li className="flex items-center gap-2 text-xs text-primary/70">
                        <FileText className="w-4 h-4 text-secondary" /> مصادر وملفات قابلة للتحميل
                      </li>
                      <li className="flex items-center gap-2 text-xs text-primary/70">
                        <ShieldCheck className="w-4 h-4 text-secondary" /> شهادة إتمام معتمدة
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. التبويبات والمحتوى التفصيلي (مشترك - يظهر أسفل العمودين في اللابتوب) */}
      <div className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl md:mt-12">
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
                <Star className="w-4 h-4" />
                التقييمات
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-6 md:p-10 rounded-[24px] border border-primary/5 luxury-shadow space-y-6">
                <h3 className="text-xl md:text-2xl font-headline font-bold text-primary">ماذا ستتعلم في هذا الكورس؟</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "بناء واجهات مستخدم متجاوبة باستخدام HTML و CSS",
                    "إتقان لغة JavaScript وبرمجة المنطق البرمجي",
                    "بناء تطبيقات ويب قوية باستخدام React.js",
                    "تطوير الخوادم وقواعد البيانات باستخدام Node.js",
                    "فهم دورة حياة تطوير البرمجيات الاحترافية",
                    "العمل على مشاريع حقيقية ورفعها على GitHub"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 bg-primary/5 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="text-primary/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="animate-in fade-in slide-in-from-bottom-2">
              <Accordion type="single" collapsible className="space-y-4">
                <ModuleItem title="الوحدة الأولى: أساسيات الويب والواجهات الأمامية" lessons={12} duration="8 ساعات" />
                <ModuleItem title="الوحدة الثانية: لغة JavaScript من الصفر حتى الاحتراف" lessons={15} duration="12 ساعة" />
                <ModuleItem title="الوحدة الثالثة: بناء تطبيقات React المتقدمة" lessons={10} duration="15 ساعة" />
                <ModuleItem title="الوحدة الرابعة: الـ Backend وقواعد البيانات" lessons={8} duration="10 ساعات" />
              </Accordion>
            </TabsContent>

            <TabsContent value="instructor" className="animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-8 md:p-12 rounded-[24px] border border-primary/5 luxury-shadow flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-right">
                <div className="relative w-32 h-32 shrink-0 shadow-2xl">
                  {instructorImage?.imageUrl && (
                    <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover rounded-3xl" />
                  )}
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h4 className="text-2xl font-headline font-bold text-primary">م. أحمد علي</h4>
                    <p className="text-secondary font-medium">Senior Full Stack Developer & Tech Lead</p>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    خبير في تطوير الويب بخبرة تزيد عن 10 سنوات في كبرى الشركات التقنية. قام بتدريب أكثر من 50,000 طالب عربي على أحدث تقنيات البرمجة والذكاء الاصطناعي.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <Button className="rounded-xl bg-primary text-white font-headline gap-2 h-12 px-8">
                      <MessageCircle className="w-5 h-5" />
                      تواصل مع المدرب
                    </Button>
                    <Button variant="outline" className="rounded-xl border-primary/10 h-12 px-8 font-headline">عرض الملف الشخصي</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ReviewItem name="علي عبدالله" rating={5} comment="كورس جبار ومفيد جداً، الشرح مبسط والمشاريع العملية رائعة جداً." date="منذ شهر" />
                <ReviewItem name="سارة محمد" rating={4} comment="المحتوى غني جداً، المدرب يشرح بالتفصيل الممتاز للمبتدئين." date="منذ أسبوعين" />
                <ReviewItem name="محمد سالم" rating={5} comment="أفضل استثمار قمت به في تعليمي البرمجي حتى الآن." date="منذ 3 أيام" />
                <ReviewItem name="ليلى خالد" rating={5} comment="الدعم الفني والرد على الأسئلة سريع جداً." date="منذ يومين" />
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 bg-primary rounded-[32px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-2xl md:text-4xl font-headline font-bold mb-6">هل أنت جاهز لتغيير مسارك المهني؟</h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">سجل الآن واحصل على وصول كامل لجميع دروس الكورس، الملفات المصدرية، والشهادة المعتمدة وابدأ رحلتك نحو الاحتراف.</p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl text-xl font-headline shadow-2xl gold-glow w-full sm:w-auto transition-transform active:scale-95">ابدأ رحلتك الآن</Button>
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

function DesktopStatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-5 rounded-[24px] border border-primary/5 luxury-shadow flex flex-col gap-3">
      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-secondary">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold text-primary/30 uppercase tracking-wider">{label}</p>
        <p className="font-headline font-bold text-primary text-lg">{value}</p>
      </div>
    </div>
  );
}

function ModuleItem({ title, lessons, duration }: { title: string; lessons: number; duration: string }) {
  return (
    <AccordionItem value={title} className="bg-white border rounded-2xl px-4 mb-3 border-primary/5 luxury-shadow overflow-hidden">
      <AccordionTrigger className="hover:no-underline py-5">
        <div className="flex items-center justify-between w-full text-right">
          <div>
            <span className="font-headline font-bold text-primary text-lg">{title}</span>
            <div className="flex gap-4 mt-1">
              <span className="text-xs text-primary/40 flex items-center gap-1"><BookOpen className="w-3 h-3" /> {lessons} درس</span>
              <span className="text-xs text-primary/40 flex items-center gap-1"><Clock className="w-3 h-3" /> {duration}</span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-4">
        <ul className="space-y-2">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <Play className="w-4 h-4 text-secondary fill-current" />
                <span className="text-primary/70 text-sm">الدرس {i}: مقدمة في المسار التعليمي وأساسيات البيئة البرمجية</span>
              </div>
              <Badge variant="outline" className="text-[10px] border-primary/10">15:00</Badge>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function ReviewItem({ name, rating, comment, date }: { name: string; rating: number; comment: string; date: string }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-bold text-lg">
            {name[0]}
          </div>
          <div>
            <p className="text-sm font-bold text-primary">{name}</p>
            <p className="text-[10px] text-primary/40">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-sm text-primary/70 leading-relaxed italic">"{comment}"</p>
    </div>
  );
}
