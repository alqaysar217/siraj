
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
  FileBadge,
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
    level: "مستوى مبتدئ",
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
    level: "مستوى متوسط",
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
    isFree: false,
    hasCertificate: true,
    status: "الأعلى تقييماً",
    image: "design-course"
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
      
      <section className="pt-32 pb-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              اكتشف مهارات <span className="text-secondary">المستقبل</span>
            </h1>
            <p className="text-lg text-primary/60">
              تصفح مجموعتنا المختارة من الكورسات الاحترافية المصممة لتنقلك من الصفر إلى الاحتراف.
            </p>
          </div>
        </div>
      </section>

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
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span className="font-bold">{filteredCourses.length} كورس متاح وفق خياراتك</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => setViewMode("grid")} className={viewMode === "grid" ? "text-secondary" : ""}>
                <LayoutGrid className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setViewMode("list")} className={viewMode === "list" ? "text-secondary" : ""}>
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className={cn(
            "grid gap-6",
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"
          )}>
            {filteredCourses.map((course) => (
              <CourseListingCard key={course.id} course={course} viewMode={viewMode} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CourseListingCard({ course, viewMode }: { course: any; viewMode: "grid" | "list" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <div className={cn(
      "group bg-white rounded-[20px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-5px] transition-all duration-500 flex text-right",
      viewMode === "grid" ? "flex-col" : "flex-col md:flex-row w-full"
    )}>
      <div className={cn("relative shrink-0", viewMode === "grid" ? "aspect-video" : "aspect-video md:w-64")}>
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover" />
        )}
      </div>
      
      <div className="p-4 space-y-3.5 flex flex-col flex-1">
        <h3 className="font-headline font-bold text-primary leading-tight text-sm h-10 line-clamp-2">{course.title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden">
              {instructorImage?.imageUrl && <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover" />}
            </div>
            <span className="text-[10px] font-bold text-primary">{course.instructor}</span>
          </div>
          <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none text-[9px]">{course.category}</Badge>
        </div>

        <div className="flex items-center justify-between py-2 border-y border-primary/5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[10px] font-bold text-primary">
              <Star className="w-3 h-3 text-secondary fill-current" />
              <span>{course.rating}</span>
            </div>
            <span className="text-[9px] text-primary/60">{course.level}</span>
          </div>
          <div className="text-left">
            <span className="text-sm font-headline font-bold text-primary">
              {mounted ? course.price.toLocaleString() : ""} ريال يمني
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] text-primary/60 bg-primary/5 p-2 rounded-lg">
          <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-secondary" /> {course.duration}</div>
          <div className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-secondary" /> {course.lessons} درس</div>
          <div className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-secondary" /> {course.students} طالب</div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto">
          <Button size="sm" className="w-full h-9 rounded-xl bg-primary hover:bg-secondary text-white font-headline text-[11px]">التفاصيل</Button>
        </Link>
      </div>
    </div>
  );
}
