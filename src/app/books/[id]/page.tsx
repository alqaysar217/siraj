
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Star, 
  BookOpen, 
  Users, 
  FileText, 
  CheckCircle2, 
  Info, 
  MessageCircle, 
  CreditCard,
  Copy,
  ChevronLeft,
  X
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const BANKS = [
  { id: 1, name: "بنك الكريمي", accountName: "منصة سراج التعليمية", accountNumber: "123456789", color: "bg-blue-600" },
  { id: 2, name: "كاك بنك", accountName: "منصة سراج التعليمية", accountNumber: "987654321", color: "bg-red-600" },
  { id: 3, name: "بنك التضامن", accountName: "أحمد علي محمد", accountNumber: "555666777", color: "bg-orange-600" },
  { id: 4, name: "بنك اليمن والكويت", accountName: "منصة سراج التعليمية", accountNumber: "111222333", color: "bg-emerald-600" },
  { id: 5, name: "البنك الدولي اليمني", accountName: "منصة سراج التعليمية", accountNumber: "444555666", color: "bg-indigo-600" },
  { id: 6, name: "بنك سبأ الإسلامي", accountName: "منصة سراج التعليمية", accountNumber: "777888999", color: "bg-green-600" },
  { id: 7, name: "بنك الأمل", accountName: "منصة سراج التعليمية", accountNumber: "222333444", color: "bg-sky-600" },
  { id: 8, name: "بنك القطيبي", accountName: "منصة سراج التعليمية", accountNumber: "999000111", color: "bg-teal-600" },
  { id: 9, name: "مصرف البحرين الشامل", accountName: "منصة سراج التعليمية", accountNumber: "888777666", color: "bg-rose-600" },
  { id: 10, name: "شركة النجم للحوالات", accountName: "أحمد علي محمد", accountNumber: "333222111", color: "bg-amber-600" }
];

