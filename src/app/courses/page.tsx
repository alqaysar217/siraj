
"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Star, 
  Clock, 
  User, 
  BookOpen,
  LayoutGrid,
  List,
  SlidersHorizontal,
  X
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

const CATEGORIES = ["برمجة", "ذكاء اصطناعي", "تحليل بيانات", "تصميم"];
const PRICE_TYPES = ["مجاني", "مدفوع"];
const CERT_STATUS = ["بشهادة", "بدون شهادة"];
const COURSE_STATUS = ["جديد", "الأكثر مبيعاً", "الأعلى تقييماً"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activePrice, setActivePrice] = useState("all");
  const [activeCert, setActiveCert] = useState("all");
  const [activeStatus, setActiveStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "all" || course.category === activeCategory;
      const matchesPrice = activePrice === "all" || (activePrice === "مجاني" ? course.isFree : !course.isFree);
      const matchesCert = activeCert === "all" || (activeCert === "بشهادة" ? course.hasCertificate : !course.hasCertificate);
      const matchesStatus = activeStatus === "all" || course.status === activeStatus;
      
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        course.title.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower);
        
      return matchesCategory && matchesPrice && matchesCert && matchesStatus && matchesSearch;
    });
  }, [activeCategory, activePrice, activeCert, activeStatus, searchQuery]);

  const resetFilters = () => {
    setActiveCategory("all");
    setActivePrice("all");
    setActiveCert("all");
    setActiveStatus("all");
    setSearchQuery("");
  };

  const activeFiltersCount = [
    activeCategory !== "all",
    activePrice !== "all",
    activeCert !== "all",
    activeStatus !== "all"
  ].filter(Boolean).length;

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      {/* Banner Section - Optimized for visibility and aspect ratio */}
      <section className="pt-[92px] w-full overflow-hidden bg-white">
        <div className="relative w-full aspect-[16/7] md:aspect-[16/5]">
           <Image 
             src="/Courses.png" 
             alt="Courses Banner" 
             fill 
             className="object-cover object-top"
             priority
           />
        </div>
      </section>

      {/* Search & Combined Filter Button */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative w-full">
              <Input 
                placeholder="ابحث باسم الكورس أو المجال..." 
                className="h-12 rounded-2xl pr-10 border-primary/10 bg-white focus-visible:ring-secondary text-right text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>
            
            {/* Filter Trigger Button using Dialog */}
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 w-full md:w-auto rounded-2xl border-primary/10 gap-2 font-headline bg-white shrink-0 shadow-sm hover:border-secondary/30 transition-all">
                  <SlidersHorizontal className="w-5 h-5 text-secondary" />
                  تصفية الكورسات
                  {activeFiltersCount > 0 && (
                    <Badge className="bg-secondary text-white w-6 h-6 p-0 flex items-center justify-center rounded-full text-xs font-bold border-none">
                      {activeFiltersCount.toString()}
                    </Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90vw] max-w-[500px] rounded-[32px] p-6 font-body bg-white border-none shadow-2xl">
                <DialogHeader className="text-right border-b pb-4 mb-6">
                  <DialogTitle className="text-2xl font-headline font-bold text-primary">تصفية النتائج</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Category Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary block">مجال الدراسة</label>
                    <Select value={activeCategory} onValueChange={setActiveCategory}>
                      <SelectTrigger className="h-12 rounded-xl bg-primary/5 border-none focus:ring-secondary text-right">
                        <SelectValue placeholder="اختر المجال" />
                      </SelectTrigger>
                      <SelectContent className="font-body" dir="rtl">
                        <SelectItem value="all">كل المجالات</SelectItem>
                        {CATEGORIES.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Price Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary block">نوع الدفع</label>
                    <Select value={activePrice} onValueChange={setActivePrice}>
                      <SelectTrigger className="h-12 rounded-xl bg-primary/5 border-none focus:ring-secondary text-right">
                        <SelectValue placeholder="اختر نوع الدفع" />
                      </SelectTrigger>
                      <SelectContent className="font-body" dir="rtl">
                        <SelectItem value="all">الكل</SelectItem>
                        {PRICE_TYPES.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Certificate Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary block">الشهادة</label>
                    <Select value={activeCert} onValueChange={setActiveCert}>
                      <SelectTrigger className="h-12 rounded-xl bg-primary/5 border-none focus:ring-secondary text-right">
                        <SelectValue placeholder="شهادة إتمام؟" />
                      </SelectTrigger>
                      <SelectContent className="font-body" dir="rtl">
                        <SelectItem value="all">الكل</SelectItem>
                        {CERT_STATUS.map(status => (
                          <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Status Select */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary block">حالة الكورس</label>
                    <Select value={activeStatus} onValueChange={setActiveStatus}>
                      <SelectTrigger className="h-12 rounded-xl bg-primary/5 border-none focus:ring-secondary text-right">
                        <SelectValue placeholder="جديد أو مميز؟" />
                      </SelectTrigger>
                      <SelectContent className="font-body" dir="rtl">
                        <SelectItem value="all">الكل</SelectItem>
                        {COURSE_STATUS.map(s => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-8 flex gap-4 mt-6">
                  <Button variant="outline" className="flex-1 h-12 rounded-xl border-primary/10 font-headline" onClick={() => { resetFilters(); setIsFilterOpen(false); }}>إعادة تعيين</Button>
                  <Button className="flex-1 h-12 rounded-xl bg-secondary text-white font-headline shadow-lg hover:bg-secondary/90" onClick={() => setIsFilterOpen(false)}>تطبيق الفلاتر</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Active Filters Display */}
          {activeFiltersCount > 0 && (
            <div className="mt-4 flex flex-wrap gap-2 animate-in fade-in slide-in-from-top-2">
              <span className="text-xs text-primary/40 flex items-center gap-1 ml-2 self-center">الفلاتر النشطة:</span>
              {activeCategory !== "all" && <ActiveFilterBadge label={activeCategory} onClear={() => setActiveCategory("all")} />}
              {activePrice !== "all" && <ActiveFilterBadge label={activePrice} onClear={() => setActivePrice("all")} />}
              {activeCert !== "all" && <ActiveFilterBadge label={activeCert} onClear={() => setActiveCert("all")} />}
              {activeStatus !== "all" && <ActiveFilterBadge label={activeStatus} onClear={() => setActiveStatus("all")} />}
            </div>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60 text-xs font-bold">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span>تم العثور على {filteredCourses.length.toString()} كورس</span>
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
              "grid gap-8",
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
              <Button onClick={resetFilters} variant="outline" className="font-headline border-primary/10 rounded-xl px-8 h-12">إعادة تعيين الفلاتر</Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function ActiveFilterBadge({ label, onClear }: { label: string, onClear: () => void }) {
  return (
    <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold text-[10px] gap-1 px-3 py-1 hover:bg-secondary/20 transition-colors">
      {label}
      <X className="w-3 h-3 cursor-pointer hover:text-primary transition-colors" onClick={onClear} />
    </Badge>
  );
}

function CourseListingCard({ course }: { course: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <div className="group bg-white rounded-[24px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-6px] transition-all duration-300 flex flex-col text-right h-full">
      <div className="relative aspect-video shrink-0 overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        )}
        {course.status && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-secondary text-white font-headline text-[10px] px-3 py-1 border-none shadow-lg">{course.status}</Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
           <Badge className="bg-black/50 backdrop-blur-md text-white border-none text-[9px] px-2 py-0.5">{course.level}</Badge>
        </div>
      </div>
      
      <div className="p-6 space-y-6 flex flex-col flex-1">
        <h3 className="font-headline font-bold text-primary leading-tight text-base line-clamp-2 h-12">{course.title}</h3>
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/5 shadow-sm">
              {instructorImage?.imageUrl && <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover" />}
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-primary leading-none">{course.instructor}</span>
              <span className="text-[10px] text-primary/40 font-medium leading-none mt-1.5">مدرب معتمد</span>
            </div>
          </div>
          <Badge className="bg-primary/5 text-primary/60 border-none text-[10px] h-6 px-3 rounded-lg">{course.category}</Badge>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-primary/5">
          <div className="flex items-center gap-1 text-sm font-bold text-secondary">
            <Star className="w-4 h-4 fill-current" />
            <span>{course.rating.toString()}</span>
          </div>
          <div className="text-left flex flex-col items-end">
            {course.oldPrice && (
              <span className="text-[10px] text-primary/30 line-through leading-none mb-1.5">{mounted ? course.oldPrice.toLocaleString('en-US') : ""} ر.ي</span>
            )}
            <span className="text-lg font-headline font-bold text-secondary leading-none">
              {course.price === 0 ? "مجاني" : mounted ? `${course.price.toLocaleString('en-US')} ر.ي` : ""}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-[10px] text-primary/50 bg-primary/5 p-3 rounded-2xl font-bold text-center">
          <div className="flex flex-col items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-primary/10">
            <BookOpen className="w-3.5 h-3.5 text-secondary" />
            <span>{course.lessons.toString()} درس</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-secondary" />
            <span>{course.students.toLocaleString('en-US')}</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto pt-2">
          <Button size="sm" className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-white font-headline text-sm transition-all active:scale-[0.98] shadow-md hover:shadow-lg">تفاصيل الكورس</Button>
        </Link>
      </div>
    </div>
  );
}
