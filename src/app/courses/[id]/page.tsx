
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, User, Play, FileText, CheckCircle2, Globe, Share2, GraduationCap, MessageCircle, BookOpen, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CourseDetailPage() {
  const { id } = useParams();
  const courseImage = PlaceHolderImages.find(img => img.id === 'web-dev-course');
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      <div className="pt-20 lg:pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* 1. الغلاف (صورة الكورس) - البداية */}
          <div className="relative aspect-video rounded-[32px] overflow-hidden luxury-shadow mb-8 border border-primary/5">
            {courseImage?.imageUrl && (
              <Image src={courseImage.imageUrl} alt="Thumbnail" fill className="object-cover" />
            )}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-current mr-1" />
              </div>
            </div>
          </div>

          {/* 2. تفاصيل الكورس الأساسية (الاسم، السعر، التقييم) */}
          <div className="space-y-6 mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-secondary/10 text-secondary border-none font-headline">برمجة</Badge>
                  <Badge className="bg-primary/5 text-primary/60 border-none font-headline">مستوى مبتدئ</Badge>
                </div>
                <h1 className="text-3xl lg:text-5xl font-headline font-bold text-primary">تطوير الويب الشامل - Full Stack Web Development</h1>
              </div>
              
              <div className="bg-white p-6 rounded-3xl luxury-shadow border border-primary/5 flex flex-col items-center md:items-end gap-2 shrink-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-headline font-bold text-secondary">45,000 ريال يمني</span>
                  <span className="text-primary/30 line-through text-sm">60,000 ريال</span>
                </div>
                <div className="flex items-center gap-1 text-secondary">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-lg">4.9</span>
                  <span className="text-primary/40 text-xs mr-1">(1,240 تقييم)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-headline shadow-lg gold-glow grow md:grow-0">سجل الآن في الكورس</Button>
              <Button size="lg" variant="outline" className="border-primary/10 h-14 rounded-2xl font-headline px-8"><Share2 className="w-4 h-4 ml-2" /> مشاركة</Button>
            </div>
          </div>

          {/* 3. إحصائيات تقنية (عدد الدروس، الساعات، الطلاب، الشهادة) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            <QuickStat icon={<Clock />} label="مدة الكورس" value="45 ساعة" />
            <QuickStat icon={<BookOpen />} label="الدروس" value="45 درس" />
            <QuickStat icon={<User />} label="الطلاب" value="2,500 طالب" />
            <QuickStat icon={<GraduationCap />} label="الشهادة" value="معتمدة" />
            <QuickStat icon={<Globe />} label="اللغة" value="العربية" />
            <QuickStat icon={<HelpCircle />} label="الدعم" value="أسئلة وأجوبة" />
          </div>

          {/* 4. التبويبات (نظرة عامة، المنهج، المدرب، المراجعات) */}
          <Tabs defaultValue="overview" className="w-full" dir="rtl">
            <TabsList className="bg-white border p-1 rounded-2xl h-auto flex-wrap justify-start mb-8 luxury-shadow">
              <TabsTrigger value="overview" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-8 py-3 rounded-xl font-headline transition-all">نظرة عامة</TabsTrigger>
              <TabsTrigger value="curriculum" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-8 py-3 rounded-xl font-headline transition-all">المنهج الدراسي</TabsTrigger>
              <TabsTrigger value="instructor" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-8 py-3 rounded-xl font-headline transition-all">المدرب</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-8 py-3 rounded-xl font-headline transition-all">المراجعات</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow space-y-6">
                <h3 className="text-2xl font-headline font-bold text-primary">ماذا ستتعلم في هذا المسار؟</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "بناء واجهات مستخدم متجاوبة باستخدام HTML و CSS",
                    "إتقان لغة JavaScript وبرمجة المنطق البرمجي",
                    "بناء تطبيقات ويب قوية باستخدام React.js",
                    "تطوير الخوادم وقواعد البيانات باستخدام Node.js",
                    "نشر التطبيقات على السيرفرات العالمية",
                    "إدارة المشاريع باستخدام Git و GitHub"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-primary/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 px-2">
                <h3 className="text-2xl font-headline font-bold text-primary">وصف الكورس</h3>
                <div className="text-primary/70 leading-relaxed space-y-4">
                  <p>هذا الكورس هو دليلك الشامل للدخول إلى عالم تطوير الويب. لقد صممنا هذا المنهج ليكون عملياً بنسبة 100%، حيث ستقوم ببناء أكثر من 5 مشاريع حقيقية خلال فترة تعلمك.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="animate-in fade-in slide-in-from-bottom-2">
              <Accordion type="single" collapsible className="space-y-4">
                <ModuleItem title="الوحدة الأولى: أساسيات الويب (HTML & CSS)" lessons={12} duration="8 ساعات" />
                <ModuleItem title="الوحدة الثانية: لغة البرمجة JavaScript" lessons={15} duration="12 ساعة" />
                <ModuleItem title="الوحدة الثالثة: بناء تطبيقات React الاحترافية" lessons={18} duration="15 ساعة" />
              </Accordion>
            </TabsContent>

            <TabsContent value="instructor" className="animate-in fade-in slide-in-from-bottom-2">
              <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative w-32 h-32 shrink-0">
                  {instructorImage?.imageUrl && (
                    <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover rounded-[24px]" />
                  )}
                </div>
                <div className="space-y-4 flex-1 text-center md:text-right">
                  <div>
                    <h4 className="text-2xl font-headline font-bold text-primary">م. أحمد علي</h4>
                    <p className="text-secondary font-medium">Senior Full Stack Developer</p>
                  </div>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    خبير في تطوير الويب بخبرة تزيد عن 10 سنوات. قام بتدريب آلاف الطلاب العرب على أحدث التقنيات وساعدهم في الحصول على وظائف أحلامهم.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button className="rounded-xl bg-primary text-white font-headline gap-2 h-12 px-6">
                      <MessageCircle className="w-4 h-4" />
                      تواصل مع المدرب
                    </Button>
                    <Button variant="outline" className="rounded-xl font-headline h-12 px-6 border-primary/10">عرض جميع الكورسات</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <ReviewItem name="علي عبدالله" rating={5} comment="كورس جبار ومفيد جداً، الشرح مبسط والمشاريع العملية ساعدتني كثيراً في الفهم." date="منذ شهر" />
                <ReviewItem name="سارة محمد" rating={4} comment="المحتوى غني جداً، المدرب يشرح بالتفصيل الممل وهذا شيء ممتاز للمبتدئين." date="منذ أسبوعين" />
              </div>
              <div className="bg-primary/5 p-8 rounded-[32px] text-center space-y-4">
                <h4 className="font-headline font-bold text-primary">هل أتممت هذا الكورس؟</h4>
                <p className="text-sm text-primary/60">شاركنا تجربتك وساعد الطلاب الآخرين في اتخاذ القرار.</p>
                <Button variant="outline" className="rounded-xl border-primary/20 font-headline h-12">إضافة مراجعة وتقييم</Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* 5. Final CTA Section */}
          <div className="mt-20 bg-primary rounded-[48px] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">هل أنت جاهز للتحول المهني؟</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto">انضم الآن واحصل على وصول كامل مدى الحياة للمحتوى مع الشهادة المعتمدة ومصادر التعلم الخاصة.</p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl text-xl font-headline shadow-2xl gold-glow">سجل في الكورس الآن</Button>
          </div>

        </div>
      </div>
    </main>
  );
}

function QuickStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-primary/5 luxury-shadow flex flex-col items-center justify-center text-center gap-1 group hover:border-secondary/20 transition-colors">
      <div className="text-secondary mb-1 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[10px] text-primary/40 font-bold uppercase tracking-tight">{label}</span>
      <span className="text-sm font-headline font-bold text-primary">{value}</span>
    </div>
  );
}

function ModuleItem({ title, lessons, duration }: { title: string; lessons: number; duration: string }) {
  return (
    <AccordionItem value={title} className="bg-white border rounded-2xl px-6 mb-4 border-primary/5 luxury-shadow overflow-hidden">
      <AccordionTrigger className="hover:no-underline py-6">
        <div className="flex items-center justify-between w-full text-right">
          <div>
            <span className="font-headline font-bold text-primary text-lg">{title}</span>
            <div className="flex gap-4 mt-1">
              <span className="text-xs text-primary/40">{lessons} درس</span>
              <span className="text-xs text-primary/40">{duration}</span>
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-6">
        <ul className="space-y-4">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                <span className="text-primary/70 text-sm">مقدمة في المسار التعليمي - الدرس {i}</span>
              </div>
              <Badge variant="outline" className="text-[10px] h-5 bg-white">معاينة</Badge>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function ReviewItem({ name, rating, comment, date }: { name: string; rating: number; comment: string; date: string }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-primary/5 luxury-shadow space-y-4">
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
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-sm text-primary/70 leading-relaxed italic">"{comment}"</p>
    </div>
  );
}
