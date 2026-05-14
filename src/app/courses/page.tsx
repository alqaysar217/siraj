
"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  User, 
  ArrowLeft,
  BookOpen,
  LayoutGrid,
  List
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = ["الكل", "تطوير الويب", "الذكاء الاصطناعي", "التصميم", "الأمن السيبراني", "إدارة الأعمال"];

const ALL_COURSES = [
  {
    id: "web-1",
    title: "تطوير الويب الشامل - Full Stack",
    category: "تطوير الويب",
    level: "مبتدئ",
    instructor: "م. أحمد علي",
    rating: 4.9,
    students: 1240,
    duration: "45 ساعة",
    price: "45,000 ريال",
    image: "web-dev-course",
    badge: "الأكثر مبيعاً"
  },
  {
    id: "ai-1",
    title: "أساسيات الذكاء الاصطناعي والتعلم الآلي",
    category: "الذكاء الاصطناعي",
    level: "متوسط",
    instructor: "د. سارة محمود",
    rating: 4.8,
    students: 850,
    duration: "32 ساعة",
    price: "60,000 ريال",
    image: "ai-course",
    badge: "جديد"
  },
  {
    id: "design-1",
    title: "احتراف تصميم واجهات المستخدم UI/UX",
    category: "التصميم",
    level: "مبتدئ",
    instructor: "ليلى حسن",
    rating: 4.7,
    students: 2100,
    duration: "28 ساعة",
    price: "35,000 ريال",
    image: "design-course",
    badge: "الأعلى تقييماً"
  },
  {
    id: "cyber-1",
    title: "الأمن السيبراني والتحقيق الرقمي",
    category: "الأمن السيبراني",
    level: "متقدم",
    instructor: "خالد المنصور",
    rating: 4.9,
    students: 540,
    duration: "40 ساعة",
    price: "55,000 ريال",
    image: "cyber-course",
    badge: "احترافي"
  },
  {
    id: "business-1",
    title: "إدارة المشاريع الرشيقة Agile",
    category: "إدارة الأعمال",
    level: "متوسط",
    instructor: "أمل السعيد",
    rating: 4.6,
    students: 920,
    duration: "20 ساعة",
    price: "30,000 ريال",
    image: "hero-bg",
    badge: "مطلوب"
  }
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = activeCategory === "الكل" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              اكتشف مهارات <span className="text-secondary">المستقبل</span>
            </h1>
            <p className="text-lg text-primary/60">
              تصفح مجموعتنا المختارة من الكورسات الاحترافية المصممة لتنقلك من الصفر إلى الاحتراف في سوق العمل.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-[72px] z-40 bg-background/80 backdrop-blur-md border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar w-full lg:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-headline whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                    : "bg-white border border-primary/5 text-primary/60 hover:bg-primary/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full lg:w-96">
              <Input 
                placeholder="ابحث عن كورس محدد..." 
                className="h-12 rounded-2xl pr-12 border-primary/10 bg-white focus-visible:ring-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60">
              <BookOpen className="w-5 h-5" />
              <span className="font-bold">{filteredCourses.length} كورس متاح</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-xl text-secondary bg-secondary/10"><LayoutGrid className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-xl text-primary/40"><List className="w-5 h-5" /></Button>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCourses.map((course) => (
                <CourseListingCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-10 h-10 text-primary/20" />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary">لم نجد أي نتائج</h3>
              <p className="text-primary/40">حاول البحث بكلمات مختلفة أو تغيير التصنيف.</p>
              <Button variant="outline" onClick={() => {setActiveCategory("الكل"); setSearchQuery("");}}>عرض الكل</Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">© 2024 SIRAJ.IO - جميع الحقوق محفوظة لمنصة سراج.</p>
        </div>
      </footer>
    </main>
  );
}

function CourseListingCard({ course }: { course: any }) {
  const courseImage = PlaceHolderImages.find(img => img.id === course.image);

  return (
    <div className="group bg-white rounded-[24px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        {courseImage?.imageUrl && (
          <Image 
            src={courseImage.imageUrl} 
            alt={course.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute top-3 left-3">
          <Badge className="bg-secondary text-white border-none shadow-lg">{course.badge}</Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded-md">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-primary/40">
            <Star className="w-3 h-3 text-secondary fill-current" />
            <span className="font-bold text-primary/80">{course.rating}</span>
            <span>({course.students})</span>
          </div>
        </div>

        <h3 className="text-lg font-headline font-bold text-primary leading-snug line-clamp-2 h-14 group-hover:text-secondary transition-colors">
          {course.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-primary/60 border-b border-primary/5 pb-4">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-y-0.5">
            <p className="text-xs text-primary/40 line-through">65,000 ريال</p>
            <p className="text-xl font-headline font-bold text-primary">{course.price}</p>
          </div>
          <Link href={`/courses/${course.id}`}>
            <Button size="icon" className="rounded-xl bg-primary hover:bg-secondary group/btn">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
