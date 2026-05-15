
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
  Banknote,
  Briefcase,
  Megaphone,
  CheckCircle2,
  Users,
  Star,
  BookOpen,
  Trophy,
  ArrowLeft,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      <Hero />
      
      {/* 1. المميزات السريعة */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem 
              icon={<Shield className="w-8 h-8 text-secondary" />} 
              title="جودة معتمدة" 
              description="محتوى تعليمي مُعد من قبل خبراء مختصين."
            />
            <FeatureItem 
              icon={<Zap className="w-8 h-8 text-secondary" />} 
              title="تطبيق عملي" 
              description="نركز على المشاريع الحقيقية لضمان الجاهزية."
            />
            <FeatureItem 
              icon={<Globe className="w-8 h-8 text-secondary" />} 
              title="هوية عالمية" 
              description="تجربة مستخدم تليق بالطموح العربي."
            />
            <FeatureItem 
              icon={<Heart className="w-8 h-8 text-secondary" />} 
              title="دعم مستمر" 
              description="فريقنا معك دائماً في كل خطوة."
            />
          </div>
        </div>
      </section>

      {/* 2. مجالاتنا التعليمية */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">استكشف مجالات <span className="text-secondary">المستقبل</span></h2>
            <p className="text-primary/60 max-w-2xl mx-auto">نغطي أهم التخصصات المطلوبة في سوق العمل الحديث بمعايير عالمية.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard title="تطوير الويب" courses={24} icon={<Laptop className="w-8 h-8" />} />
            <CategoryCard title="الذكاء الاصطناعي" courses={12} icon={<Bot className="w-8 h-8" />} />
            <CategoryCard title="الأمن السيبراني" courses={9} icon={<Lock className="w-8 h-8" />} />
            <CategoryCard title="تحليل البيانات" courses={14} icon={<BarChart3 className="w-8 h-8" />} />
            <CategoryCard title="التصميم الإبداعي" courses={18} icon={<Palette className="w-8 h-8" />} />
            <CategoryCard title="إدارة الأعمال" courses={15} icon={<Briefcase className="w-8 h-8" />} />
            <CategoryCard title="المحاسبة والمالية" courses={11} icon={<Banknote className="w-8 h-8" />} />
            <CategoryCard title="التسويق الرقمي" courses={13} icon={<Megaphone className="w-8 h-8" />} />
          </div>
        </div>
      </section>

      {/* 3. الكورسات المميزة */}
      <FeaturedCourses />

      {/* 4. قسم المدربين */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">نخبة المدربين</h2>
              <p className="text-primary/60">تعلم من أفضل الخبراء الممارسين في الصناعة والتقنية.</p>
            </div>
            <Link href="/instructors">
              <Button variant="outline" className="border-primary/10 font-headline">عرض جميع الخبراء</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <InstructorPreviewCard name="م. أحمد علي" title="Senior Web Dev" students="12k" image="instructor-1" />
            <InstructorPreviewCard name="د. سارة محمود" title="AI Expert" students="8k" image="instructor-2" />
            <InstructorPreviewCard name="خالد السعيد" title="Data Scientist" students="5k" image="instructor-1" />
          </div>
        </div>
      </section>

      {/* 5. قسم الكتب التعليمية */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">المكتبة الورقية</h2>
              <p className="text-primary/60">اقتنِ نسختك الورقية الفاخرة من أفضل المراجع العلمية.</p>
            </div>
            <Link href="/books">
              <Button variant="outline" className="border-primary/10 font-headline">تصفح المكتبة</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <BookPreviewCard title="موسوعة الويب الحديثة" price="12,000" image="book-1" />
            <BookPreviewCard title="خوارزميات البيانات" price="8,500" image="book-2" />
            <BookPreviewCard title="أساسيات التصميم" price="9,000" image="book-1" />
            <BookPreviewCard title="ريادة الأعمال" price="11,000" image="book-2" />
          </div>
        </div>
      </section>

      {/* 6. التعريف بالمنصة */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-secondary/10 text-secondary border-none px-4 py-1 rounded-full font-headline">سراج — SIRAJ.IO</Badge>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary leading-tight">بناء مستقبل مهني حقيقي بأسلوب عصري</h2>
                <p className="text-lg text-primary/70 leading-relaxed">منصة تعليمية وخدمية عربية احترافية تجمع بين التعليم الحديث، والخدمات الرقمية، والتطوير المهني في مكان واحد، بهدف تمكين الشباب العربي من اكتساب المهارات الحقيقية وبناء مستقبلهم بثقة.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-primary/5 rounded-[32px] space-y-3">
                  <h4 className="text-xl font-headline font-bold text-secondary">رؤية المنصة</h4>
                  <p className="text-sm text-primary/70 leading-relaxed">أن تصبح سراج واحدة من أبرز المنصات التعليمية والخدمية في العالم العربي، عبر تقديم تعليم عصري يساعد الشباب على دخول سوق العمل بمهارة واحترافية.</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-[32px] space-y-3">
                  <h4 className="text-xl font-headline font-bold text-secondary">رسالة المنصة</h4>
                  <p className="text-sm text-primary/70 leading-relaxed">توفير بيئة تعليمية تجمع بين المعرفة والتطبيق العملي، تمنح المستخدمين تجربة احترافية بأسلوب بسيط وجودة عالية وأسعار مناسبة.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-[48px] p-8 md:p-12 text-white space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-0" />
              <h3 className="text-2xl font-headline font-bold border-b border-white/10 pb-4">أهدافنا الرئيسية</h3>
              <div className="grid gap-4">
                <GoalItem text="تقديم تعليم احترافي بجودة عالية وتطبيقي." />
                <GoalItem text="مساعدة الشباب على اكتساب مهارات مطلوبة في سوق العمل." />
                <GoalItem text="توفير خدمات رقمية وتقنية باحترافية عالية." />
                <GoalItem text="بناء مجتمع عربي يهتم بالتطوير والمعرفة." />
                <GoalItem text="توفير شهادات موثوقة قابلة للتحقق إلكترونيًا." />
                <GoalItem text="ربط التعليم بالتطبيق العملي الحقيقي." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. آراء الطلاب */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-headline font-bold text-primary mb-16">ماذا يقول طلابنا؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard name="أحمد صالح" comment="أفضل استثمار قمت به في حياتي المهنية هو الانضمام لهذه المنصة." role="مطور واجهات" />
            <TestimonialCard name="ليلى محمد" comment="الشرح العملي والمشاريع الحقيقية غيرت نظرتي للبرمجة تماماً." role="مصممة UI/UX" />
            <TestimonialCard name="ياسين علي" comment="دعم فني ممتاز ومحتوى يتحدث باستمرار مع تقنيات السوق." role="محلل بيانات" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden luxury-shadow">
            <div className="absolute top-0 left-0 w-full h-full bg-secondary/10 -z-10" />
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">جاهز لبدء رحلتك؟</h2>
            <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">انضم إلى آلاف الطلاب الذين غيروا مسارهم المهني مع سراج. سجل اليوم واحصل على وصول غير محدود لأفضل الكورسات.</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl font-headline text-xl shadow-2xl gold-glow transition-all active:scale-95">سجل الآن مجاناً</Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary px-10 h-16 rounded-2xl font-headline text-xl transition-all">تواصل مع مستشار</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1">
                  <Image src="/siraj.png" alt="سراج" fill className="object-contain" />
                </div>
                <span className="text-2xl font-headline font-bold tracking-tight">سراج</span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">منصة سراج هي شركة تعليمية تقنية عربية رائدة تهدف لتقديم تعليم نوعي يساعد الشباب العربي على التفوق في سوق العمل العالمي.</p>
              <div className="flex gap-4">
                <SocialIcon icon={<Facebook className="w-5 h-5" />} />
                <SocialIcon icon={<Twitter className="w-5 h-5" />} />
                <SocialIcon icon={<Instagram className="w-5 h-5" />} />
                <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
                <SocialIcon icon={<MessageCircle className="w-5 h-5" />} />
              </div>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-8 text-secondary flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> روابط التعليم
              </h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><Link href="/courses" className="hover:text-secondary transition-colors">الدورات التدريبية</Link></li>
                <li><Link href="/books" className="hover:text-secondary transition-colors">المكتبة الورقية</Link></li>
                <li><Link href="/instructors" className="hover:text-secondary transition-colors">نخبة المدربين</Link></li>
                <li><Link href="/verify" className="hover:text-secondary transition-colors">التحقق من الشهادات</Link></li>
                <li><Link href="/elite" className="hover:text-secondary transition-colors">نادي النخبة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-8 text-secondary flex items-center gap-2">
                <Users className="w-4 h-4" /> الدعم والخدمات
              </h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><Link href="/instructors/join" className="hover:text-secondary transition-colors">كن مدرباً معنا</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">مركز المساعدة</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">اتصل بنا</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors">الشروط والأحكام</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-8 text-secondary flex items-center gap-2">
                <Mail className="w-4 h-4" /> النشرة الإخبارية
              </h4>
              <p className="text-white/60 text-sm mb-6">اشترك ليصلك جديد الكورسات والخصومات الحصرية.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="بريدك الإلكتروني" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full outline-none focus:border-secondary transition-colors" />
                <Button className="bg-secondary hover:bg-secondary/90 h-12">اشترك</Button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-xs font-bold">
            <p>© 2026 سراج — جميع الحقوق محفوظة لمنصة سراج التعليمية والخدمية.</p>
            <div className="flex gap-8">
              <span>SIRAJ.IO — Professional Arabic Platform</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center space-y-3 p-4 group">
      <div className="mx-auto w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center border border-secondary/10 group-hover:bg-secondary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-headline font-bold text-primary">{title}</h3>
      <p className="text-[10px] text-primary/60 leading-relaxed font-bold">{description}</p>
    </div>
  );
}

function CategoryCard({ title, courses, icon }: { title: string; courses: number; icon: React.ReactNode }) {
  return (
    <div className="bg-white border border-primary/5 luxury-shadow p-8 rounded-[32px] hover:border-secondary/20 hover:translate-y-[-4px] transition-all cursor-pointer group text-center">
      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary/40 group-hover:bg-secondary/10 group-hover:text-secondary transition-all mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-lg font-headline font-bold text-primary mb-2">{title}</h3>
      <p className="text-xs text-primary/40 font-bold">{courses} دورة تدريبية</p>
    </div>
  );
}

function GoalItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
      <span className="text-sm text-white/80">{text}</span>
    </div>
  );
}

function InstructorPreviewCard({ name, title, students, image }: { name: string; title: string; students: string; image: string }) {
  const avatar = PlaceHolderImages.find(img => img.id === image);
  return (
    <div className="bg-white rounded-[32px] p-6 border border-primary/5 luxury-shadow text-center space-y-4 group hover:translate-y-[-5px] transition-all">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
        {avatar?.imageUrl && <Image src={avatar.imageUrl} alt={name} fill className="object-cover" />}
      </div>
      <div>
        <h4 className="font-headline font-bold text-primary">{name}</h4>
        <p className="text-xs text-secondary font-bold">{title}</p>
      </div>
      <div className="flex items-center justify-center gap-2 text-[10px] text-primary/40 font-bold border-t pt-4">
        <Users className="w-3 h-3" /> {students} طالب
      </div>
    </div>
  );
}

function BookPreviewCard({ title, price, image }: { title: string; price: string; image: string }) {
  const bookImg = PlaceHolderImages.find(img => img.id === image);
  return (
    <div className="bg-white rounded-[32px] p-4 border border-primary/5 luxury-shadow space-y-4 text-center group">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform">
        {bookImg?.imageUrl && <Image src={bookImg.imageUrl} alt={title} fill className="object-cover" />}
      </div>
      <h4 className="font-headline font-bold text-primary text-sm line-clamp-1">{title}</h4>
      <p className="text-secondary font-bold text-lg">{price} <span className="text-xs">ر.ي</span></p>
    </div>
  );
}

function TestimonialCard({ name, comment, role }: { name: string; comment: string; role: string }) {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow space-y-4 relative">
      <div className="absolute -top-4 right-8 bg-secondary text-white p-2 rounded-xl">
        <MessageCircle className="w-5 h-5" />
      </div>
      <p className="text-sm text-primary/70 leading-relaxed italic">"{comment}"</p>
      <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
        <span className="font-headline font-bold text-primary">{name}</span>
        <Badge variant="outline" className="text-[10px] border-primary/10">{role}</Badge>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <Link href="#" className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:bg-secondary hover:text-white transition-all">
      {icon}
    </Link>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block text-xs font-bold ${className}`}>
      {children}
    </span>
  );
}