export default function BookDetailPage() {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => setMounted(true), []);

  const bookImage = PlaceHolderImages.find(img => img.id === 'book-1');
  const book = {
    title: "موسوعة تطوير الويب الحديثة",
    author: "د. خالد السعيد",
    price: 12000,
    oldPrice: 15000,
    pages: 350,
    sales: 450,
    rating: 4.9,
    category: "برمجة"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "تم النسخ",
      description: "تم نسخ رقم الحساب إلى الحافظة.",
    });
  };

  const handleWhatsAppRequest = () => {
    const message = `مرحباً، أنا مهتم بطلب كتاب: ${book.title}\nالسعر: ${book.price.toLocaleString('en-US')} ر.ي\nسأقوم بالإيداع الآن، يرجى تحضير الكتاب.`;
    window.open(`https://wa.me/967775258830?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-background text-right" dir="rtl">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Column 1: Book Info */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Badge className="bg-secondary/10 text-secondary border-none font-headline px-4 py-1">{book.category}</Badge>
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-bold text-xl">{book.rating.toLocaleString('en-US')}</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary leading-tight">{book.title}</h1>
                <p className="text-xl text-primary/40 font-medium">تأليف الخبير: {book.author}</p>
                
                <div className="grid grid-cols-3 gap-4">
                   <StatBox icon={<FileText className="w-5 h-5" />} label="الصفحات" value={mounted ? book.pages.toLocaleString('en-US') : ""} />
                   <StatBox icon={<Users className="w-5 h-5" />} label="المبيعات" value={mounted ? book.sales.toLocaleString('en-US') : ""} />
                   <StatBox icon={<BookOpen className="w-5 h-5" />} label="النسخة" value="ورقية فاخرة" />
                </div>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-white border p-1 rounded-2xl h-auto flex-wrap justify-start mb-8 luxury-shadow w-full">
                  <TabsTrigger value="overview" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline text-xs gap-2">
                    <Info className="w-4 h-4" /> نظرة عامة
                  </TabsTrigger>
                  <TabsTrigger value="content" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline text-xs gap-2">
                    <BookOpen className="w-4 h-4" /> محتوى الكتاب
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1 data-[state=active]:bg-secondary data-[state=active]:text-white px-4 py-3 rounded-xl font-headline text-xs gap-2">
                    <Star className="w-4 h-4" /> التقييمات
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                  <div className="bg-white p-8 rounded-[32px] border border-primary/5 luxury-shadow space-y-6">
                    <h3 className="text-2xl font-headline font-bold text-primary">نبذة عن الكتاب</h3>
                    <p className="text-primary/60 leading-relaxed">
                      هذا الكتاب هو الدليل الشامل لكل من يرغب في دخول عالم تطوير الويب من أوسع أبوابه. يغطي الكتاب أحدث التقنيات المستخدمة عالمياً في بناء الواجهات الأمامية والخلفية، مع التركيز على الأمثلة العملية والمشاريع الحقيقية التي يحتاجها سوق العمل.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {["تغطية شاملة لـ React و Next.js", "أساسيات Node.js وقواعد البيانات", "أفضل الممارسات في كتابة الكود", "أكثر من 50 مشروعاً تطبيقياً"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl text-sm font-bold text-primary/70">
                          <CheckCircle2 className="w-4 h-4 text-secondary" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="content" className="animate-in fade-in slide-in-from-bottom-2">
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="u1" className="bg-white border rounded-2xl px-6 border-primary/5 luxury-shadow">
                      <AccordionTrigger className="font-headline font-bold text-primary py-6">الوحدة الأولى: أساسيات الويب الحديث</AccordionTrigger>
                      <AccordionContent className="pb-6 space-y-2">
                        <li className="list-none text-primary/60 text-sm flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-secondary" /> مفاهيم الإنترنت والبروتوكولات</li>
                        <li className="list-none text-primary/60 text-sm flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-secondary" /> احتراف HTML5 و CSS3</li>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="u2" className="bg-white border rounded-2xl px-6 border-primary/5 luxury-shadow">
                      <AccordionTrigger className="font-headline font-bold text-primary py-6">الوحدة الثانية: البرمجة المتقدمة بـ JS</AccordionTrigger>
                      <AccordionContent className="pb-6 space-y-2">
                        <li className="list-none text-primary/60 text-sm flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-secondary" /> الدوال، الكائنات، والوعود</li>
                        <li className="list-none text-primary/60 text-sm flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-secondary" /> التعامل مع APIs</li>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="reviews" className="animate-in fade-in slide-in-from-bottom-2 grid md:grid-cols-2 gap-6">
                  <ReviewItem name="علي سالم" rating={5} text="كتاب ممتاز جداً، الشرح فيه متسلسل ومنطقي وسهل الفهم." date="قبل شهر" />
                  <ReviewItem name="سارة محمد" rating={5} text="أفضل مرجع ورقي لاقتناءه في مكتبتي البرمجية." date="قبل أسبوعين" />
                </TabsContent>
              </Tabs>
            </div>

            {/* Column 2: Buy Card */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-white rounded-[40px] overflow-hidden border border-primary/5 luxury-shadow p-8 space-y-8">
                <div className="relative aspect-[3/4] max-w-[280px] mx-auto rounded-3xl overflow-hidden shadow-2xl">
                  {bookImage?.imageUrl && <Image src={bookImage.imageUrl} alt="Book" fill className="object-cover" />}
                </div>
                
                <div className="space-y-6 text-center">
                  <div className="space-y-2">
                    {book.oldPrice && <span className="text-primary/30 line-through text-lg">{mounted ? book.oldPrice.toLocaleString('en-US') : ""} ر.ي</span>}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-5xl font-headline font-bold text-secondary">{mounted ? book.price.toLocaleString('en-US') : ""}</span>
                      <span className="text-secondary font-bold text-xl">ر.ي</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white rounded-[20px] text-xl font-headline shadow-2xl gold-glow gap-3">
                        <CreditCard className="w-6 h-6" /> اطلب الكتاب الآن
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] p-0 border-none bg-background font-body [&>button]:hidden" dir="rtl">
                      <div className="sticky top-0 bg-primary p-8 text-white z-10">
                        <div className="flex items-start justify-between mb-4">
                          <DialogHeader className="text-right">
                            <DialogTitle className="text-3xl font-headline font-bold">طريقة الدفع والطلب</DialogTitle>
                          </DialogHeader>
                          <DialogClose asChild>
                            <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-white/10 rounded-full h-10 w-10">
                              <X className="w-6 h-6" />
                            </Button>
                          </DialogClose>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                          لإتمام الطلب، يرجى إيداع المبلغ المذكور في أحد حساباتنا البنكية أدناه، ثم إرسال صورة السند عبر الواتساب لتأكيد الطلب.
                        </p>
                      </div>

                      <div className="p-8 space-y-8">
                        <div className="grid gap-4">
                          {BANKS.map(bank => (
                            <div key={bank.id} className="bg-white p-5 rounded-2xl border border-primary/5 luxury-shadow flex items-center justify-between group">
                              <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 ${bank.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                  <CreditCard className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                  <p className="font-headline font-bold text-primary">{bank.name}</p>
                                  <p className="text-[10px] text-primary/40 font-bold">{bank.accountName}</p>
                                  <p className="font-headline font-bold text-secondary text-sm">{bank.accountNumber}</p>
                                </div>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                className="text-primary/20 hover:text-secondary"
                                onClick={() => copyToClipboard(bank.accountNumber)}
                              >
                                <Copy className="w-5 h-5" />
                              </Button>
                            </div>
                          ))}
                        </div>

                        <div className="bg-secondary/10 p-6 rounded-3xl border border-secondary/20 space-y-4">
                          <h4 className="font-headline font-bold text-secondary flex items-center gap-2">
                             <MessageCircle className="w-5 h-5" /> ملاحظة هامة
                          </h4>
                          <p className="text-xs text-primary/70 leading-relaxed font-bold">
                            يجب إرسال صورة سند الإيداع أو الحوالة إلى رقم الواتساب الخاص بالمنصة <span className="text-secondary">(967-775258830)</span> مع ذكر اسمك والمدينة لتوصيل الكتاب.
                          </p>
                          <Button 
                            className="w-full h-14 bg-secondary text-white rounded-xl font-headline text-lg gap-2 gold-glow"
                            onClick={handleWhatsAppRequest}
                          >
                            تأكيد الطلب عبر الواتساب <ChevronLeft className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <p className="text-xs text-primary/30 font-bold">التوصيل متاح لجميع المحافظات خلال 48 ساعة</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-primary/5 luxury-shadow text-center space-y-2">
      <div className="text-secondary flex justify-center">{icon}</div>
      <p className="text-[10px] text-primary/30 font-bold uppercase">{label}</p>
      <p className="font-headline font-bold text-primary text-sm">{value}</p>
    </div>
  );
}

function ReviewItem({ name, rating, text, date }: { name: string; rating: number; text: string; date: string }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-primary/5 luxury-shadow space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-bold text-primary text-sm">{name}</p>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < rating ? 'text-secondary fill-current' : 'text-primary/10'}`} />
          ))}
        </div>
      </div>
      <p className="text-xs text-primary/60 italic leading-relaxed">"{text}"</p>
      <p className="text-[10px] text-primary/20 text-left">{date}</p>
    </div>
  );
}
