
"use client";

import { useState, useEffect, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  BookOpen, 
  Search,
  ArrowLeft,
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle,
  X,
  Filter
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INSTRUCTORS = [
  {
    id: "inst-1",
    name: "م. أحمد علي",
    title: "Senior Full Stack Developer",
    category: "برمجة",
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
    category: "ذكاء اصطناعي",
    bio: "باحثة في مجال الذكاء اصطناعي، متخصصة في تعلم الآلة وتحليل البيانات الضخمة باستخدام لغة Python والرياضيات التطبيقية.",
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

const SPECIALTIES = ["برمجة", "ذكاء اصطناعي", "تصميم", "بيانات", "إدارة"];

export default function InstructorsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredInstructors = useMemo(() => {
    return INSTRUCTORS.filter((inst) => {
      const matchesSearch = 
        inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inst.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "all" || inst.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />

      {/* Banner Section - Exact 3:1 ratio (1920/640) */}
      <section className="pt-[64px] w-full overflow-hidden bg-white">
        <div className="relative w-full aspect-[3/1]">
           <Image 
             src="/Instructors.png" 
             alt="Instructors Banner" 
             fill 
             className="object-cover object-top"
             priority
           />
        </div>
      </section>

      {/* Search and Filter Section - Centered and Single Row on Mobile */}
      <section className="sticky top-[64px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-row gap-2 items-center justify-center max-w-3xl mx-auto w-full">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="ابحث عن مدرب..." 
                className="w-full h-11 rounded-2xl pr-10 pl-4 border-primary/10 bg-white shadow-sm focus:ring-2 focus:ring-secondary/20 outline-none text-xs font-body transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 w-4 h-4" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/20 hover:text-primary/40 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="w-32 xs:w-44 md:w-56 shrink-0">
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="h-11 rounded-2xl bg-white border-primary/10 shadow-sm focus:ring-secondary text-right font-headline text-primary/70 text-xs px-2">
                  <div className="flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5 text-secondary hidden xs:block" />
                    <SelectValue placeholder="المجال" />
                  </div>
                </SelectTrigger>
                <SelectContent className="font-body" dir="rtl">
                  <SelectItem value="all">كل المجالات</SelectItem>
                  {SPECIALTIES.map(spec => (
                    <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center md:text-right">
             <div className="flex items-center gap-2 text-primary/60 text-xs font-bold">
              <Users className="w-4 h-4 text-secondary" />
              <span>تم العثور على {filteredInstructors.length.toString()} مدرب خبير</span>
            </div>
          </div>

          {filteredInstructors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center">
              {filteredInstructors.map((instructor) => (
                <div key={instructor.id} className="flex justify-center">
                  <InstructorCard instructor={instructor} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/20">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary">لم نجد أي مدربين</h3>
              <p className="text-primary/60">حاول البحث بكلمات أخرى أو تغيير الفلتر.</p>
              <Button 
                variant="outline" 
                className="rounded-xl border-primary/10"
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              >
                إعادة تعيين البحث
              </Button>
            </div>
          )}

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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const instImage = PlaceHolderImages.find(img => img.id === instructor.image);

  return (
    <div className="group bg-white rounded-[40px] border border-primary/5 luxury-shadow hover:translate-y-[-10px] transition-all duration-500 overflow-hidden flex flex-col h-full relative w-full max-w-[380px]">
      <div className="h-28 bg-primary/5 w-full absolute top-0 left-0 -z-10 group-hover:bg-secondary/5 transition-colors" />
      
      <div className="p-6 flex flex-col items-center text-center">
        {/* Large Professional Image */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-secondary/20 rounded-full scale-110 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 shadow-2xl overflow-hidden rounded-full border-4 border-white">
            {instImage?.imageUrl && (
              <Image src={instImage.imageUrl} alt={instructor.name} fill className="object-cover" />
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-1 mb-4">
          <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{instructor.name}</h3>
          <p className="text-[10px] text-secondary font-bold uppercase tracking-wide px-3 py-1 bg-secondary/5 rounded-full inline-block">{instructor.title}</p>
        </div>

        {/* Bio Snippet */}
        <p className="text-xs text-primary/60 leading-relaxed mb-6 line-clamp-2 italic min-h-[3rem] px-2">
          "{instructor.bio}"
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <SocialIcon icon={<Linkedin className="w-4 h-4" />} href={instructor.social.linkedin} />
          <SocialIcon icon={<Instagram className="w-4 h-4" />} href={instructor.social.instagram} />
          <SocialIcon icon={<Facebook className="w-4 h-4" />} href={instructor.social.facebook} />
          <SocialIcon icon={<MessageCircle className="w-4 h-4" />} href={instructor.social.whatsapp} />
        </div>

        {/* Footer Stats & Button */}
        <div className="w-full pt-4 border-t border-primary/5 mt-auto">
          <div className="flex items-center justify-between mb-5 text-[10px] text-primary/40 font-bold px-1">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-secondary fill-current" />
              <span>{instructor.rating.toString()} تقييم</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-secondary/60" />
              <span>{instructor.courses.toString()} دورة</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-secondary/60" />
              <span>{mounted ? instructor.students.toLocaleString('en-US') : ""} طالب</span>
            </div>
          </div>
          <Link href={`/instructors/${instructor.id}`} className="block">
            <Button variant="outline" className="w-full h-11 rounded-2xl border-primary/10 font-headline text-xs gap-2 group/btn hover:bg-primary hover:text-white transition-all shadow-sm">
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
    <Link href={href} className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white hover:translate-y-[-3px] transition-all">
      {icon}
    </Link>
  );
}
