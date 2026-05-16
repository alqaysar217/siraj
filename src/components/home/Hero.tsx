import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, BookOpen, Library, Star, Award, MessageCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-primary/5">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-secondary/20 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
              <Star className="w-3.5 h-3.5 md:w-4 h-4 fill-current" />
              <span className="text-[10px] md:text-sm font-bold font-headline">أنر طريقك نحو الاحتراف الحقيقي</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-headline font-bold text-primary leading-[1.2] lg:leading-[1.1] animate-in fade-in slide-in-from-right-4 duration-1000">
              بوابة الشباب العربي <br />
              <span className="text-secondary text-glow">للمستقبل الرقمي</span>
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-primary/70 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium animate-in fade-in slide-in-from-right-6 duration-1000 delay-200">
              منصة سراج تقدم لك تعليماً عملياً مبنياً على احتياجات سوق العمل. اكتسب مهارات الغد مع خبراء الصناعة في بيئة تعليمية فاخرة وحديثة، من حضرموت إلى العالم.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 md:gap-6 justify-center lg:justify-start pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <Link href="/courses" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white px-8 md:px-12 h-14 md:h-16 rounded-[20px] md:rounded-[24px] text-lg md:text-xl font-headline shadow-2xl gold-glow transition-all active:scale-95 group">
                  استكشف الكورسات
                  <ArrowLeft className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-secondary text-secondary bg-white hover:bg-secondary/5 px-8 md:px-10 h-14 md:h-16 rounded-[20px] md:rounded-[24px] text-lg md:text-xl font-headline shadow-xl transition-all group">
                تواصل مع مستشار
                <MessageCircle className="mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 pt-10 border-t border-primary/10 animate-in fade-in duration-1000 delay-700">
              <StatItem icon={<Users className="w-5 h-5 md:w-6 md:h-6" />} value="+10,000" label="طالب" />
              <StatItem icon={<BookOpen className="w-5 h-5 md:w-6 md:h-6" />} value="+85" label="كورس" />
              <StatItem icon={<Library className="w-5 h-5 md:w-6 md:h-6" />} value="+120" label="كتاب" />
              <StatItem icon={<Star className="w-5 h-5 md:w-6 md:h-6 text-secondary fill-current" />} value="4.9" label="تقييم المنصة" />
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-[320px] md:max-w-[550px] mx-auto group animate-in fade-in zoom-in-95 duration-1000">
              <div className="absolute inset-0 bg-secondary/20 rounded-[40px] md:rounded-[60px] rotate-6 group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary rounded-[40px] md:rounded-[60px] -rotate-3 group-hover:-rotate-6 transition-transform duration-700 shadow-[0_20px_50px_rgba(42,18,11,0.2)] overflow-hidden border-4 md:border-8 border-white">
                <Image 
                  src="/home.png" 
                  alt="Siraj Learning" 
                  fill 
                  className="object-cover"
                  priority
                />
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
    <div className="space-y-1 md:space-y-2 text-center lg:text-right group">
      <div className="flex items-center gap-2 justify-center lg:justify-start text-primary/40 font-bold">
        <div className="text-secondary/80 group-hover:scale-110 transition-transform scale-90 md:scale-100">
          {icon}
        </div>
        <span className="text-[10px] md:text-base">{label}</span>
      </div>
      <h4 className="text-xl md:text-3xl font-headline font-bold text-primary">{value}</h4>
    </div>
  );
}