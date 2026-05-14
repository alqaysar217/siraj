import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Filter } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const BOOKS = [
  {
    id: "b1",
    title: "موسوعة تطوير الويب الحديثة",
    author: "د. خالد السعيد",
    category: "برمجة",
    price: "12,000 ريال",
    oldPrice: "15,000 ريال",
    rating: 4.9,
    sales: 450,
    image: "book-1"
  },
  {
    id: "b2",
    title: "خوارزميات وهياكل البيانات - دليل المبرمج",
    author: "م. سارة المفلحي",
    category: "علوم حاسوب",
    price: "8,500 ريال",
    rating: 4.7,
    sales: 320,
    image: "book-2"
  },
  {
    id: "b3",
    title: "دليل المصمم لبناء واجهات المستخدم",
    author: "أحمد بن علي",
    category: "تصميم",
    price: "10,000 ريال",
    rating: 4.8,
    sales: 180,
    image: "book-1"
  }
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-headline font-bold text-primary mb-2">مكتبة سراج</h1>
              <p className="text-primary/60">اقتنِ أفضل الكتب التعليمية الورقية بنسخ فاخرة وتوصيل مباشر.</p>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="rounded-xl gap-2 font-headline border-primary/10">
                 <Filter className="w-4 h-4" />
                 تصفية
               </Button>
               <Button className="bg-secondary text-white rounded-xl gap-2 font-headline shadow-lg gold-glow">
                 سلة المشتريات
                 <ShoppingCart className="w-4 h-4" />
               </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BOOKS.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function BookCard({ book }: { book: any }) {
  const bookImage = PlaceHolderImages.find(img => img.id === book.image);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-primary/5 luxury-shadow hover:translate-y-[-5px] transition-all duration-300">
      <div className="relative aspect-[3/4] overflow-hidden bg-primary/5 p-8">
        <div className="relative w-full h-full shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
          {bookImage?.imageUrl && (
            <Image 
              src={bookImage.imageUrl} 
              alt={book.title} 
              fill 
              className="object-cover rounded-md"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Button variant="secondary" size="icon" className="rounded-full shadow-lg"><Eye className="w-5 h-5" /></Button>
          <Button variant="secondary" size="icon" className="rounded-full shadow-lg"><ShoppingCart className="w-5 h-5" /></Button>
        </div>
      </div>
      <div className="p-6 text-right space-y-4">
        <div className="flex items-center justify-between">
          <Badge className="bg-secondary/10 text-secondary border-none text-[10px]">{book.category}</Badge>
          <div className="flex items-center gap-1 text-xs text-primary/40">
            <Star className="w-3 h-3 text-secondary fill-current" />
            <span>{book.rating}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-headline font-bold text-primary mb-1 line-clamp-1">{book.title}</h3>
          <p className="text-xs text-primary/40">المؤلف: {book.author}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-primary/5">
          <div className="font-headline font-bold text-secondary text-lg">{book.price}</div>
          <p className="text-[10px] text-primary/40">{book.sales} عملية بيع</p>
        </div>
      </div>
    </div>
  );
}
