
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
  ShieldCheck,
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const INSTRUCTORS = [
  {
    id: "inst-1",
    name: "م. أحمد علي",
    title: "Senior Full Stack Developer",
    bio: "خبير في تطوير تطبيقات الويب بخبرة تزيد عن 10 سنوات، قام بتدريب آلاف الطلاب على تقنيات JavaScript و React الحديثة وقواعد البيانات.",
    rating: 4.9,
    students: 12500,
    courses: 12,
    image: "instructor-1",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#"
    }
  },
  {
    id: "inst-2",
    name: "د. سارة محمود",
    title: "AI & Data Science Expert",
    bio: "باحثة في مجال الذكاء الاصطناعي، متخصصة في تعلم الآلة وتحليل البيانات الضخمة باستخدام لغة Python والرياضيات التطبيقية.",
    rating: 4.8,
    students: 8400,
    courses: 8,
    image: "instructor-2",
    social: {
      linkedin: "#",
      instagram: "#",
      facebook: "#",
      whatsapp: "#"
    }
  }
];

export default function InstructorsDirectoryPage() {
  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6 text-center md:text-right">
            <Badge className="bg-secondary/10 text-secondary border-none px-4 py-1.5 rounded-full text-xs font-headline">نخبة الخبراء</Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary leading-tight">
              تعرف على <span className="text-secondary">صنّاع</span> المعرفة
            </h1>
            <p className="text-lg text-primary/60 leading-relaxed max-w-2xl mx-auto md:mr-0">
              نحن نختار مدربينا بعناية لضمان حصولك على تجربة تعليمية حقيقية مبنية على خبرات عملية.
            </p>
            <div className="relative max-w-md mx-auto md:mr-0">
              <input 
                type="text" 
                placeholder="ابحث عن مدرب..." 
                className="w-full h-14 rounded-2xl pr-14 border-primary/10 bg-white shadow-xl focus:ring-secondary text-sm font-body"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {INSTRUCTORS.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
          </div>

          <div className="mt-32 relative">
            <div className="relative bg-primary rounded-[40px] p-8 md:p-20 text-center text-white overflow-hidden luxury-shadow">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-10" />
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">هل أنت مستعد لمشاركة خبرتك؟</h2>
              <p className="text-white/70 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                انضم إلى منصة سراج وكن جزءاً من أكبر مجتمع تعليمي عربي يهدف لنشر المعرفة.
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
    <div className="group bg-white rounded-[40px] border border-primary/5 luxury-shadow hover:translate-y-[-10px] transition-all duration-500 overflow-hidden flex flex-col h-full relative">
      <div className="h-32 bg-primary/5 w-full absolute top-0 left-0 -z-10 group-hover:bg-secondary/5 transition-colors" />
      
      <div className="p-8 flex flex-col items-center text-center">
        {/* Large Professional Image */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-secondary/20 rounded-full scale-110 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-40 h-40 shrink-0 shadow-2xl overflow-hidden rounded-full border-4 border-white">
            {instImage?.imageUrl && (
              <Image src={instImage.imageUrl} alt={instructor.name} fill className="object-cover" />
            )}
          </div>
          <div className="absolute bottom-2 right-2 bg-secondary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-2 mb-4">
          <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{instructor.name}</h3>
          <p className="text-sm text-secondary font-bold uppercase tracking-wide px-3 py-1 bg-secondary/5 rounded-full inline-block">{instructor.title}</p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center gap-1 text-xs font-bold text-primary/60">
              <Star className="w-4 h-4 text-secondary fill-current" />
              <span>{instructor.rating}</span>
            </div>
            <span className="text-primary/10">|</span>
            <span className="text-xs text-primary/40 font-bold">{instructor.students.toLocaleString()} طالب</span>
          </div>
        </div>

        {/* Bio Snippet */}
        <p className="text-sm text-primary/60 leading-relaxed mb-6 line-clamp-2 h-10 italic">
          "{instructor.bio}"
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <SocialIcon icon={<Linkedin className="w-4 h-4" />} href={instructor.social.linkedin} />
          <SocialIcon icon={<Instagram className="w-4 h-4" />} href={instructor.social.instagram} />
          <SocialIcon icon={<Facebook className="w-4 h-4" />} href={instructor.social.facebook} />
          <SocialIcon icon={<MessageCircle className="w-4 h-4" />} href={instructor.social.whatsapp} />
        </div>

        {/* Footer Stats & Button */}
        <div className="w-full pt-6 border-t border-primary/5 mt-auto">
          <div className="flex items-center justify-between mb-6 text-xs text-primary/40 font-bold">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-secondary/60" />
              <span>{instructor.courses} دورة</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-secondary/60" />
              <span>خبير معتمد</span>
            </div>
          </div>
          <Link href={`/instructors/${instructor.id}`} className="block">
            <Button variant="outline" className="w-full h-14 rounded-2xl border-primary/10 font-headline gap-2 group/btn hover:bg-primary hover:text-white transition-all shadow-sm">
              عرض الملف الشخصي
              <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white hover:translate-y-[-3px] transition-all">
      {icon}
    </Link>
  );
}

