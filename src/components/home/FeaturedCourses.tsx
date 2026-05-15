
"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, User, ArrowLeft, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const COURSES = [
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
    image: "web-dev-course",
    status: "الأكثر مبيعاً"
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
    image: "ai-course",
    status: "جديد"
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="text-center md:text-right">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">الكورسات المميزة</h2>
            <p className="text-primary/60 max-w-xl">اختر من بين مئات الدورات التدريبية المنسقة بعناية لتبدأ رحلتك التعليمية اليوم.</p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5 font-headline">عرض جميع الكورسات</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: any }) {
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
            <Users className="w-3.5 h-3.5 text-secondary" />
            <span>{mounted ? course.students.toLocaleString('en-US') : ""}</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`} className="mt-auto pt-2">
          <Button size="sm" className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-white font-headline text-sm transition-all active:scale-[0.98] shadow-md hover:shadow-lg">تفاصيل الكورس</Button>
        </Link>
      </div>
    </div>
  );
}
