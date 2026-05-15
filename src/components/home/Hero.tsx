import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Library, Star, Award, MessageCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const webDevImage = PlaceHolderImages.find(img => img.id === 'web-dev-course');

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary/5">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-5 py-2 rounded-full border border-secondary/20 shadow-sm">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-xs md:text-sm font-bold font-headline">أنر طريقك نحو الاحتراف الحقيقي</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-headline font-bold text-primary leading-[1.1]">
              بوابة الشباب العربي <br />
              <span className="text-secondary text-glow">للمستقبل الرقمي</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              منصة سراج تقدم لك تعليماً عملياً مبنياً على احتياجات سوق العمل. اكتسب مهارات الغد مع خبراء الصناعة في بيئة تعليمية فاخرة وحديثة.
            </p>

            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <Link href="/courses">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-[24px] text-xl font-headline shadow-2xl gold-glow transition-all active:scale-95 group">
                  استكشف الكورسات
                  <ArrowLeft className="mr-3 w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-secondary text-secondary bg-white hover:bg-secondary/5 px-10 h-16 rounded-[24px] text-xl font-headline shadow-xl transition-all group">
                تواصل مع مستشار
                <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-primary/10">
              <StatItem icon={<Users className="w-6 h-6" />} value="+10,000" label="طالب" />
              <StatItem icon={<BookOpen className="w-6 h-6" />} value="+85" label="كورس" />
              <StatItem icon={<Library className="w-6 h-6" />} value="+120" label="كتاب" />
              <StatItem icon={<Star className="w-6 h-6 text-secondary fill-current" />} value="4.9" label="تقييم المنصة" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[550px] mx-auto group">
              <div className="absolute inset-0 bg-secondary/20 rounded-[60px] rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary rounded-[60px] -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-[0_20px_50px_rgba(42,18,11,0.2)] overflow-hidden border-8 border-white">
                {webDevImage?.imageUrl && (
                  <Image 
                    src={webDevImage.imageUrl} 
                    alt="Siraj Learning" 
                    fill 
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
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
    <div className="space-y-2 text-center lg:text-right group">
      <div className="flex items-center gap-3 justify-center lg:justify-start text-primary/40 font-bold">
        <div className="text-secondary/80 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-sm md:text-base">{label}</span>
      </div>
      <h4 className="text-2xl md:text-3xl font-headline font-bold text-primary">{value}</h4>
    </div>
  );
}
