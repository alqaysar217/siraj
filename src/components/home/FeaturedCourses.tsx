
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, User, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const COURSES = [
  {
    id: "web-1",
    title: "تطوير الويب الشامل - Full Stack",
    category: "تطوير الويب",
    level: "مبتدئ",
    instructor: "م. أحمد علي",
    rating: 4.9,
    students: 1240,
    duration: "45 ساعة",
    price: "45,000 ر.ي",
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
    price: "60,000 ر.ي",
    image: "ai-course",
    badge: "جديد"
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
  const courseImage = PlaceHolderImages.find(img => img.id === course.image);

  return (
    <Card className="group overflow-hidden rounded-2xl border-primary/5 luxury-shadow hover:translate-y-[-5px] transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        {courseImage?.imageUrl && <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />}
        <div className="absolute top-4 left-4">
          <Badge className="bg-secondary text-white font-headline">{course.badge}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-secondary px-2 py-1 bg-secondary/10 rounded-lg">{course.category}</span>
          <div className="flex items-center gap-1 text-xs text-primary/60"><Star className="w-3 h-3 text-secondary fill-current" /> {course.rating}</div>
        </div>
        <h3 className="text-xl font-headline font-bold text-primary mb-4 line-clamp-2 min-h-[3.5rem]">{course.title}</h3>
        <div className="flex items-center gap-4 text-sm text-primary/60">
          <div className="flex items-center gap-1"><User className="w-4 h-4" /> <span>{course.instructor}</span></div>
          <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> <span>{course.duration}</span></div>
        </div>
      </CardContent>
      <CardFooter className="px-6 py-4 border-t bg-background/50 flex items-center justify-between">
        <div className="text-lg font-bold text-primary font-headline">{course.price}</div>
        <Link href={`/courses/${course.id}`}>
          <Button variant="ghost" className="text-secondary font-headline group/btn">التفاصيل <ArrowLeft className="mr-1 w-4 h-4 group-hover:-translate-x-1 transition-transform" /></Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
