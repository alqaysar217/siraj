
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Library, Star, GraduationCap, Award } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const webDevImage = PlaceHolderImages.find(img => img.id === 'web-dev-course');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-5">
        {heroImage?.imageUrl && (
          <Image 
            src={heroImage.imageUrl} 
            alt="decoration" 
            fill 
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
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
              <Link href="/courses">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 h-14 rounded-2xl text-lg font-headline shadow-lg gold-glow transition-all active:scale-95 group">
                  استكشف الكورسات
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/verify">
                <Button size="lg" variant="outline" className="border-primary/20 bg-background/50 hover:bg-primary/5 px-8 h-14 rounded-2xl text-lg font-headline">
                  تحقق من الشهادات
                  <Award className="mr-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary/5">
              <StatItem icon={<Users className="w-5 h-5" />} value="+10,000" label="طالب" />
              <StatItem icon={<BookOpen className="w-5 h-5" />} value="+85" label="كورس" />
              <StatItem icon={<Library className="w-5 h-5" />} value="+120" label="كتاب" />
              <StatItem icon={<Star className="w-5 h-5 text-secondary fill-current" />} value="4.9" label="تقييم المنصة" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary rounded-3xl -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-2xl overflow-hidden">
                {webDevImage?.imageUrl && (
                  <Image 
                    src={webDevImage.imageUrl} 
                    alt="Siraj Learning" 
                    fill 
                    className="object-cover opacity-80"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
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
    <div className="space-y-1 text-center lg:text-right group">
      <h4 className="text-lg md:text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors duration-300">{label}</h4>
      <div className="flex items-center gap-2 justify-center lg:justify-start text-primary/60">
        <div className="text-secondary/70">
          {icon}
        </div>
        <span className="text-sm md:text-base font-bold">{value}</span>
      </div>
    </div>
  );
}
