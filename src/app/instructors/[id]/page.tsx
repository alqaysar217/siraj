
"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  BookOpen, 
  Linkedin, 
  Instagram,
  Facebook,
  Globe,
  Award,
  CheckCircle2,
  Play,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Calendar,
  Share2,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INSTRUCTOR_DATA = {
  id: "inst-1",
  name: "م. أحمد علي",
  title: "Senior Full Stack Developer & Tech Lead",
  bio: "مطور تطبيقات ويب خبير بخبرة تزيد عن 10 سنوات في بناء الأنظمة المعقدة وتصميم تجربة المستخدم المتطورة. متخصص في تقنيات JavaScript الحديثة وقواعد البيانات السحابية. شغوف بنقل المعرفة وتبسيط المفاهيم البرمجية الصعبة للطلاب المبتدئين لجعلهم محترفين في سوق العمل العالمي.",
  rating: 4.9,
  reviewsCount: 1240,
  students: 12500,
  coursesCount: 12,
  image: "instructor-1",
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
    whatsapp: "#",
    website: "#"
  },
  courses: [
    {
      id: "web-1",
      title: "تطوير الويب الشامل - Full Stack Web Development",
      category: "برمجة",
      rating: 4.9,
      students: 2500,
      image: "web-dev-course",
      price: "45,000 ر.ي"
    },
    {
      id: "js-adv",
      title: "إتقان JavaScript من الصفر إلى الاحتراف",
      category: "برمجة",
      rating: 4.8,
      students: 1800,
      image: "hero-bg",
      price: "30,000 ر.ي"
    }
  ],
  reviews: [
    { name: "علي سالم", rating: 5, date: "منذ شهر", comment: "أفضل مدرب تعاملت معه، شرحه مبسط جداً ويهتم بالتفاصيل العملية." },
    { name: "سارة خالد", rating: 5, date: "منذ أسبوعين", comment: "الكورسات منظمة جداً والمشاريع حقيقية وساعدتني في الحصول على وظيفة." }
  ]
};

