import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Users, BookMarked, Award, Star, GraduationCap } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5">
        <Image 
          src={heroImage?.imageUrl || ""} 
          alt="decoration" 
          fill 
          className="object-cover"
          data-ai-hint={heroImage?.imageHint}
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[800px] h-[600px] bg-secondary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 text-center lg:text-right">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full border border-secondary/20 animate-fade-in">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">بوابتك لمستقبل تقني احترافي</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary leading-tight">
              أنر طريقك نحو <br />
              <span className="text-secondary">الاحتراف الحقيقي</span>
            </h1>
            
            <p className="text-lg text-primary/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              منصة سراج تقدم لك تعليماً عملياً مبنياً على احتياجات سوق العمل. اكتسب مهارات الغد مع خبراء الصناعة في بيئة تعليمية فاخرة وحديثة.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-headline shadow-lg gold-glow transition-all active:scale-95 group">
                استكشف الكورسات
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 bg-background/50 hover:bg-primary/5 px-8 h-14 rounded-2xl text-lg font-headline">
                عرض المسارات
                <Play className="mr-2 w-4 h-4 fill-primary" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary/5">
              <StatItem icon={<Users className="text-secondary" />} value="+10,000" label="طالب نشط" />
              <StatItem icon={<BookMarked className="text-secondary" />} value="+85" label="كورس احترافي" />
              <StatItem icon={<Award className="text-secondary" />} value="+15,000" label="شهادة معتمدة" />
              <StatItem icon={<Star className="text-secondary" />} value="4.9" label="تقييم المنصة" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-2xl overflow-hidden">
                <Image 
                  src={PlaceHolderImages.find(img => img.id === 'web-dev-course')?.imageUrl || ""} 
                  alt="Siraj Learning" 
                  fill 
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-headline font-bold">بدأت دورة جديدة</p>
                      <p className="text-white/60 text-xs">تعلم تطوير الويب الشامل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 justify-center lg:justify-start">
        {icon}
        <span className="text-xl font-bold text-primary">{value}</span>
      </div>
      <p className="text-xs text-primary/60 font-medium">{label}</p>
    </div>
  );
}
