
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
  Mail,
  MessageCircle,
  Clock
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
      level: "مستوى مبتدئ",
      rating: 4.9,
      students: 2500,
      lessons: 45,
      duration: "45 ساعة",
      price: 45000,
      oldPrice: 54000,
      image: "web-dev-course",
      instructor: "م. أحمد علي"
    },
    {
      id: "js-adv",
      title: "إتقان JavaScript من الصفر إلى الاحتراف",
      category: "برمجة",
      level: "مستوى متوسط",
      rating: 4.8,
      students: 1800,
      lessons: 30,
      duration: "30 ساعة",
      price: 30000,
      oldPrice: 38000,
      image: "hero-bg",
      instructor: "م. أحمد علي"
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

  const instImage = PlaceHolderImages.find(img => img.id === INSTRUCTOR_DATA.image);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
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
              </div>
            </div>

            {/* Instructor Info Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              <div className="space-y-3">
                <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">{INSTRUCTOR_DATA.name}</h1>
                <p className="text-lg md:text-xl text-secondary font-medium">{INSTRUCTOR_DATA.title}</p>
              </div>
              
              <p className="text-base md:text-lg text-primary/60 max-w-2xl mx-auto lg:mr-0 leading-relaxed font-body">
                {INSTRUCTOR_DATA.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <SocialLink icon={<Linkedin className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.linkedin} />
                <SocialLink icon={<Instagram className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.instagram} />
                <SocialLink icon={<Facebook className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.facebook} />
                <SocialLink icon={<MessageCircle className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.whatsapp} />
                <div className="h-10 w-px bg-primary/10 mx-2 hidden md:block" />
                <Button className="rounded-2xl bg-primary text-white font-headline gap-3 h-12 px-6 shadow-xl hover:bg-secondary transition-all">
                  <Mail className="w-4 h-4" />
                  تواصل عبر البريد
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-8 max-w-2xl mx-auto lg:mr-0 pt-8 border-t border-primary/5">
                 <BigStatItem icon={<Users className="w-5 h-5 md:w-6 md:h-6" />} label="طالب" value={mounted ? INSTRUCTOR_DATA.students.toLocaleString('en-US') : ""} />
                 <BigStatItem icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />} label="دورة" value={INSTRUCTOR_DATA.coursesCount.toString()} />
                 <BigStatItem icon={<Star className="w-5 h-5 md:w-6 md:h-6" />} label="تقييم" value={INSTRUCTOR_DATA.rating.toString()} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content: Courses & Reviews */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Instructor Courses Grid */}
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b pb-4">
                  <h2 className="text-xl md:text-2xl font-headline font-bold text-primary flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <Play className="w-5 h-5" />
                    </div>
                    دورات المدرب
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {INSTRUCTOR_DATA.courses.map(course => (
                    <CourseListingCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              {/* Students Reviews Section */}
              <div className="space-y-8">
                <h2 className="text-xl md:text-2xl font-headline font-bold text-primary flex items-center gap-3">
                   <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <Star className="w-5 h-5 fill-current" />
                   </div>
                   آراء الطلاب والتقييمات
                </h2>
                <div className="grid gap-4">
                  {INSTRUCTOR_DATA.reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
                <Button variant="ghost" className="w-full h-14 rounded-[20px] border-2 border-dashed border-primary/10 text-primary/40 font-headline hover:bg-primary/5 transition-all">عرض جميع التقييمات</Button>
              </div>

            </div>

            {/* Professional Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-32 space-y-6">
                
                {/* Achievements Card */}
                <div className="bg-primary/5 rounded-[32px] p-6 border border-primary/5 space-y-6 luxury-shadow relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                  <h3 className="font-headline font-bold text-primary text-xl">إنجازات تعليمية</h3>
                  <div className="space-y-3">
                    <Achievement icon={<Award className="w-4 h-4 text-secondary" />} text="خبير معتمد من منصة سراج" />
                    <Achievement icon={<CheckCircle2 className="w-4 h-4 text-secondary" />} text="أكثر من 500 ساعة تدريبية" />
                    <Achievement icon={<Users className="w-4 h-4 text-secondary" />} text="مشرف على مشاريع تخرج" />
                    <Achievement icon={<Clock className="w-4 h-4 text-secondary" />} text="انضم منذ 3 سنوات" />
                  </div>
                  <Button size="lg" className="w-full h-14 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-headline shadow-xl gold-glow text-base transition-transform active:scale-95">طلب استشارة خاصة</Button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
           <p className="text-white/40 text-sm font-medium">© 2024 سراج - تمكين العقول العربية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary/40 hover:text-secondary hover:translate-y-[-4px] transition-all border border-primary/5 luxury-shadow shadow-md group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </Link>
  );
}

function BigStatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-2 md:p-5 rounded-xl md:rounded-[24px] border border-primary/5 luxury-shadow text-center group hover:border-secondary/30 transition-all flex flex-col items-center justify-center">
      <div className="text-secondary mb-1 md:mb-2 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-sm md:text-2xl font-headline font-bold text-primary leading-none">{value}</p>
      <p className="hidden md:block text-[9px] text-primary/40 font-bold uppercase tracking-widest mt-1">{label}</p>
    </div>
  );
}

function CourseListingCard({ course }: { course: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);

  return (
    <div className="group bg-white rounded-[24px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-6px] transition-all duration-300 flex flex-col text-right h-full">
      <div className="relative aspect-video shrink-0 overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        )}
        <div className="absolute bottom-4 left-4">
           <Badge className="bg-black/50 backdrop-blur-md text-white border-none text-[9px] px-2 py-0.5">{course.level}</Badge>
        </div>
      </div>
      
      <div className="p-5 space-y-4 flex flex-col flex-1">
        <h3 className="font-headline font-bold text-primary leading-tight text-sm line-clamp-2 h-10">{course.title}</h3>
        
        <div className="flex items-center justify-between gap-2">
          <Badge className="bg-primary/5 text-primary/60 border-none text-[9px] h-6 px-3 rounded-lg">{course.category}</Badge>
          <div className="flex items-center gap-1 text-xs font-bold text-secondary">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{course.rating.toString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-y border-primary/5">
          <div className="text-left flex flex-col items-start">
             <span className="text-lg font-headline font-bold text-secondary leading-none">
              {course.price === 0 ? "مجاني" : mounted ? `${course.price.toLocaleString('en-US')} ر.ي` : ""}
            </span>
            {course.oldPrice && (
              <span className="text-[9px] text-primary/30 line-through leading-none mt-1">{mounted ? course.oldPrice.toLocaleString('en-US') : ""} ر.ي</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 text-[9px] text-primary/50 bg-primary/5 p-2 rounded-xl font-bold text-center">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-3 h-3 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-primary/10">
            <BookOpen className="w-3 h-3 text-secondary" />
            <span>{course.lessons.toString()} درس</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-3 h-3 text-secondary" />
            <span>{course.students.toLocaleString('en-US')}</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto">
          <Button size="sm" className="w-full h-10 rounded-xl bg-primary hover:bg-secondary text-white font-headline text-xs shadow-md">تفاصيل الكورس</Button>
        </Link>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-primary/5 p-5 rounded-[20px] border border-transparent hover:border-secondary/10 transition-all space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-lg shadow-sm">
            {review.name[0]}
          </div>
          <div>
            <p className="text-xs font-headline font-bold text-primary">{review.name}</p>
            <p className="text-[10px] text-primary/40">{review.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 bg-white px-2 py-1 rounded-lg border border-primary/5 shadow-sm">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < review.rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-[11px] text-primary/70 leading-relaxed italic font-body">"{review.comment}"</p>
    </div>
  );
}

function Achievement({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-primary/5 hover:border-secondary/20 transition-all shadow-sm group">
      <div className="w-8 h-8 bg-primary/5 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-[10px] text-primary/70 font-bold truncate">{text}</span>
    </div>
  );
}
