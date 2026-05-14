
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Clock, User, Play, FileText, CheckCircle2, ChevronLeft, Calendar, Globe, Share2, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CourseDetailPage() {
  const { id } = useParams();
  const courseImage = PlaceHolderImages.find(img => img.id === 'web-dev-course');
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-headline">جديد</Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-headline">الأكثر مبيعاً</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-headline font-bold text-primary">تطوير الويب الشامل - Full Stack Web Development</h1>
                <p className="text-lg text-primary/60 leading-relaxed">
                  تعلم كيفية بناء تطبيقات ويب احترافية من الصفر وحتى الاحتراف باستخدام أحدث التقنيات: HTML5, CSS3, JavaScript, React, Node.js.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">4.9</span>
                    <span className="text-primary/60">(1,240 تقييم)</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary/60">
                    <User className="w-4 h-4" />
                    <span>2,500 طالب مسجل</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary/60">
                    <Calendar className="w-4 h-4" />
                    <span>آخر تحديث: يونيو 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary/60">
                    <Globe className="w-4 h-4" />
                    <span>العربية / الإنجليزية</span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full" dir="rtl">
                <TabsList className="bg-white border p-1 rounded-xl h-auto flex-wrap justify-start">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-6 py-2.5 rounded-lg font-headline">نظرة عامة</TabsTrigger>
                  <TabsTrigger value="curriculum" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-6 py-2.5 rounded-lg font-headline">المنهج الدراسي</TabsTrigger>
                  <TabsTrigger value="instructor" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-6 py-2.5 rounded-lg font-headline">المدرب</TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-secondary data-[state=active]:text-white px-6 py-2.5 rounded-lg font-headline">المراجعات</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-8 space-y-8">
                  <div className="bg-white p-8 rounded-3xl border border-primary/5 luxury-shadow space-y-6">
                    <h3 className="text-2xl font-headline font-bold text-primary">ماذا ستتعلم؟</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "بناء واجهات مستخدم متجاوبة باستخدام HTML و CSS",
                        "إتقان لغة JavaScript وبرمجة المنطق البرمجي",
                        "بناء تطبيقات ويب قوية باستخدام React.js",
                        "تطوير الخوادم وقواعد البيانات باستخدام Node.js و MongoDB",
                        "نشر التطبيقات على السيرفرات العالمية",
                        "إدارة المشاريع باستخدام Git و GitHub"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-primary/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-headline font-bold text-primary">وصف الكورس</h3>
                    <div className="text-primary/70 leading-relaxed space-y-4">
                      <p>هذا الكورس هو دليلك الشامل للدخول إلى عالم تطوير الويب. لقد صممنا هذا المنهج ليكون عملياً بنسبة 100%، حيث ستقوم ببناء أكثر من 5 مشاريع حقيقية خلال فترة تعلمك.</p>
                      <p>سواء كنت مبتدئاً تماماً أو لديك بعض الخبرة البسيطة، سيوصلك هذا الكورس إلى المستوى الذي يطمح إليه أصحاب العمل في الشركات التقنية الكبرى.</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="mt-8">
                  <Accordion type="single" collapsible className="space-y-4">
                    <ModuleItem title="الوحدة الأولى: أساسيات الويب (HTML & CSS)" lessons={12} duration="8 ساعات" />
                    <ModuleItem title="الوحدة الثانية: لغة البرمجة JavaScript" lessons={15} duration="12 ساعة" />
                    <ModuleItem title="الوحدة الثالثة: بناء تطبيقات React الاحترافية" lessons={18} duration="15 ساعة" />
                    <ModuleItem title="الوحدة الرابعة: خادم البيانات والـ Backend" lessons={10} duration="10 ساعات" />
                  </Accordion>
                </TabsContent>

                <TabsContent value="instructor" className="mt-8">
                  <div className="bg-white p-8 rounded-3xl border border-primary/5 luxury-shadow flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-right">
                    <div className="relative w-32 h-32 shrink-0">
                      <Image src={instructorImage?.imageUrl || ""} alt="Instructor" fill className="object-cover rounded-2xl" />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-headline font-bold text-primary">م. أحمد علي</h4>
                        <p className="text-secondary font-medium">Senior Full Stack Developer & Instructor</p>
                      </div>
                      <p className="text-primary/60 text-sm leading-relaxed">
                        خبير في تطوير الويب بخبرة تزيد عن 10 سنوات في كبرى الشركات التقنية. قام بتدريب أكثر من 50,000 طالب حول العالم على تقنيات الويب الحديثة.
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold">
                        <div className="flex items-center gap-1 text-primary/60"><Star className="w-4 h-4 text-secondary" /> 4.9 التقييم</div>
                        <div className="flex items-center gap-1 text-primary/60"><User className="w-4 h-4 text-secondary" /> 52,000 طالب</div>
                        <div className="flex items-center gap-1 text-primary/60"><Play className="w-4 h-4 text-secondary" /> 12 كورس</div>
                      </div>
                      <Button variant="outline" className="border-primary/20 rounded-xl font-headline">عرض جميع الكورسات</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar Sticky Card */}
            <div className="lg:sticky lg:top-32 space-y-6">
              <Card className="rounded-[32px] overflow-hidden luxury-shadow border-primary/5">
                <div className="relative aspect-video">
                  <Image src={courseImage?.imageUrl || ""} alt="Thumbnail" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-primary fill-current ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-headline font-bold text-primary">45,000 ريال</div>
                    <div className="text-primary/40 line-through text-sm">60,000 ريال</div>
                  </div>
                  
                  <div className="space-y-3">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 rounded-2xl text-lg font-headline shadow-lg gold-glow transition-all active:scale-95">سجل في الكورس الآن</Button>
                    <Button size="lg" variant="outline" className="w-full border-primary/20 h-14 rounded-2xl font-headline">إضافة للسلة</Button>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-primary/5">
                    <p className="font-bold text-primary">يتضمن هذا الكورس:</p>
                    <ul className="space-y-3 text-sm text-primary/70">
                      <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-secondary" /> الوصول الكامل مدى الحياة</li>
                      <li className="flex items-center gap-3"><Play className="w-4 h-4 text-secondary" /> 45 ساعة من الفيديوهات</li>
                      <li className="flex items-center gap-3"><FileText className="w-4 h-4 text-secondary" /> 25 ملفاً ومصدراً قابلاً للتحميل</li>
                      <li className="flex items-center gap-3"><GraduationCap className="w-4 h-4 text-secondary" /> شهادة إتمام معتمدة من سراج</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-6 pt-4">
                    <Button variant="ghost" size="sm" className="text-primary/60"><Share2 className="w-4 h-4 ml-2" /> مشاركة</Button>
                    <Button variant="ghost" size="sm" className="text-primary/60"><Heart className="w-4 h-4 ml-2" /> مفضلة</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function ModuleItem({ title, lessons, duration }: { title: string; lessons: number; duration: string }) {
  return (
    <AccordionItem value={title} className="bg-white border rounded-2xl px-6 mb-4 border-primary/5 luxury-shadow">
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
          {[1, 2, 3, 4].map((i) => (
            <li key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                <span className="text-primary/70 text-sm">مقدمة في بناء تطبيقات الويب - الدرس {i}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-primary/40">
                <span>12:45</span>
                <Badge variant="outline" className="text-[10px] h-5">معاينة</Badge>
              </div>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

import { GraduationCap } from "lucide-react";
