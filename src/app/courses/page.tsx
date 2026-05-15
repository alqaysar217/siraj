
"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  User, 
  ArrowLeft,
  BookOpen,
  LayoutGrid,
  List,
  CheckCircle,
  FileBadge,
  X,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const CATEGORIES = ["الكل", "برمجة", "تحليل بيانات", "محاسبة", "تصميم", "ذكاء اصطناعي", "أمن سيبراني", "إدارة أعمال"];
const STATUS_FILTERS = ["الكل", "الأكثر مبيعاً", "جديد", "الأعلى تقييماً"];
const PRICE_FILTERS = ["الكل", "مجاني", "مدفوع"];
const CERTIFICATE_FILTERS = ["الكل", "شهادة اتمام", "بدون شهادة"];

const ALL_COURSES = [
  {
    id: "web-1",
    title: "تطوير الويب الشامل - Full Stack Web Development",
    category: "برمجة",
    level: "مبتدئ",
    instructor: "م. أحمد علي",
    rating: 4.9,
    students: 1240,
    lessons: 45,
    duration: "45 ساعة",
    price: 45000,
    isFree: false,
    hasCertificate: true,
    status: "الأكثر مبيعاً",
    image: "web-dev-course"
  },
  {
    id: "ai-1",
    title: "أساسيات الذكاء الاصطناعي والتعلم الآلي",
    category: "ذكاء اصطناعي",
    level: "متوسط",
    instructor: "د. سارة محمود",
    rating: 4.8,
    students: 850,
    lessons: 32,
    duration: "32 ساعة",
    price: 60000,
    isFree: false,
    hasCertificate: true,
    status: "جديد",
    image: "ai-course"
  },
  {
    id: "data-1",
    title: "تحليل البيانات باستخدام Python والتحليل الإحصائي",
    category: "تحليل بيانات",
    level: "مبتدئ",
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
    level: "مبتدئ",
    instructor: "ليلى حسن",
    rating: 4.7,
    students: 2100,
    lessons: 28,
    duration: "28 ساعة",
    price: 35000,
    isFree: false,
    hasCertificate: true,
    status: "الأعلى تقييماً",
    image: "design-course"
  },
  {
    id: "acc-1",
    title: "المحاسبة المالية المتقدمة لغير المحاسبين",
    category: "محاسبة",
    level: "مبتدئ",
    instructor: "أحمد المنصور",
    rating: 4.6,
    students: 420,
    lessons: 15,
    duration: "15 ساعة",
    price: 25000,
    isFree: false,
    hasCertificate: false,
    status: "جديد",
    image: "book-1"
  },
  {
    id: "cyber-1",
    title: "الأمن السيبراني والتحقيق الرقمي المتقدم",
    category: "أمن سيبراني",
    level: "متقدم",
    instructor: "عمر الفاروق",
    rating: 4.9,
    students: 540,
    lessons: 40,
    duration: "40 ساعة",
    price: 55000,
    isFree: false,
    hasCertificate: true,
    status: "الأكثر مبيعاً",
    image: "cyber-course"
  }
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [priceFilter, setPriceFilter] = useState("الكل");
  const [certFilter, setCertFilter] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "الكل" || course.category === activeCategory;
      const matchesStatus = statusFilter === "الكل" || course.status === statusFilter;
      const matchesPrice = priceFilter === "الكل" || (priceFilter === "مجاني" ? course.isFree : !course.isFree);
      const matchesCert = certFilter === "الكل" || (certFilter === "شهادة اتمام" ? course.hasCertificate : !course.hasCertificate);
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        course.title.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower);

      return matchesCategory && matchesStatus && matchesPrice && matchesCert && matchesSearch;
    });
  }, [activeCategory, statusFilter, priceFilter, certFilter, searchQuery]);

  const activeFiltersCount = [
    activeCategory !== "الكل",
    statusFilter !== "الكل",
    priceFilter !== "الكل",
    certFilter !== "الكل"
  ].filter(Boolean).length;

  const resetFilters = () => {
    setActiveCategory("الكل");
    setStatusFilter("الكل");
    setPriceFilter("الكل");
    setCertFilter("الكل");
    setSearchQuery("");
  };

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-8 bg-primary/5">
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

      {/* Modern Search & Collapsible Filters */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm transition-all">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Input 
                  placeholder="ابحث باسم الكورس، المدرب، أو المجال..." 
                  className="h-12 rounded-2xl pr-12 border-primary/10 bg-white focus-visible:ring-secondary text-right"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
              </div>
              
              <Button 
                variant={isFiltersOpen ? "secondary" : "outline"}
                className={cn(
                  "h-12 rounded-2xl gap-2 font-headline px-6 shrink-0 border-primary/10",
                  activeFiltersCount > 0 && !isFiltersOpen && "border-secondary/50 text-secondary"
                )}
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">تصفية</span>
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="mr-1 h-5 min-w-5 flex items-center justify-center rounded-full p-0 bg-secondary text-white border-none text-[10px]">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Collapsible Filter Grid */}
            <div className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isFiltersOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            )}>
              <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 space-y-6">
                <div className="flex items-center justify-between">
                   <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                     <Filter className="w-4 h-4 text-secondary" />
                     خيارات التصفية المتقدمة
                   </h3>
                   {activeFiltersCount > 0 && (
                     <Button variant="ghost" size="sm" onClick={resetFilters} className="text-primary/40 text-xs hover:text-destructive">
                       إعادة تعيين الكل
                     </Button>
                   )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Category Select */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-primary/40 mr-2 uppercase">المجال التعليمي</label>
                    <Select value={activeCategory} onValueChange={setActiveCategory}>
                      <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white shadow-sm">
                        <SelectValue placeholder="اختر المجال" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status Select */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-primary/40 mr-2 uppercase">تصنيف الكورسات</label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white shadow-sm">
                        <SelectValue placeholder="اختر التصنيف" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_FILTERS.map(status => <SelectItem key={status} value={status}>{status}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Select */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-primary/40 mr-2 uppercase">نوع السعر</label>
                    <Select value={priceFilter} onValueChange={setPriceFilter}>
                      <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white shadow-sm">
                        <SelectValue placeholder="الكل" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRICE_FILTERS.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Certificate Select */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-primary/40 mr-2 uppercase">الشهادة</label>
                    <Select value={certFilter} onValueChange={setCertFilter}>
                      <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white shadow-sm">
                        <SelectValue placeholder="الكل" />
                      </SelectTrigger>
                      <SelectContent>
                        {CERTIFICATE_FILTERS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span className="font-bold">{filteredCourses.length} كورس متاح وفق خياراتك</span>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn("rounded-xl transition-all", viewMode === "grid" ? "text-secondary bg-secondary/10 shadow-sm" : "text-primary/40")}
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn("rounded-xl transition-all", viewMode === "list" ? "text-secondary bg-secondary/10 shadow-sm" : "text-primary/40")}
                onClick={() => setViewMode("list")}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className={cn(
              "grid gap-6",
              viewMode === "grid" 
                ? "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" 
                : "grid-cols-1"
            )}>
              {filteredCourses.map((course) => (
                <CourseListingCard key={course.id} course={course} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-10 h-10 text-primary/20" />
              </div>
              <h3 className="text-xl font-headline font-bold text-primary">لم نجد أي نتائج</h3>
              <p className="text-primary/40">حاول البحث بكلمات مختلفة أو تغيير خيارات التصفية.</p>
              <Button variant="outline" onClick={resetFilters}>إعادة تعيين الكل</Button>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">© 2024 سراج - جميع الحقوق محفوظة لمنصة سراج.</p>
        </div>
      </footer>
    </main>
  );
}

function CourseListingCard({ course, viewMode }: { course: any; viewMode: "grid" | "list" }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <div className={cn(
      "group bg-white rounded-[20px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-5px] transition-all duration-500 flex text-right",
      viewMode === "grid" ? "flex-col h-full" : "flex-col md:flex-row h-auto w-full"
    )}>
      {/* Thumbnail */}
      <div className={cn(
        "relative overflow-hidden shrink-0",
        viewMode === "grid" ? "aspect-video w-full" : "aspect-video md:aspect-auto md:w-64"
      )}>
        {courseImage?.imageUrl ? (
          <Image 
            src={courseImage.imageUrl} 
            alt={course.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-primary/5 flex items-center justify-center">
             <BookOpen className="w-10 h-10 text-primary/10" />
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5 scale-90 origin-top-right">
          <Badge className="bg-secondary text-white border-none shadow-lg">{course.status}</Badge>
          {course.hasCertificate && (
            <Badge className="bg-primary/80 text-white border-none gap-1 py-1">
              <FileBadge className="w-3 h-3" />
              شهادة
            </Badge>
          )}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-4 space-y-3.5 flex flex-col flex-1">
        
        {/* Row 1: Course Title */}
        <h3 className={cn(
          "font-headline font-bold text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2",
          viewMode === "grid" ? "text-sm h-10" : "text-lg md:text-xl h-auto"
        )}>
          {course.title}
        </h3>

        {/* Row 2: Instructor Photo/Name + Category */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-primary/5">
              {instructorImage?.imageUrl && (
                <Image src={instructorImage.imageUrl} alt={course.instructor} fill className="object-cover" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-primary">{course.instructor}</span>
              <span className="text-[8px] text-primary/40">مدرب معتمد</span>
            </div>
          </div>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none text-[9px] px-2 h-5">
            {course.category}
          </Badge>
        </div>

        {/* Row 3: Rating + Level + Price */}
        <div className="flex items-center justify-between py-2 border-y border-primary/5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[10px] font-bold text-primary">
              <Star className="w-3 h-3 text-secondary fill-current" />
              <span>{course.rating}</span>
            </div>
            <div className="w-px h-2.5 bg-primary/10" />
            <span className="text-[9px] text-primary/60 font-medium">
              {course.level}
            </span>
          </div>
          <div className="text-left">
            {course.isFree ? (
              <span className="text-sm font-headline font-bold text-green-600">مجاني</span>
            ) : (
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[8px] text-primary/30 line-through">
                  {isMounted ? (course.price * 1.2).toLocaleString() : ""}
                </span>
                <span className="text-sm font-headline font-bold text-primary">
                  {isMounted ? course.price.toLocaleString() : ""} ر.س
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Row 4: Stats (Hours, Lessons, Students) */}
        <div className="flex items-center justify-between text-[10px] text-primary/60 bg-primary/5 p-2 rounded-lg border border-primary/5">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span className="font-bold">{course.duration.replace(' ساعة', 'س')}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            <span className="font-bold">{course.lessons}د</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-secondary" />
            <span className="font-bold">{course.students}ط</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-auto pt-1">
          <Link href={`/courses/${course.id}`} className="w-full">
            <Button size="sm" className="w-full h-9 rounded-xl bg-primary hover:bg-secondary text-white font-headline gap-2 group/btn shadow-sm transition-all active:scale-95 text-[11px]">
              التفاصيل
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
