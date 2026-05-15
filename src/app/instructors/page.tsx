
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  BookOpen, 
  Search,
  ArrowLeft,
  GraduationCap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INSTRUCTORS = [
  {
    id: "inst-1",
    name: "م. أحمد علي",
    title: "Senior Full Stack Developer",
    bio: "خبير في تطوير تطبيقات الويب بخبرة تزيد عن 10 سنوات، قام بتدريب آلاف الطلاب على تقنيات JavaScript و React.",
    rating: 4.9,
    students: 12500,
    courses: 12,
    image: "instructor-1"
  },
  {
    id: "inst-2",
    name: "د. سارة محمود",
    title: "AI & Data Science Expert",
    bio: "باحثة في مجال الذكاء الاصطناعي، متخصصة في تعلم الآلة وتحليل البيانات الضخمة باستخدام لغة Python.",
    rating: 4.8,
    students: 8400,
    courses: 8,
    image: "instructor-2"
  }
];

export default function InstructorsDirectoryPage() {
  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">نخبة <span className="text-secondary">المدربين</span> العرب</h1>
            <p className="text-lg text-primary/60 leading-relaxed mb-8">
              تعرف على الخبراء الذين سيقودونك نحو الاحتراف. مدربونا هم ممارسون حقيقيون في سوق العمل العالمي.
            </p>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="ابحث عن مدرب بمجال معين..." 
                className="w-full h-12 rounded-2xl pr-12 border-primary/10 bg-white focus:ring-secondary text-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTRUCTORS.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>

          <div className="mt-20 bg-primary rounded-[40px] p-8 md:p-16 text-center text-white">
            <h2 className="text-3xl font-headline font-bold mb-6">هل تمتلك خبرة تعليمية؟</h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto">انضم إلينا كمدرب وشارك معرفتك مع آلاف الطلاب العرب في بيئة تقنية حديثة.</p>
            <Link href="/instructors/join">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-14 rounded-2xl font-headline shadow-xl gold-glow">قدم طلب انضمام</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/40 text-sm">© 2024 سراج - نخبة المبدعين العرب. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </main>
  );
}

function InstructorCard({ instructor }: { instructor: any }) {
  const instImage = PlaceHolderImages.find(img => img.id === instructor.image);

  return (
    <div className="group bg-white rounded-[32px] border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative w-24 h-24 shrink-0 shadow-2xl">
            {instImage?.imageUrl && (
              <Image src={instImage.imageUrl} alt={instructor.name} fill className="object-cover rounded-3xl" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold text-primary mb-1">{instructor.name}</h3>
            <p className="text-xs text-secondary font-bold">{instructor.title}</p>
            <div className="flex items-center gap-1 text-xs text-primary/40 mt-2">
               <Star className="w-3.5 h-3.5 text-secondary fill-current" />
               <span className="font-bold">{instructor.rating}</span>
               <span className="mx-1">|</span>
               <span>{instructor.students.toLocaleString()} طالب</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-primary/60 leading-relaxed mb-8 line-clamp-3">
          {instructor.bio}
        </p>
        <div className="flex items-center justify-between pt-6 border-t border-primary/5">
          <div className="flex items-center gap-1.5 text-xs text-primary/40 font-bold">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span>{instructor.courses} دورة</span>
          </div>
          <Link href={`/instructors/${instructor.id}`}>
            <Button variant="ghost" className="text-secondary font-headline gap-2 group/btn">
              عرض الملف الشخصي
              <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
