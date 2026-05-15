
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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

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

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter(course => {
      const matchesCategory = activeCategory === "الكل" || course.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        course.title.toLowerCase().includes(searchLower) ||
        course.instructor.toLowerCase().includes(searchLower) ||
        course.category.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="relative max-w-2xl mx-auto md:mr-0">
            <Input 
              placeholder="ابحث باسم الكورس، المدرب..." 
              className="h-10 rounded-xl pr-10 border-primary/10 bg-white focus-visible:ring-secondary text-right text-xs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/30 w-4 h-4" />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-primary/60 text-xs font-bold">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span>{filteredCourses.length} كورس متاح</span>
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

          <div className={cn(
            "grid gap-4",
            viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"
          )}>
            {filteredCourses.map((course) => (
              <CourseListingCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CourseListingCard({ course }: { course: any }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const courseImage = PlaceHolderImages.find(img => img.id === course.image);
  const instructorImage = PlaceHolderImages.find(img => img.id === 'instructor-1');

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-4px] transition-all duration-300 flex flex-col text-right">
      <div className="relative aspect-video shrink-0 overflow-hidden">
        {courseImage?.imageUrl && (
          <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
        )}
      </div>
      
      <div className="p-4 space-y-4 flex flex-col flex-1">
        {/* السطر الأول: العنوان */}
        <h3 className="font-headline font-bold text-primary leading-tight text-xs h-9 line-clamp-2">{course.title}</h3>
        
        {/* السطر الثاني: المدرب والمجال */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-primary/5">
              {instructorImage?.imageUrl && <Image src={instructorImage.imageUrl} alt="Instructor" fill className="object-cover" />}
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-primary leading-none">{course.instructor}</span>
              <span className="text-[7px] text-primary/40 font-medium leading-none mt-0.5">مدرب معتمد</span>
            </div>
          </div>
          <Badge className="bg-secondary/10 text-secondary border-none text-[8px] h-4 px-1.5">{course.category}</Badge>
        </div>

        {/* السطر الثالث: التقييم، المستوى والسعر */}
        <div className="flex items-center justify-between py-2 border-y border-primary/5">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5 text-[9px] font-bold text-secondary">
              <Star className="w-3 h-3 fill-current" />
              <span>{course.rating}</span>
            </div>
            <span className="text-[8px] text-primary/40 font-medium">{course.level}</span>
          </div>
          <div className="text-left flex flex-col items-end">
            {course.oldPrice && (
              <span className="text-[8px] text-primary/30 line-through leading-none">{mounted ? course.oldPrice.toLocaleString() : ""} ر.ي</span>
            )}
            <span className="text-[10px] font-headline font-bold text-secondary leading-none">
              {course.price === 0 ? "مجاني" : mounted ? `${course.price.toLocaleString()} ر.ي` : ""}
            </span>
          </div>
        </div>

        {/* السطر الأخير: الإحصائيات الفنية */}
        <div className="flex items-center justify-between text-[8px] text-primary/50 bg-primary/5 p-1.5 rounded-lg font-bold">
          <div className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" /> {course.duration}</div>
          <div className="flex items-center gap-1"><BookOpen className="w-2.5 h-2.5" /> {course.lessons} درس</div>
          <div className="flex items-center gap-1"><User className="w-2.5 h-2.5" /> {course.students}</div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto">
          <Button size="sm" className="w-full h-8 rounded-lg bg-primary hover:bg-secondary text-white font-headline text-[10px]">تفاصيل الكورس</Button>
        </Link>
      </div>
    </div>
  );
}
