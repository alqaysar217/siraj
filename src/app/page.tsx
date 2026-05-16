
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
  MessageCircle,
  FileText,
  Eye,
  Library,
  GraduationCap,
  HelpCircle,
  Rocket,
  Target
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            <HomeInstructorCard 
              instructor={{
                id: "inst-1",
                name: "م. أحمد علي",
                title: "Senior Full Stack Developer",
                bio: "خبير في تطوير تطبيقات الويب بخبرة تزيد عن 10 سنوات في بناء الأنظمة المعقدة.",
                rating: 4.9,
                students: 12500,
                courses: 12,
                image: "instructor-1",
                social: {
                  linkedin: "#",
                  instagram: "#",
                  facebook: "#",
                  whatsapp: "#"
                }
              }} 
            />
            <HomeInstructorCard 
              instructor={{
                id: "inst-2",
                name: "د. سارة محمود",
                title: "AI & Data Science Expert",
                bio: "باحثة في مجال الذكاء اصطناعي، متخصصة في تعلم الآلة وتحليل البيانات الضخمة.",
                rating: 4.8,
                students: 8400,
                courses: 8,
                image: "instructor-2",
                social: {
                  linkedin: "#",
                  instagram: "#",
                  facebook: "#",
                  whatsapp: "#"
                }
              }} 
            />
          </div>
        </div>
      </section>

      {/* 5. قسم المكتبة الورقية */}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <HomeBookCard 
              book={{
                id: "b1",
                title: "موسوعة تطوير الويب الحديثة",
                author: "د. خالد السعيد",
                category: "برمجة",
                price: 12000,
                oldPrice: 15000,
                rating: 4.9,
                sales: 450,
                pages: 350,
                image: "book-1"
              }} 
            />
            <HomeBookCard 
              book={{
                id: "b2",
                title: "خوارزميات وهياكل البيانات",
                author: "م. سارة المفلحي",
                category: "علوم حاسوب",
                price: 8500,
                oldPrice: 10000,
                rating: 4.7,
                sales: 320,
                pages: 280,
                image: "book-2"
              }} 
            />
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
                <div className="p-6 bg-primary/5 rounded-[32px] space-y-3 shadow-sm border border-primary/5 group hover:border-secondary/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <Eye className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-headline font-bold text-secondary">رؤية المنصة</h4>
                  </div>
                  <p className="text-sm text-primary/70 leading-relaxed">أن تصبح سراج واحدة من أبرز المنصات التعليمية والخدمية في العالم العربي، عبر تقديم تعليم عصري يساعد الشباب على دخول سوق العمل بمهارة واحترافية.</p>
                </div>
                <div className="p-6 bg-primary/5 rounded-[32px] space-y-3 shadow-sm border border-primary/5 group hover:border-secondary/20 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-headline font-bold text-secondary">رسالة المنصة</h4>
                  </div>
                  <p className="text-sm text-primary/70 leading-relaxed">توفير بيئة تعليمية تجمع بين المعرفة والتطبيق العملي، تمنح المستخدمين تجربة احترافية بأسلوب بسيط وجودة عالية وأسعار مناسبة.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-[48px] p-8 md:p-12 text-white space-y-8 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-secondary/5 -z-0" />
              <h3 className="text-2xl font-headline font-bold border-b border-white/10 pb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-secondary" />
                أهدافنا الرئيسية
              </h3>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HomeReviewCard name="أحمد صالح" comment="أفضل استثمار قمت به في حياتي المهنية هو الانضمام لهذه المنصة." date="منذ شهر" rating={5} />
            <HomeReviewCard name="ليلى محمد" comment="الشرح العملي والمشاريع الحقيقية غيرت نظرتي للبرمجة تماماً." date="منذ أسبوعين" rating={5} />
            <HomeReviewCard name="ياسين علي" comment="دعم فني ممتاز ومحتوى يتحدث باستمرار مع تقنيات السوق." date="منذ 3 أيام" rating={4} />
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
              <Link href="/signup">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 h-16 rounded-2xl font-headline text-xl shadow-2xl gold-glow transition-all active:scale-95">سجل الآن مجاناً</Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-transparent hover:bg-white hover:text-primary px-10 h-16 rounded-2xl font-headline text-xl transition-all">تواصل مع مستشار</Button>
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
                <li><Link href="/courses" className="hover:text-secondary transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> الدورات التدريبية</Link></li>
                <li><Link href="/books" className="hover:text-secondary transition-colors flex items-center gap-2"><Library className="w-4 h-4" /> المكتبة الورقية</Link></li>
                <li><Link href="/instructors" className="hover:text-secondary transition-colors flex items-center gap-2"><Users className="w-4 h-4" /> نخبة المدربين</Link></li>
                <li><Link href="/verify" className="hover:text-secondary transition-colors flex items-center gap-2"><GraduationCap className="w-4 h-4" /> التحقق من الشهادات</Link></li>
                <li><Link href="/elite" className="hover:text-secondary transition-colors flex items-center gap-2"><Trophy className="w-4 h-4" /> نادي النخبة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold mb-8 text-secondary flex items-center gap-2">
                <Users className="w-4 h-4" /> الدعم والخدمات
              </h4>
              <ul className="space-y-4 text-white/60 text-sm font-medium">
                <li><Link href="/instructors/join" className="hover:text-secondary transition-colors flex items-center gap-2"><Rocket className="w-4 h-4" /> كن مدرباً معنا</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><HelpCircle className="w-4 h-4" /> مركز المساعدة</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><MessageCircle className="w-4 h-4" /> اتصل بنا</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><Shield className="w-4 h-4" /> سياسة الخصوصية</Link></li>
                <li><Link href="#" className="hover:text-secondary transition-colors flex items-center gap-2"><FileText className="w-4 h-4" /> الشروط والأحكام</Link></li>
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

