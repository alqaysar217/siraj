
"use client";

import { useState, useMemo, useEffect } from "react";
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
  BookOpen,
  LayoutGrid,
  List,
  CheckCircle2,
  X,
  ChevronDown,
  SlidersHorizontal
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ALL_COURSES = [
  {
    id: "web-1",
    title: "تطوير الويب الشامل - Full Stack Web Development",
    category: "برمجة",
    level: "مستوى مبتدئ",
    instructor: "م. أحمد علي",
    rating: 4.9,
    students: 1240,
    lessons: 45,
    duration: "45 ساعة",
    price: 45000,
    oldPrice: 54000,
    isFree: false,
    hasCertificate: true,
    status: "الأكثر مبيعاً",
    image: "web-dev-course"
  },
  {
    id: "ai-1",
    title: "أساسيات الذكاء الاصطناعي والتعلم الآلي",
    category: "ذكاء اصطناعي",
    level: "مستوى متوسط",
    instructor: "د. سارة محمود",
    rating: 4.8,
    students: 850,
    lessons: 32,
    duration: "32 ساعة",
    price: 60000,
    oldPrice: 75000,
    isFree: false,
    hasCertificate: true,
    status: "جديد",
    image: "ai-course"
  },
  {
    id: "data-1",
    title: "تحليل البيانات باستخدام Python والتحليل الإحصائي",
    category: "تحليل بيانات",
    level: "مستوى مبتدئ",
    instructor: "خالد السعيد",
    rating: 4.9,
    students: 1500,
    lessons: 30,
    duration: "30 ساعة",
    price: 0,
    isFree: true,
    hasCertificate: true,
    status: "الأكثر مبيعاً",
    image: "hero-bg"
  },
  {
    id: "design-1",
    title: "احتراف تصميم واجهات المستخدم UI/UX الحديثة",
    category: "تصميم",
    level: "مستوى مبتدئ",
    instructor: "ليلى حسن",
    rating: 4.7,
    students: 2100,
    lessons: 28,
    duration: "28 ساعة",
    price: 35000,
    oldPrice: 42000,
    isFree: false,
    hasCertificate: true,
    status: "الأعلى تقييماً",
    image: "design-course"
  }
];

