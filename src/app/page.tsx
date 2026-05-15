
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  Shield, 
  Zap, 
  Globe, 
  Heart, 
  Laptop, 
  Bot, 
  Palette, 
  Lock, 
  BarChart3, 
  Banknote 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureItem 
              icon={<Shield className="w-8 h-8 text-secondary" />} 
              title="جودة معتمدة" 
              description="محتوى تعليمي عالي الجودة مُعد من قبل خبراء مختصين في مجالاتهم."
            />
            <FeatureItem 
              icon={<Zap className="w-8 h-8 text-secondary" />} 
              title="تطبيق عملي" 
              description="نركز على التطبيق العملي والمشاريع الحقيقية لضمان جاهزيتك للعمل."
            />
            <FeatureItem 
              icon={<Globe className="w-8 h-8 text-secondary" />} 
              title="هوية عالمية" 
              description="تجربة مستخدم عالمية تليق بالطلاب العرب الطموحين."
            />
            <FeatureItem 
              icon={<Heart className="w-8 h-8 text-secondary" />} 
              title="دعم مستمر" 
              description="فريقنا دائماً معك للإجابة على تساؤلاتك ومساعدتك في مسيرتك."
            />
          </div>
        </div>
      </section>

      <FeaturedCourses />

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">مجالاتنا التعليمية</h2>
            <p className="text-primary/60 max-w-xl mx-auto">نغطي أهم التخصصات المطلوبة في سوق العمل الحديث.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard title="تطوير الويب" courses={24} icon={<Laptop className="w-8 h-8" />} />
            <CategoryCard title="الذكاء الاصطناعي" courses={12} icon={<Bot className="w-8 h-8" />} />
            <CategoryCard title="التصميم الإبداعي" courses={18} icon={<Palette className="w-8 h-8" />} />
            <CategoryCard title="الأمن السيبراني" courses={9} icon={<Lock className="w-8 h-8" />} />
            <CategoryCard title="إدارة الأعمال" courses={15} icon={<BarChart3 className="w-8 h-8" />} />
            <CategoryCard title="المحاسبة والمالية" courses={11} icon={<Banknote className="w-8 h-8" />} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[32px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-10" />
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">جاهز لبدء رحلتك؟</h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">انضم إلى آلاف الطلاب الذين غيروا مسارهم المهني مع سراج. سجل اليوم واحصل على وصول غير محدود لأفضل الكورسات.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 rounded-2xl font-headline text-lg">سجل الآن مجاناً</Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white px-10 rounded-2xl font-headline text-lg">تحدث مع مستشار</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <Image src="/siraj.png" alt="سراج" fill className="object-cover" />
                </div>
                <span className="text-xl font-headline font-bold">سراج</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">منصة سراج هي شركة تعليمية تقنية عربية رائدة تهدف لتقديم تعليم نوعي وحديث يساعد الشباب العربي على التفوق في سوق العمل العالمي.</p>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-6">روابط سريعة</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">الكورسات</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">المسارات التعليمية</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">الكتب التعليمية</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">التحقق من الشهادات</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-6">الدعم والخدمات</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">الشروط والأحكام</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-6">النشرة الإخبارية</h4>
              <p className="text-white/60 text-sm mb-4">اشترك ليصلك جديد الكورسات والخصومات الحصرية.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full outline-none focus:border-secondary transition-colors" />
                <Button size="sm" className="bg-secondary hover:bg-secondary/90">اشترك</Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
            <p>© 2024 سراج - جميع الحقوق محفوظة لمنصة سراج.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center md:text-right space-y-4">
      <div className="mx-auto md:mr-0 w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center border border-secondary/10">
        {icon}
      </div>
      <h3 className="text-xl font-headline font-bold text-primary">{title}</h3>
      <p className="text-sm text-primary/60 leading-relaxed">{description}</p>
    </div>
  );
}

function CategoryCard({ title, courses, icon }: { title: string; courses: number; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-primary/5 luxury-shadow p-8 rounded-3xl hover:border-secondary/20 hover:translate-y-[-4px] transition-all cursor-pointer group text-right">
      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/40 group-hover:bg-secondary/10 group-hover:text-secondary transition-all mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-headline font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-primary/40">{courses} دورة تدريبية</p>
    </div>
  );
}