// المكونات المساعدة المعرفة مرة واحدة فقط
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

function HomeInstructorCard({ instructor }: { instructor: any }) {
  const instImage = PlaceHolderImages.find(img => img.id === instructor.image);
  return (
    <div className="group bg-white rounded-[40px] border border-primary/5 luxury-shadow hover:translate-y-[-10px] transition-all duration-500 overflow-hidden flex flex-col h-full relative w-full max-w-[380px]">
      <div className="h-28 bg-primary/5 w-full absolute top-0 left-0 -z-10 group-hover:bg-secondary/5 transition-colors" />
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-secondary/20 rounded-full scale-110 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-32 h-32 md:w-36 md:h-36 shrink-0 shadow-2xl overflow-hidden rounded-full border-4 border-white">
            {instImage?.imageUrl && <Image src={instImage.imageUrl} alt={instructor.name} fill className="object-cover" />}
          </div>
        </div>
        <div className="space-y-1 mb-4">
          <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors">{instructor.name}</h3>
          <p className="text-[10px] text-secondary font-bold uppercase tracking-wide px-3 py-1 bg-secondary/5 rounded-full inline-block">{instructor.title}</p>
        </div>
        <p className="text-xs text-primary/60 leading-relaxed mb-6 line-clamp-2 italic min-h-[3rem] px-2">
          "{instructor.bio}"
        </p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all"><Linkedin className="w-4 h-4" /></div>
          <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all"><Instagram className="w-4 h-4" /></div>
          <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary/40 hover:bg-secondary hover:text-white transition-all"><MessageCircle className="w-4 h-4" /></div>
        </div>
        <div className="w-full pt-4 border-t border-primary/5 mt-auto">
          <div className="flex items-center justify-between mb-5 text-[10px] text-primary/40 font-bold px-1">
            <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-secondary fill-current" /><span>{instructor.rating.toString()} تقييم</span></div>
            <div className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-secondary/60" /><span>{instructor.courses.toString()} دورة</span></div>
            <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-secondary/60" /><span>{instructor.students.toLocaleString('en-US')} طالب</span></div>
          </div>
          <Link href={`/instructors/${instructor.id}`} className="block">
            <Button variant="outline" className="w-full h-12 rounded-2xl border-primary/10 font-headline text-xs gap-2 group/btn hover:bg-primary hover:text-white transition-all shadow-sm">
              عرض الملف الشخصي
              <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomeBookCard({ book }: { book: any }) {
  const bookImage = PlaceHolderImages.find(img => img.id === book.image);
  return (
    <div className="group bg-white rounded-[32px] overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-primary/5 p-6">
        <div className="relative w-full h-full shadow-2xl transition-transform duration-700 group-hover:scale-105 rounded-xl overflow-hidden">
          {bookImage?.imageUrl && <Image src={bookImage.imageUrl} alt={book.title} fill className="object-cover" />}
        </div>
      </div>
      <div className="p-6 space-y-4 flex flex-col flex-1">
        <div className="space-y-1">
          <h3 className="text-lg font-headline font-bold text-primary line-clamp-1">{book.title}</h3>
          <p className="text-xs text-primary/40 font-medium">تأليف: {book.author}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge className="bg-secondary/10 text-secondary border-none text-[10px] px-2 py-0.5">{book.category}</Badge>
            <div className="flex items-center gap-1 text-xs text-secondary font-bold"><Star className="w-3.5 h-3.5 fill-current" /><span>{book.rating.toString()}</span></div>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-primary/40 font-bold"><Users className="w-3 h-3" /><span>{book.sales.toLocaleString('en-US')} طلبوا الكتاب</span></div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-3 border-y border-primary/5">
          <div className="flex items-center gap-2 text-[10px] text-primary/60 font-bold"><FileText className="w-3.5 h-3.5 text-secondary" /><span>{book.pages.toLocaleString('en-US')} صفحة</span></div>
          <div className="flex items-center gap-2 text-[10px] text-primary/60 font-bold"><BookOpen className="w-3.5 h-3.5 text-secondary" /><span>نسخة ورقية</span></div>
        </div>
        <div className="flex items-center justify-between pt-2 mt-auto">
          <div className="flex flex-col">
            {book.oldPrice && <span className="text-[10px] text-primary/30 line-through mb-1">{book.oldPrice.toLocaleString('en-US')} ر.ي</span>}
            <span className="text-xl font-headline font-bold text-secondary leading-none">{book.price.toLocaleString('en-US')} <span className="text-xs">ر.ي</span></span>
          </div>
          <Link href={`/books/${book.id}`}><Button size="sm" className="rounded-xl bg-primary hover:bg-secondary text-white font-headline text-xs gap-2 px-4"><Eye className="w-3.5 h-3.5" />التفاصيل</Button></Link>
        </div>
      </div>
    </div>
  );
}

function HomeReviewCard({ name, comment, date, rating }: { name: string; comment: string; date: string; rating: number }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow space-y-4 text-right">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-bold text-lg">{name[0]}</div>
          <div className="text-right">
            <p className="text-sm font-bold text-primary">{name}</p>
            <p className="text-[10px] text-primary/40">{date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-sm text-primary/70 leading-relaxed italic">"{comment}"</p>
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