const CATEGORIES = ["الكل", "برمجة", "ذكاء اصطناعي", "تحليل بيانات", "تصميم"];
const PRICE_FILTERS = ["الكل", "مجاني", "مدفوع"];
const CERT_FILTERS = ["الكل", "بشهادة", "بدون شهادة"];
const STATUS_FILTERS = ["الكل", "جديد", "الأكثر مبيعاً", "الأعلى تقييماً"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [activePrice, setActivePrice] = useState("الكل");
  const [activeCert, setActiveCert] = useState("الكل");
  const [activeStatus, setActiveStatus] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "الكل" || course.category === activeCategory;
      const matchesPrice = activePrice === "الكل" || (activePrice === "مجاني" ? course.isFree : !course.isFree);
      const matchesCert = activeCert === "الكل" || (activeCert === "بشهادة" ? course.hasCertificate : !course.hasCertificate);
      const matchesStatus = activeStatus === "الكل" || course.status === activeStatus;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        course.title.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower);
        
      return matchesCategory && matchesPrice && matchesCert && matchesStatus && matchesSearch;
    });
  }, [activeCategory, activePrice, activeCert, activeStatus, searchQuery]);

  const resetFilters = () => {
    setActiveCategory("الكل");
    setActivePrice("الكل");
    setActiveCert("الكل");
    setActiveStatus("الكل");
    setSearchQuery("");
  };

  const activeFiltersCount = [
    activeCategory !== "الكل",
    activePrice !== "الكل",
    activeCert !== "الكل",
    activeStatus !== "الكل"
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      <section className="pt-32 pb-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">
              اكتشف مهارات <span className="text-secondary">المستقبل</span>
            </h1>
            <p className="text-sm md:text-lg text-primary/60">
              تصفح مجموعتنا المختارة من الكورسات الاحترافية المصممة لتنقلك من الصفر إلى الاحتراف.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Main Filter Bar */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Input 
                placeholder="ابحث باسم الكورس، المدرب..." 
                className="h-11 rounded-xl pr-10 border-primary/10 bg-white focus-visible:ring-secondary text-right text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>
            
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="h-11 rounded-xl border-primary/10 gap-2 font-headline bg-white shrink-0">
                    <SlidersHorizontal className="w-4 h-4 text-secondary" />
                    فلاتر متقدمة
                    {activeFiltersCount > 0 && (
                      <Badge className="bg-secondary text-white w-5 h-5 p-0 flex items-center justify-center rounded-full text-[10px]">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] font-body overflow-y-auto">
                  <SheetHeader className="text-right border-b pb-4 mb-6">
                    <SheetTitle className="text-xl font-headline font-bold text-primary">تصفية النتائج</SheetTitle>
                  </SheetHeader>
                  
                  <div className="space-y-8">
                    {/* Category Filter */}
                    <div className="space-y-4">
                      <h4 className="font-headline font-bold text-primary text-sm">مجال الدراسة</h4>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                          <FilterBadge 
                            key={cat} 
                            label={cat} 
                            active={activeCategory === cat} 
                            onClick={() => setActiveCategory(cat)} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Price Filter */}
                    <div className="space-y-4">
                      <h4 className="font-headline font-bold text-primary text-sm">نوع الدفع</h4>
                      <div className="flex flex-wrap gap-2">
                        {PRICE_FILTERS.map((p) => (
                          <FilterBadge 
                            key={p} 
                            label={p} 
                            active={activePrice === p} 
                            onClick={() => setActivePrice(p)} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Certificate Filter */}
                    <div className="space-y-4">
                      <h4 className="font-headline font-bold text-primary text-sm">الشهادة</h4>
                      <div className="flex flex-wrap gap-2">
                        {CERT_FILTERS.map((c) => (
                          <FilterBadge 
                            key={c} 
                            label={c} 
                            active={activeCert === c} 
                            onClick={() => setActiveCert(c)} 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Status Filter */}
                    <div className="space-y-4">
                      <h4 className="font-headline font-bold text-primary text-sm">حالة الكورس</h4>
                      <div className="flex flex-wrap gap-2">
                        {STATUS_FILTERS.map((s) => (
                          <FilterBadge 
                            key={s} 
                            label={s} 
                            active={activeStatus === s} 
                            onClick={() => setActiveStatus(s)} 
                          />
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t flex gap-4">
                      <Button className="flex-1 bg-primary text-white font-headline" onClick={resetFilters}>مسح الكل</Button>
                      <SheetTrigger asChild>
                        <Button className="flex-1 bg-secondary text-white font-headline">تطبيق</Button>
                      </SheetTrigger>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll (Mobile Optimization) */}
      <section className="py-4 border-b bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "whitespace-nowrap px-6 py-2 rounded-full text-xs font-headline transition-all border",
                  activeCategory === cat 
                    ? "bg-secondary text-white border-secondary shadow-md" 
                    : "bg-primary/5 text-primary/60 border-transparent hover:border-primary/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60 text-xs font-bold">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span>تم العثور على {filteredCourses.length} كورس</span>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={() => setViewMode("grid")} className={cn("h-8 w-8", viewMode === "grid" ? "text-secondary" : "text-primary/30")}>
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setViewMode("list")} className={cn("h-8 w-8", viewMode === "list" ? "text-secondary" : "text-primary/30")}>
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className={cn(
              "grid gap-6",
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            )}>
              {filteredCourses.map((course) => (
                <CourseListingCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary/20" />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary mb-2">لا توجد نتائج</h3>
              <p className="text-primary/60 mb-8">لم نجد أي كورسات تطابق اختياراتك الحالية.</p>
              <Button onClick={resetFilters} variant="outline" className="font-headline border-primary/10">إعادة تعيين الفلاتر</Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function FilterBadge({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
        active 
          ? "bg-secondary/10 text-secondary border-secondary/20" 
          : "bg-primary/5 text-primary/40 border-transparent hover:border-primary/5"
      )}
    >
      {label}
    </button>
  );
}

function CourseListingCard({ course }: { course: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-4px] transition-all duration-300 flex flex-col text-right h-full">
      <div className="relative aspect-video shrink-0 overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        )}
        {course.status && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-secondary text-white font-headline text-[10px] px-2 py-0.5 border-none">{course.status}</Badge>
          </div>
        )}
      </div>
      
      <div className="p-5 space-y-5 flex flex-col flex-1">
        <h3 className="font-headline font-bold text-primary leading-tight text-sm line-clamp-2 h-10">{course.title}</h3>
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/5">
              {instructorImage?.imageUrl && <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover" />}
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-primary leading-none">{course.instructor}</span>
              <span className="text-[9px] text-primary/40 font-medium leading-none mt-1">مدرب معتمد</span>
            </div>
          </div>
          <Badge className="bg-secondary/10 text-secondary border-none text-[9px] h-5 px-2">{course.category}</Badge>
        </div>

        <div className="flex items-center justify-between py-3 border-y border-primary/5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-[11px] font-bold text-secondary">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{course.rating}</span>
            </div>
            <span className="text-[10px] text-primary/40 font-medium">{course.level}</span>
          </div>
          <div className="text-left flex flex-col items-end">
            {course.oldPrice && (
              <span className="text-[9px] text-primary/30 line-through leading-none mb-1">{mounted ? course.oldPrice.toLocaleString() : ""} ر.ي</span>
            )}
            <span className="text-sm font-headline font-bold text-secondary leading-none">
              {course.price === 0 ? "مجاني" : mounted ? `${course.price.toLocaleString()} ر.ي` : ""}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 text-[9px] text-primary/50 bg-primary/5 p-2 rounded-xl font-bold text-center">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-3 h-3 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-primary/10">
            <BookOpen className="w-3 h-3 text-secondary" />
            <span>{course.lessons} درس</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <User className="w-3 h-3 text-secondary" />
            <span>{course.students} طالب</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto">
          <Button size="sm" className="w-full h-10 rounded-xl bg-primary hover:bg-secondary text-white font-headline text-xs transition-colors">تفاصيل الكورس</Button>
        </Link>
      </div>
    </div>
  );
}
