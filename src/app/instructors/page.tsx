
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
  ChevronLeft,
  GraduationCap,
  Award,
  ShieldCheck
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

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(217,138,30,0.03),transparent)] pointer-events-none" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-secondary/10 text-secondary border-none px-4 py-1.5 rounded-full text-xs font-headline">نخبة الخبراء</Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">
              تعرف على <span className="text-secondary">صنّاع</span> المعرفة
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed max-w-2xl">
              نحن نختار مدربينا بعناية فائقة لضمان حصولك على تجربة تعليمية حقيقية مبنية على خبرات عملية من أرض الواقع.
            </p>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="ابحث عن مدرب بمجال معين..." 
                className="w-full h-14 rounded-2xl pr-14 border-primary/10 bg-white shadow-xl focus:ring-secondary text-sm font-body"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
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

          <div className="mt-32 relative">
            <div className="absolute inset-0 bg-primary rounded-[40px] -rotate-1 hidden md:block" />
            <div className="relative bg-primary rounded-[40px] p-8 md:p-20 text-center text-white overflow-hidden luxury-shadow">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-10" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">هل أنت مستعد لمشاركة خبرتك؟</h2>
              <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                انضم إلى منصة سراج وكن جزءاً من أكبر مجتمع تعليمي عربي يهدف لنشر المعرفة بطريقة احترافية.
              </p>
              <Link href="/instructors/join">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl font-headline text-xl shadow-2xl gold-glow transition-transform active:scale-95">قدم طلب انضمام</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary/40 text-sm font-medium">© 2024 سراج - المنصة العربية الأولى لتمكين الخبراء.</p>
        </div>
      </footer>
    </main>
  );
}

function InstructorCard({ instructor }: { instructor: any }) {
  const instImage = PlaceHolderImages.find(img => img.id === instructor.image);

  return (
    <div className="group relative bg-white rounded-[32px] border border-primary/5 luxury-shadow hover:translate-y-[-10px] transition-all duration-500 overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 w-full h-32 bg-primary/5 -z-10 group-hover:bg-secondary/5 transition-colors" />
      
      <div className="p-8 pt-10 flex flex-col flex-1 items-center text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-secondary/20 rounded-[35%] rotate-12 group-hover:rotate-45 transition-transform duration-700" />
          <div className="relative w-32 h-32 shrink-0 shadow-2xl overflow-hidden rounded-[35%] border-4 border-white">
            {instImage?.imageUrl && (
              <Image src={instImage.imageUrl} alt={instructor.name} fill className="object-cover" />
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-secondary text-white w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{instructor.name}</h3>
          <p className="text-sm text-secondary font-bold uppercase tracking-wide">{instructor.title}</p>
          <div className="flex items-center justify-center gap-1 text-xs text-primary/40 font-bold bg-primary/5 px-4 py-1.5 rounded-full mt-4">
             <Star className="w-3.5 h-3.5 text-secondary fill-current" />
             <span className="text-primary font-bold">{instructor.rating}</span>
             <span className="mx-2 opacity-20">|</span>
             <span>{instructor.students.toLocaleString()} طالب</span>
          </div>
        </div>

        <p className="text-sm text-primary/60 leading-relaxed mb-8 line-clamp-3 italic">
          "{instructor.bio}"
        </p>

        <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-primary/5 mt-auto">
          <div className="flex flex-col items-center gap-1">
            <BookOpen className="w-5 h-5 text-secondary/60" />
            <span className="text-xs font-bold text-primary/40">{instructor.courses} دورة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-secondary/60" />
            <span className="text-xs font-bold text-primary/40">خبير معتمد</span>
          </div>
        </div>

        <Link href={`/instructors/${instructor.id}`} className="w-full mt-8">
          <Button variant="outline" className="w-full h-14 rounded-2xl border-primary/10 font-headline gap-2 group/btn hover:bg-primary hover:text-white transition-all shadow-sm">
            عرض الملف الشخصي
            <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
