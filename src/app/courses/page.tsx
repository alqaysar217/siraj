
"use client";

import { useState, useMemo } from "react";
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
  FileBadge
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CATEGORIES = ["الكل", "برمجة", "تحليل بيانات", "محاسبة", "تصميم", "ذكاء اصطناعي", "أمن سيبراني", "إدارة أعمال"];
const STATUS_FILTERS = ["الكل", "الأكثر مبيعاً", "جديد", "الأعلى تقييماً"];
const PRICE_FILTERS = ["الكل", "مجاني", "مدفوع"];
const CERTIFICATE_FILTERS = ["الكل", "شهادة اتمام", "بدون شهادة"];

const ALL_COURSES = [
  {
    id: "web-1",
    title: "تطوير الويب الشامل - Full Stack",
    category: "برمجة",
    level: "مبتدئ",
    instructor: "م. أحمد علي",
    rating: 4.9,
    students: 1240,
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
    duration: "32 ساعة",
    price: 60000,
    isFree: false,
    hasCertificate: true,
    status: "جديد",
    image: "ai-course"
  },
  {
    id: "data-1",
    title: "تحليل البيانات باستخدام Python",
    category: "تحليل بيانات",
    level: "مبتدئ",
    instructor: "خالد السعيد",
    rating: 4.9,
    students: 1500,
    duration: "30 ساعة",
    price: 0,
    isFree: true,
    hasCertificate: true,
    status: "الأكثر مبيعاً",
    image: "hero-bg"
  },
  {
    id: "design-1",
    title: "احتراف تصميم واجهات المستخدم UI/UX",
    category: "تصميم",
    level: "مبتدئ",
    instructor: "ليلى حسن",
    rating: 4.7,
    students: 2100,
    duration: "28 ساعة",
    price: 35000,
    isFree: false,
    hasCertificate: true,
    status: "الأعلى تقييماً",
    image: "design-course"
  },
  {
    id: "acc-1",
    title: "المحاسبة المالية لغير المحاسبين",
    category: "محاسبة",
    level: "مبتدئ",
    instructor: "أحمد المنصور",
    rating: 4.6,
    students: 420,
    duration: "15 ساعة",
    price: 25000,
    isFree: false,
    hasCertificate: false,
    status: "جديد",
    image: "book-1"
  },
  {
    id: "cyber-1",
    title: "الأمن السيبراني والتحقيق الرقمي",
    category: "أمن سيبراني",
    level: "متقدم",
    instructor: "عمر الفاروق",
    rating: 4.9,
    students: 540,
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

      {/* Advanced Filters & Search */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b py-6 shadow-sm">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Box - Expanded */}
            <div className="relative w-full lg:flex-1">
              <Input 
                placeholder="ابحث باسم الكورس، المدرب، أو المجال التعليمي..." 
                className="h-12 rounded-2xl pr-12 border-primary/10 bg-white focus-visible:ring-secondary text-right"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/30 w-5 h-5" />
            </div>

            {/* View Toggle */}
            <div className="flex gap-2 shrink-0">
              <Button variant="ghost" size="icon" className="rounded-xl text-secondary bg-secondary/10"><LayoutGrid className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-xl text-primary/40"><List className="w-5 h-5" /></Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Category Select */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-primary/40 mr-2 uppercase">المجال التعليمي</label>
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white">
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
                <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white">
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
                <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white">
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
                <SelectTrigger className="h-11 rounded-xl border-primary/10 bg-white">
                  <SelectValue placeholder="الكل" />
                </SelectTrigger>
                <SelectContent>
                  {CERTIFICATE_FILTERS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
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
              <p className="text-primary/40">حاول البحث بكلمات مختلفة أو تغيير خيارات التصفية.</p>
              <Button variant="outline" onClick={() => {
                setActiveCategory("الكل");
                setStatusFilter("الكل");
                setPriceFilter("الكل");
                setCertFilter("الكل");
                setSearchQuery("");
              }}>إعادة تعيين الكل</Button>
            </div>
          )}
        </div>
      </section>

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
    <div className="group bg-white rounded-[24px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden shrink-0">
        {courseImage?.imageUrl && (
          <Image 
            src={courseImage.imageUrl} 
            alt={course.title} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-secondary text-white border-none shadow-lg">{course.status}</Badge>
          {course.hasCertificate && (
            <Badge className="bg-primary/80 text-white border-none gap-1 py-1">
              <FileBadge className="w-3 h-3" />
              شهادة
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-6 space-y-4 flex flex-col flex-1">
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

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="space-y-0.5">
            {course.isFree ? (
              <p className="text-xl font-headline font-bold text-green-600">مجاني</p>
            ) : (
              <>
                <p className="text-xs text-primary/40 line-through">{(course.price * 1.2).toLocaleString()} ريال</p>
                <p className="text-xl font-headline font-bold text-primary">{course.price.toLocaleString()} ريال</p>
              </>
            )}
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
