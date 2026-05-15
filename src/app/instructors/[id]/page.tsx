
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  BookOpen, 
  Twitter, 
  Linkedin, 
  Github, 
  Globe,
  Award,
  CheckCircle2,
  Play,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INSTRUCTOR_DATA = {
  id: "inst-1",
  name: "م. أحمد علي",
  title: "Senior Full Stack Developer & Tech Lead",
  bio: "مطور تطبيقات ويب خبير بخبرة تزيد عن 10 سنوات في بناء الأنظمة المعقدة. متخصص في تقنيات JavaScript الحديثة وقواعد البيانات. شغوف بنقل المعرفة وتبسيط المفاهيم البرمجية الصعبة للطلاب المبتدئين.",
  rating: 4.9,
  reviewsCount: 1240,
  students: 12500,
  coursesCount: 12,
  image: "instructor-1",
  social: {
    twitter: "#",
    linkedin: "#",
    github: "#",
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
  const { id } = useParams();
  const instImage = PlaceHolderImages.find(img => img.id === INSTRUCTOR_DATA.image);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Hero Profile Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 shadow-2xl">
              {instImage?.imageUrl && (
                <Image src={instImage.imageUrl} alt={INSTRUCTOR_DATA.name} fill className="object-cover rounded-[40px]" />
              )}
            </div>
            <div className="space-y-6 flex-1 text-center md:text-right">
              <div className="space-y-2">
                <Badge className="bg-secondary/10 text-secondary border-none px-4 py-1 text-xs font-bold">مدرب معتمد</Badge>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{INSTRUCTOR_DATA.name}</h1>
                <p className="text-lg text-secondary font-medium">{INSTRUCTOR_DATA.title}</p>
              </div>
              <p className="text-primary/60 max-w-2xl leading-relaxed text-sm md:text-base">
                {INSTRUCTOR_DATA.bio}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4">
                <SocialLink icon={<Twitter className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.twitter} />
                <SocialLink icon={<Linkedin className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.linkedin} />
                <SocialLink icon={<Github className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.github} />
                <SocialLink icon={<Globe className="w-5 h-5" />} href={INSTRUCTOR_DATA.social.website} />
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mt-8">
                 <StatBox icon={<Users className="w-5 h-5" />} label="طالب" value={INSTRUCTOR_DATA.students.toLocaleString()} />
                 <StatBox icon={<BookOpen className="w-5 h-5" />} label="دورة" value={INSTRUCTOR_DATA.coursesCount.toString()} />
                 <StatBox icon={<Star className="w-5 h-5" />} label="تقييم" value={INSTRUCTOR_DATA.rating.toString()} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Instructor Courses */}
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                   <Play className="w-6 h-6 text-secondary" />
                   دورات المدرب
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {INSTRUCTOR_DATA.courses.map(course => (
                    <InstructorCourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-headline font-bold text-primary mb-8 flex items-center gap-3">
                   <Star className="w-6 h-6 text-secondary fill-current" />
                   آراء الطلاب
                </h2>
                <div className="space-y-6">
                  {INSTRUCTOR_DATA.reviews.map((review, i) => (
                    <ReviewCard key={i} review={review} />
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Stats/Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow space-y-6">
                <h3 className="font-headline font-bold text-primary text-xl border-b pb-4">إنجازات المدرب</h3>
                <div className="space-y-4">
                  <Achievement icon={<Award className="w-5 h-5 text-secondary" />} text="خبير معتمد من منصة سراج" />
                  <Achievement icon={<CheckCircle2 className="w-5 h-5 text-secondary" />} text="أكثر من 500 ساعة تدريبية" />
                  <Achievement icon={<CheckCircle2 className="w-5 h-5 text-secondary" />} text="مشرف على أكثر من 50 مشروع تخرج" />
                </div>
                <Button className="w-full h-14 bg-primary text-white rounded-2xl font-headline shadow-lg mt-4">تواصل مع المدرب</Button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary/40 hover:text-secondary hover:translate-y-[-4px] transition-all border border-primary/5 luxury-shadow">
      {icon}
    </Link>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-primary/5 luxury-shadow text-center">
      <div className="text-secondary flex justify-center mb-1">{icon}</div>
      <p className="text-xl font-headline font-bold text-primary">{value}</p>
      <p className="text-[10px] text-primary/40 font-bold uppercase">{label}</p>
    </div>
  );
}

function InstructorCourseCard({ course }: { course: any }) {
  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  return (
    <div className="group bg-white rounded-[24px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-6px] transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        )}
      </div>
      <div className="p-6">
        <Badge className="bg-primary/5 text-primary/60 border-none mb-3 text-[10px]">{course.category}</Badge>
        <h4 className="font-headline font-bold text-primary leading-tight h-12 line-clamp-2 mb-4">{course.title}</h4>
        <div className="flex items-center justify-between pt-4 border-t border-primary/5">
          <span className="font-headline font-bold text-secondary">{course.price}</span>
          <div className="flex items-center gap-1 text-xs text-secondary font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{course.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-primary">{review.name}</p>
          <p className="text-[10px] text-primary/40">{review.date}</p>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-sm text-primary/70 leading-relaxed italic">"{review.comment}"</p>
    </div>
  );
}

function Achievement({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl border border-transparent hover:border-secondary/20 transition-all">
      {icon}
      <span className="text-sm text-primary/70 font-bold">{text}</span>
    </div>
  );
}