export default function InstructorProfilePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { id } = useParams();
  const instImage = PlaceHolderImages.find(img => img.id === INSTRUCTOR_DATA.image);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-20" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Instructor Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-[60px] rotate-6 blur-2xl opacity-10" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 shadow-2xl rounded-[60px] overflow-hidden border-8 border-white luxury-shadow">
                  {instImage?.imageUrl && (
                    <Image src={instImage.imageUrl} alt={INSTRUCTOR_DATA.name} fill className="object-cover" priority />
                  )}
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-[32px] shadow-2xl border border-primary/5 luxury-shadow flex items-center gap-4 animate-bounce-slow">
                   <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <ShieldCheck className="w-7 h-7" />
                   </div>
                   <div>
                     <p className="text-[10px] text-primary/40 font-bold uppercase tracking-wider">الحالة</p>
                     <p className="text-sm font-headline font-bold text-primary">مدرب معتمد</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Instructor Info Column */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
              <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-none px-6 py-2 rounded-full text-xs font-headline font-bold">ملف مدرب احترافي</Badge>
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">{INSTRUCTOR_DATA.name}</h1>
                <p className="text-xl md:text-2xl text-secondary font-medium">{INSTRUCTOR_DATA.title}</p>
              </div>
              
              <p className="text-lg text-primary/60 max-w-2xl mx-auto lg:mr-0 leading-relaxed font-body">
                {INSTRUCTOR_DATA.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <SocialLink icon={<Linkedin className="w-6 h-6" />} href={INSTRUCTOR_DATA.social.linkedin} />
                <SocialLink icon={<Instagram className="w-6 h-6" />} href={INSTRUCTOR_DATA.social.instagram} />
                <SocialLink icon={<Facebook className="w-6 h-6" />} href={INSTRUCTOR_DATA.social.facebook} />
                <SocialLink icon={<MessageCircle className="w-6 h-6" />} href={INSTRUCTOR_DATA.social.whatsapp} />
                <div className="h-12 w-px bg-primary/10 mx-2 hidden md:block" />
                <Button className="rounded-2xl bg-primary text-white font-headline gap-3 h-14 px-8 shadow-xl hover:bg-secondary transition-all">
                  <Mail className="w-5 h-5" />
                  تواصل عبر البريد
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto lg:mr-0 pt-10 border-t border-primary/5">
                 <BigStatItem icon={<Users className="w-7 h-7" />} label="طالب" value={mounted ? INSTRUCTOR_DATA.students.toLocaleString() : ""} />
                 <BigStatItem icon={<BookOpen className="w-7 h-7" />} label="دورة" value={INSTRUCTOR_DATA.coursesCount.toString()} />
                 <BigStatItem icon={<Star className="w-7 h-7" />} label="تقييم" value={INSTRUCTOR_DATA.rating.toString()} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content: Courses & Reviews */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Instructor Courses Grid */}
              <div className="space-y-10">
                <div className="flex items-center justify-between border-b pb-6">
                  <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                      <Play className="w-6 h-6" />
                    </div>
                    دورات المدرب
                  </h2>
                  <Badge variant="outline" className="border-primary/10 px-4 py-1.5 rounded-xl font-bold">{INSTRUCTOR_DATA.courses.length} دورة نشطة</Badge>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {INSTRUCTOR_DATA.courses.map(course => (
                    <InstructorCourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              {/* Students Reviews Section */}
              <div className="space-y-10">
                <h2 className="text-3xl font-headline font-bold text-primary flex items-center gap-4">
                   <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                    <Star className="w-6 h-6 fill-current" />
                   </div>
                   آراء الطلاب والتقييمات
                </h2>
                <div className="grid gap-6">
                  {INSTRUCTOR_DATA.reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
                <Button variant="ghost" className="w-full h-16 rounded-[24px] border-2 border-dashed border-primary/10 text-primary/40 font-headline hover:bg-primary/5 hover:border-secondary/20 transition-all">عرض جميع التقييمات</Button>
              </div>

            </div>

            {/* Professional Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-8">
                
                {/* Achievements Card */}
                <div className="bg-primary/5 rounded-[40px] p-8 border border-primary/5 space-y-8 luxury-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                  <h3 className="font-headline font-bold text-primary text-2xl">إنجازات تعليمية</h3>
                  <div className="space-y-4">
                    <Achievement icon={<Award className="w-5 h-5 text-secondary" />} text="خبير معتمد من منصة سراج" />
                    <Achievement icon={<CheckCircle2 className="w-5 h-5 text-secondary" />} text="أكثر من 500 ساعة تدريبية" />
                    <Achievement icon={<Users className="w-5 h-5 text-secondary" />} text="مشرف على مشاريع تخرج عالمية" />
                    <Achievement icon={<Calendar className="w-5 h-5 text-secondary" />} text="انضم للمنصة منذ 3 سنوات" />
                  </div>
                  <Button size="lg" className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-2xl font-headline shadow-xl gold-glow text-lg transition-transform active:scale-95">طلب استشارة خاصة</Button>
                </div>

                {/* Quick Info Card */}
                <div className="bg-white rounded-[32px] p-6 border border-primary/5 luxury-shadow flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/40">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="font-headline font-bold text-primary">شارك الملف</span>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-xl"><ArrowLeft className="w-5 h-5" /></Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
           <p className="text-white/40 text-sm font-medium">© 2024 سراج - تمكين العقول العربية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary/40 hover:text-secondary hover:translate-y-[-6px] transition-all border border-primary/5 luxury-shadow shadow-lg group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </Link>
  );
}

function BigStatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-[32px] border border-primary/5 luxury-shadow text-center group hover:border-secondary/30 transition-all">
      <div className="text-secondary flex justify-center mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-2xl md:text-3xl font-headline font-bold text-primary">{value}</p>
      <p className="text-[11px] text-primary/40 font-bold uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

function InstructorCourseCard({ course }: { course: any }) {
  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  return (
    <div className="group bg-white rounded-[40px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        )}
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 backdrop-blur-md text-primary border-none text-[10px] font-bold px-4 py-1.5 rounded-full">دورة متميزة</Badge>
        </div>
      </div>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <Badge className="bg-primary/5 text-primary/60 border-none text-[10px] font-bold px-4 py-1.5 rounded-lg">{course.category}</Badge>
          <div className="flex items-center gap-1.5 text-xs text-secondary font-bold">
            <Star className="w-4 h-4 fill-current" />
            <span>{course.rating}</span>
          </div>
        </div>
        <h4 className="text-xl font-headline font-bold text-primary leading-tight h-14 line-clamp-2">{course.title}</h4>
        <div className="flex items-center justify-between pt-6 border-t border-primary/5">
          <span className="text-2xl font-headline font-bold text-secondary">{course.price}</span>
          <Link href={`/courses/${course.id}`}>
            <Button variant="ghost" size="sm" className="font-headline text-primary/60 gap-2 group/btn hover:text-secondary hover:bg-secondary/5 rounded-xl px-4">
              التفاصيل
              <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-primary/5 p-8 rounded-[40px] border border-transparent hover:border-secondary/20 transition-all space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary font-bold text-2xl shadow-md border border-primary/5">
            {review.name[0]}
          </div>
          <div>
            <p className="text-xl font-headline font-bold text-primary">{review.name}</p>
            <p className="text-xs text-primary/40 font-medium">{review.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-2xl border border-primary/5 shadow-sm">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-lg text-primary/70 leading-relaxed italic font-body">"{review.comment}"</p>
    </div>
  );
}

function Achievement({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-5 p-5 bg-white rounded-[24px] border border-primary/5 hover:border-secondary/20 transition-all shadow-sm group">
      <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-sm text-primary/70 font-bold">{text}</span>
    </div>
  );
}
